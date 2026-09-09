import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ItemSecuencia,
  RespuestaUsuario,
  ResultadoExamen,
  Submodulo,
} from './types.ts';
import { SUBMODULOS } from './data/submodulos.ts';
import {
  construirSecuenciaExamen,
  calificarExamen,
  TIEMPO_TOTAL_SEGUNDOS,
  tieneRespuesta,
} from './utils/examEngine.ts';
import { enviarResultadoAGoogleSheets } from './utils/googleSheetsService.ts';

import { Header } from './components/Header.tsx';
import { SubmoduloSelector } from './components/SubmoduloSelector.tsx';
import { QuestionCard } from './components/QuestionCard.tsx';
import { SideNavigator } from './components/SideNavigator.tsx';
import { ConfirmModal } from './components/ConfirmModal.tsx';
import { ResultScreen } from './components/ResultScreen.tsx';
import { ProfesorPanel } from './components/ProfesorPanel.tsx';

type Pantalla = 'seleccion' | 'examen' | 'resultado' | 'profesor';

export default function App() {
  const [pantalla, setPantalla] = useState<Pantalla>('seleccion');
  const [subId, setSubId] = useState<string>('I1');
  const [nombreAlumno, setNombreAlumno] = useState<string>('');
  const [semestreAlumno, setSemestreAlumno] = useState<string>('');

  // Estado del examen en curso
  const [secuencia, setSecuencia] = useState<ItemSecuencia[]>([]);
  const [posicionActual, setPosicionActual] = useState<number>(0);
  const [respuestas, setRespuestas] = useState<Record<number, RespuestaUsuario>>({});
  const [tiempoRestante, setTiempoRestante] = useState<number>(TIEMPO_TOTAL_SEGUNDOS);
  const [modalEntrega, setModalEntrega] = useState<boolean>(false);
  const [esTiempoAgotado, setEsTiempoAgotado] = useState<boolean>(false);

  // Resultado final
  const [resultado, setResultado] = useState<ResultadoExamen | null>(null);

  // Ref para el timer
  const timerRef = useRef<any>(null);

  // INICIAR EXAMEN
  const handleIniciarExamen = (sId: string, nom: string, sem: string) => {
    try {
      const items = construirSecuenciaExamen(sId);
      setSubId(sId);
      setNombreAlumno(nom);
      setSemestreAlumno(sem);
      setSecuencia(items);
      setPosicionActual(0);
      setRespuestas({});
      setTiempoRestante(TIEMPO_TOTAL_SEGUNDOS);
      setEsTiempoAgotado(false);
      setModalEntrega(false);
      setResultado(null);
      setPantalla('examen');
    } catch (err) {
      console.error('Error al iniciar examen:', err);
      alert('Ocurrió un error al preparar el examen. Por favor intenta nuevamente.');
    }
  };

  // FINALIZAR EXAMEN (Lógica robusta que corrige cualquier bloqueo al finalizar)
  const ejecutarFinalizacion = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setModalEntrega(false);

    try {
      // 1. Calcular calificación completa y detallada
      const res = calificarExamen(
        subId,
        secuencia,
        respuestas,
        nombreAlumno,
        semestreAlumno,
        tiempoRestante
      );

      // 2. Guardar en localStorage para registro docente y persistencia
      const registroLocal = {
        nombre: nombreAlumno,
        semestre: semestreAlumno,
        aciertos: res.aciertos,
        total: res.total,
        porcentaje: res.porcentaje,
        aprobado: res.aprobado,
        fecha: new Date().toISOString(),
        duracionSegundos: res.duracionSegundos,
      };
      localStorage.setItem(`ex2_${subId}`, JSON.stringify(registroLocal));

      try {
        const historialRaw = localStorage.getItem('cbt_examenes_historial');
        const historial = historialRaw ? JSON.parse(historialRaw) : [];
        historial.unshift({ subId, ...registroLocal });
        localStorage.setItem('cbt_examenes_historial', JSON.stringify(historial.slice(0, 100)));
      } catch (eHist) {
        console.warn('Error al guardar historial acumulativo:', eHist);
      }

      // Transmisión asíncrona a la Hoja de Cálculo mediante Google Apps Script
      enviarResultadoAGoogleSheets(res).catch((err) => {
        console.error('Error al enviar a Google Sheets:', err);
      });

      // 3. Pasar a pantalla de resultados
      setResultado(res);
      setPantalla('resultado');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error al finalizar el examen:', error);
      alert('Hubo un error al calificar el examen. Tus respuestas se han conservado; por favor intenta finalizar de nuevo.');
    }
  }, [subId, secuencia, respuestas, nombreAlumno, semestreAlumno, tiempoRestante]);

  // CONTADOR DE TIEMPO (Cronómetro de 90 minutos)
  useEffect(() => {
    if (pantalla === 'examen') {
      timerRef.current = setInterval(() => {
        setTiempoRestante((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setEsTiempoAgotado(true);
            setModalEntrega(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pantalla]);

  // Manejador de cambio de respuesta en pregunta actual
  const handleCambioRespuesta = (resp: RespuestaUsuario) => {
    setRespuestas((prev) => ({
      ...prev,
      [posicionActual]: resp,
    }));
  };

  // Calcular estadísticas de contestadas
  const preguntasSinResponder = secuencia.filter(
    (item, idx) => !tieneRespuesta(item.tipo, respuestas[idx])
  ).length;

  const submoduloActual: Submodulo | undefined = SUBMODULOS[subId];

  return (
    <div className="min-h-screen bg-[#f5f7f5] text-stone-900 flex flex-col font-sans selection:bg-emerald-200">
      {/* Header Institucional */}
      <Header
        titulo={
          pantalla === 'examen'
            ? submoduloActual?.nombre || 'Examen en Línea'
            : pantalla === 'resultado'
            ? `Resultados · ${submoduloActual?.nombre || 'Examen'}`
            : pantalla === 'profesor'
            ? 'Panel del Docente · CBT Chapa de Mota'
            : 'CBT Chapa de Mota · Exámenes en Línea'
        }
        subtitulo={
          pantalla === 'examen'
            ? `Alumno: ${nombreAlumno} (${semestreAlumno}) · 60 Reactivos`
            : 'Técnico en Informática · Plan NEM 2025 · Ciclo Escolar 2025–2026'
        }
        tiempoRestante={tiempoRestante}
        mostrarTimer={pantalla === 'examen'}
        progresoPorcentaje={
          secuencia.length > 0 ? ((posicionActual + 1) / secuencia.length) * 100 : 0
        }
        onOpenProfesor={() => setPantalla(pantalla === 'profesor' ? 'seleccion' : 'profesor')}
        esProfesor={pantalla === 'profesor'}
      />

      {/* Contenido Principal según Pantalla */}
      <main className="flex-1">
        {/* PANTALLA 1: SELECCIÓN DE SUBMÓDULOS */}
        {pantalla === 'seleccion' && (
          <SubmoduloSelector
            onIniciarExamen={handleIniciarExamen}
            onOpenProfesor={() => setPantalla('profesor')}
          />
        )}

        {/* PANTALLA 2: EXAMEN EN CURSO */}
        {pantalla === 'examen' && secuencia.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Tarjeta de Pregunta Actual (2 columnas) */}
              <div className="lg:col-span-2">
                {secuencia[posicionActual] && submoduloActual && (
                  <QuestionCard
                    posicion={posicionActual + 1}
                    total={secuencia.length}
                    tipo={secuencia[posicionActual].tipo}
                    pregunta={
                      submoduloActual.preguntas[secuencia[posicionActual].tipo][
                        secuencia[posicionActual].idx
                      ]
                    }
                    respuesta={respuestas[posicionActual]}
                    onCambioRespuesta={handleCambioRespuesta}
                    onAnterior={() => setPosicionActual((p) => Math.max(0, p - 1))}
                    onSiguiente={() =>
                      setPosicionActual((p) => Math.min(secuencia.length - 1, p + 1))
                    }
                    onSolicitarEntrega={() => setModalEntrega(true)}
                  />
                )}
              </div>

              {/* Barra Lateral / Navegador de 60 Reactivos (1 columna) */}
              <div className="lg:col-span-1">
                <SideNavigator
                  secuencia={secuencia}
                  posicionActual={posicionActual}
                  respuestas={respuestas}
                  onIrAPosicion={(pos) => setPosicionActual(pos)}
                  onSolicitarEntrega={() => setModalEntrega(true)}
                />
              </div>
            </div>
          </div>
        )}

        {/* PANTALLA 3: RESULTADOS Y RETROALIMENTACIÓN */}
        {pantalla === 'resultado' && resultado && (
          <ResultScreen
            resultado={resultado}
            onVolverInicio={() => {
              setResultado(null);
              setPantalla('seleccion');
            }}
          />
        )}

        {/* PANTALLA 4: PANEL DOCENTE */}
        {pantalla === 'profesor' && (
          <ProfesorPanel onVolver={() => setPantalla('seleccion')} />
        )}
      </main>

      {/* Modal de Confirmación de Entrega */}
      <ConfirmModal
        abierto={modalEntrega}
        esTiempoAgotado={esTiempoAgotado}
        preguntasSinResponder={preguntasSinResponder}
        total={secuencia.length}
        onCancelar={() => setModalEntrega(false)}
        onConfirmar={ejecutarFinalizacion}
      />

      {/* Pie de Página Institucional */}
      <footer className="bg-white border-t border-stone-200 py-4 px-4 text-center text-xs text-stone-500">
        <p>
          Centro de Bachillerato Tecnológico Chapa de Mota · Técnico en Informática · Nueva Escuela Mexicana
        </p>
      </footer>
    </div>
  );
}

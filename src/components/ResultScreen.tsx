import React, { useState, useEffect } from 'react';
import { ResultadoExamen } from '../types.ts';
import { SUBMODULOS } from '../data/submodulos.ts';
import { generarReportePDF } from '../utils/pdfGenerator.ts';
import {
  enviarResultadoAGoogleSheets,
  getSyncLog,
} from '../utils/googleSheetsService.ts';
import {
  Download,
  Home,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  User,
  GraduationCap,
  FileSpreadsheet,
  RotateCw,
} from 'lucide-react';

interface ResultScreenProps {
  resultado: ResultadoExamen;
  onVolverInicio: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  resultado,
  onVolverInicio,
}) => {
  const [tabActiva, setTabActiva] = useState<'fallidas' | 'correctas' | 'todas'>('fallidas');
  const [syncState, setSyncState] = useState<'enviando' | 'exito' | 'error' | 'idle'>('idle');
  const [syncMsg, setSyncMsg] = useState<string>('');

  const idIntento = `${resultado.subId}_${resultado.nombre}_${new Date().toISOString().slice(0, 10)}`;

  useEffect(() => {
    // Comprobar si ya fue registrado en el log
    const log = getSyncLog();
    if (log[idIntento]?.enviado) {
      setSyncState('exito');
      setSyncMsg('Registro guardado correctamente en la Hoja de Cálculo institucional.');
    } else {
      // Reintentar o asegurar el envío al cargar la pantalla
      handleEnviarSheets();
    }
  }, [resultado]);

  const handleEnviarSheets = async () => {
    setSyncState('enviando');
    setSyncMsg('Conectando y transmitiendo resultados a Google Sheets...');
    try {
      const res = await enviarResultadoAGoogleSheets(resultado);
      if (res.exito) {
        setSyncState('exito');
        setSyncMsg('Resultados registrados exitosamente en la Hoja de Cálculo del docente.');
      } else {
        setSyncState('error');
        setSyncMsg(res.mensaje);
      }
    } catch {
      setSyncState('error');
      setSyncMsg('No se pudo contactar con la hoja de cálculo. Guardado en dispositivo local.');
    }
  };
  const sub = SUBMODULOS[resultado.subId];
  const aprobado = resultado.aprobado;

  const min = Math.floor(resultado.duracionSegundos / 60);
  const seg = resultado.duracionSegundos % 60;
  const tiempoFormateado = `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')} min`;

  const fallidas = resultado.detalles.filter((d) => !d.ok);
  const correctas = resultado.detalles.filter((d) => d.ok);

  const listaFiltrada =
    tabActiva === 'fallidas'
      ? fallidas
      : tabActiva === 'correctas'
      ? correctas
      : resultado.detalles;

  const tiposList = [
    { key: 'respuesta_corta', lbl: 'R. Corta', n: 10, color: 'text-emerald-700', bg: 'bg-emerald-50' },
    { key: 'opcion_multiple', lbl: 'Op. Múltiple', n: 20, color: 'text-indigo-700', bg: 'bg-indigo-50' },
    { key: 'falso_verdadero', lbl: 'Falso / Verd.', n: 10, color: 'text-amber-700', bg: 'bg-amber-50' },
    { key: 'cloze', lbl: 'Cañevá', n: 10, color: 'text-rose-700', bg: 'bg-rose-50' },
    { key: 'relacion', lbl: 'Relación', n: 10, color: 'text-teal-700', bg: 'bg-teal-50' },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      {/* Tarjeta Principal de Calificación */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm text-center">
        <div className="inline-block mb-3">
          <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
            Evaluación Finalizada
          </span>
        </div>

        {/* Círculo de Puntaje */}
        <div
          className={`w-32 h-32 rounded-full mx-auto flex flex-col items-center justify-center border-8 transition-transform hover:scale-105 ${
            aprobado
              ? 'border-[#1a5c36] text-[#1a5c36] bg-emerald-50/50'
              : 'border-[#c0392b] text-[#c0392b] bg-red-50/50'
          }`}
        >
          <span className="font-serif text-4xl font-bold leading-none">
            {resultado.aciertos}
          </span>
          <span className="text-xs font-mono font-bold text-stone-500 mt-1">
            de {resultado.total}
          </span>
        </div>

        {/* Badge de Estado */}
        <div className="mt-4">
          <span
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${
              aprobado
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-red-100 text-red-900 border border-red-300'
            }`}
          >
            {aprobado ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            {aprobado ? 'APROBADO' : 'NO APROBADO'} (Mínimo: 36/60 = 60%)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 mt-3 font-light max-w-md mx-auto">
          {aprobado
            ? '¡Felicidades! Has acreditado satisfactoriamente los conocimientos clave de este submódulo.'
            : 'No alcanzaste el puntaje mínimo de 36 aciertos. Revisa las preguntas fallidas a continuación para retroalimentar tu aprendizaje.'}
        </p>

        {/* Metadatos del Alumno */}
        <div className="mt-6 p-4 sm:p-5 bg-stone-50 rounded-xl border border-stone-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="space-y-0.5">
            <span className="flex items-center gap-1 text-[11px] font-bold text-stone-400 uppercase">
              <User className="w-3 h-3" /> Alumno
            </span>
            <p className="font-semibold text-xs text-stone-800 line-clamp-1">
              {resultado.nombre}
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="flex items-center gap-1 text-[11px] font-bold text-stone-400 uppercase">
              <GraduationCap className="w-3 h-3" /> Semestre
            </span>
            <p className="font-semibold text-xs text-stone-800">
              {resultado.semestre}
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="flex items-center gap-1 text-[11px] font-bold text-stone-400 uppercase">
              <Calendar className="w-3 h-3" /> Fecha
            </span>
            <p className="font-semibold text-xs text-stone-800 line-clamp-1">
              {resultado.fecha}
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="flex items-center gap-1 text-[11px] font-bold text-stone-400 uppercase">
              <Clock className="w-3 h-3" /> Tiempo
            </span>
            <p className="font-semibold text-xs text-stone-800">
              {tiempoFormateado}
            </p>
          </div>
        </div>

        {/* Desglose por los 5 tipos de preguntas */}
        <div className="mt-6">
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider text-left mb-2.5">
            Desglose de Aciertos por Tipo de Reactivo
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {tiposList.map((t) => {
              const data = resultado.desglose[t.key];
              const pct = data.total > 0 ? Math.round((data.aciertos / data.total) * 100) : 0;
              return (
                <div
                  key={t.key}
                  className={`p-3 rounded-xl border border-stone-200/80 ${t.bg} text-center`}
                >
                  <span className={`font-serif text-xl font-bold block ${t.color}`}>
                    {data.aciertos}/{data.total}
                  </span>
                  <span className="text-[11px] text-stone-600 block mt-0.5 font-medium">
                    {t.lbl}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono font-semibold">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estado de sincronización con Google Sheets */}
        <div className="mt-6 p-4 rounded-xl border border-stone-200 bg-stone-50/70 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={`p-2 rounded-lg mt-0.5 ${
                syncState === 'exito'
                  ? 'bg-emerald-100 text-[#1a5c36]'
                  : syncState === 'error'
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-stone-200 text-stone-600 animate-pulse'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-stone-800">
                  Hoja de Cálculo del Docente (Google Sheets)
                </span>
                {syncState === 'exito' && (
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                    Sincronizado
                  </span>
                )}
                {syncState === 'enviando' && (
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full flex items-center gap-1">
                    <RotateCw className="w-2.5 h-2.5 animate-spin" /> Enviando...
                  </span>
                )}
                {syncState === 'error' && (
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-900 rounded-full">
                    Guardado Local
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {syncMsg ||
                  'Los resultados se transmiten a la hoja institucional para la captura de calificaciones.'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleEnviarSheets}
            disabled={syncState === 'enviando'}
            className="self-start sm:self-center px-3 py-1.5 text-[11px] font-bold text-stone-700 hover:text-stone-900 bg-white border border-stone-300 hover:bg-stone-100 rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            <RotateCw className={`w-3 h-3 ${syncState === 'enviando' ? 'animate-spin' : ''}`} />
            <span>{syncState === 'enviando' ? 'Sincronizando...' : 'Reenviar a Sheets'}</span>
          </button>
        </div>

        {/* Botones de acción principales */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => generarReportePDF(resultado)}
            className="py-3 px-6 bg-[#1a5c36] hover:bg-[#2e7d4f] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Reporte Oficial en PDF</span>
          </button>

          <button
            type="button"
            onClick={onVolverInicio}
            className="py-3 px-6 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-stone-300"
          >
            <Home className="w-4 h-4" />
            <span>Volver a la Selección de Submódulos</span>
          </button>
        </div>
      </div>

      {/* Revisión Detallada de Preguntas */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-stone-200">
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Revisión de Reactivos
            </h3>
            <p className="text-xs text-stone-500">
              Verifica tus respuestas y comprende los fundamentos de cada reactivo.
            </p>
          </div>

          <div className="flex gap-1 bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setTabActiva('fallidas')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                tabActiva === 'fallidas'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ❌ Fallidas ({fallidas.length})
            </button>

            <button
              type="button"
              onClick={() => setTabActiva('correctas')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                tabActiva === 'correctas'
                  ? 'bg-[#1a5c36] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              ✅ Correctas ({correctas.length})
            </button>

            <button
              type="button"
              onClick={() => setTabActiva('todas')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                tabActiva === 'todas'
                  ? 'bg-stone-800 text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              📋 Todas (60)
            </button>
          </div>
        </div>

        {listaFiltrada.length === 0 ? (
          <div className="p-10 text-center text-stone-400 text-xs">
            No hay preguntas en esta categoría.
          </div>
        ) : (
          <div className="space-y-4">
            {listaFiltrada.map((item) => {
              const p = item.preg;
              const esCorrecta = item.ok;

              return (
                <div
                  key={item.pos}
                  className={`p-4 sm:p-5 rounded-xl border transition-colors ${
                    esCorrecta
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : 'bg-red-50/40 border-red-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-xs font-mono font-bold flex items-center gap-1.5 ${
                        esCorrecta ? 'text-emerald-800' : 'text-red-700'
                      }`}
                    >
                      {esCorrecta ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                      Reactivo {item.pos} · {item.tipo.replace('_', ' ').toUpperCase()}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        esCorrecta ? 'bg-emerald-200 text-emerald-900' : 'bg-red-200 text-red-900'
                      }`}
                    >
                      {esCorrecta ? 'Acierto (+1)' : 'Incorrecto (0)'}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-stone-900 mb-3">
                    {p.p || p.instruccion || p.texto}
                  </p>

                  {/* Retroalimentación según el tipo */}
                  {!esCorrecta && (
                    <div className="text-xs space-y-1 mt-2 p-2.5 bg-white/80 rounded-lg border border-red-200">
                      {item.sinResp ? (
                        <span className="text-red-600 font-medium">
                          No fue contestada durante el examen.
                        </span>
                      ) : item.tipo === 'opcion_multiple' ? (
                        <div>
                          <p className="text-red-700 font-medium">
                            Tu selección: {p.o[item.resp]}
                          </p>
                          <p className="text-emerald-800 font-bold">
                            Opción correcta: {p.o[p.r]}
                          </p>
                        </div>
                      ) : item.tipo === 'falso_verdadero' ? (
                        <div>
                          <p className="text-red-700 font-medium">
                            Tu selección: {item.resp ? 'Verdadero' : 'Falso'}
                          </p>
                          <p className="text-emerald-800 font-bold">
                            Respuesta correcta: {p.r ? 'Verdadero' : 'Falso'}
                          </p>
                        </div>
                      ) : item.tipo === 'respuesta_corta' ? (
                        <div>
                          <p className="text-red-700 font-medium">
                            Tu respuesta: &ldquo;{item.resp}&rdquo;
                          </p>
                          <p className="text-emerald-800 font-bold">
                            Palabras clave esperadas: {p.keywords?.join(', ')}
                          </p>
                        </div>
                      ) : (
                        <p className="text-stone-600 italic">
                          Revisa la correspondencia de los conceptos en tu material de estudio del submódulo.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

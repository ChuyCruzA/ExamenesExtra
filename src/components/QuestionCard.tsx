import React, { useState } from 'react';
import {
  TipoPregunta,
  PreguntaRespuestaCorta,
  PreguntaOpcionMultiple,
  PreguntaFalsoVerdadero,
  PreguntaCloze,
  PreguntaRelacion,
  RespuestaUsuario,
  RespuestaCloze,
  RespuestaRelacion,
} from '../types.ts';
import { ArrowLeft, ArrowRight, HelpCircle, Check, X } from 'lucide-react';

interface QuestionCardProps {
  posicion: number;
  total: number;
  tipo: TipoPregunta;
  pregunta: any;
  respuesta: RespuestaUsuario | undefined;
  onCambioRespuesta: (resp: RespuestaUsuario) => void;
  onAnterior: () => void;
  onSiguiente: () => void;
  onSolicitarEntrega: () => void;
}

const TIPO_BADGES: Record<TipoPregunta, { label: string; bg: string; text: string; border: string }> = {
  respuesta_corta: { label: '✍️ Respuesta Corta', bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200' },
  opcion_multiple: { label: '🔘 Opción Múltiple', bg: 'bg-indigo-50', text: 'text-indigo-800', border: 'border-indigo-200' },
  falso_verdadero: { label: '⚖️ Falso / Verdadero', bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' },
  cloze: { label: '🧩 Cañevá (Completar)', bg: 'bg-rose-50', text: 'text-rose-800', border: 'border-rose-200' },
  relacion: { label: '🔗 Relación de Columnas', bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200' },
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  posicion,
  total,
  tipo,
  pregunta,
  respuesta,
  onCambioRespuesta,
  onAnterior,
  onSiguiente,
  onSolicitarEntrega,
}) => {
  const badge = TIPO_BADGES[tipo];
  const esUltima = posicion === total;

  // Estado para selección con clic (para facilitar en móviles/tablets sin drag)
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [selectedRelChipIndex, setSelectedRelChipIndex] = useState<number | null>(null);

  // 1. RENDER OPCIÓN MÚLTIPLE
  const renderOpcionMultiple = () => {
    const p = pregunta as PreguntaOpcionMultiple;
    const seleccionada = typeof respuesta === 'number' ? respuesta : null;
    const letras = ['A', 'B', 'C', 'D'];

    return (
      <div className="space-y-3 mt-4">
        {p.o.map((opcionTexto, idx) => {
          const esEsta = seleccionada === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onCambioRespuesta(idx)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 group ${
                esEsta
                  ? 'border-[#1a5c36] bg-emerald-50/60 shadow-sm'
                  : 'border-stone-200 hover:border-emerald-600 bg-white hover:bg-stone-50'
              }`}
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 border transition-all ${
                  esEsta
                    ? 'bg-[#1a5c36] border-[#1a5c36] text-white'
                    : 'border-stone-300 text-stone-600 group-hover:border-emerald-600'
                }`}
              >
                {letras[idx] || idx + 1}
              </span>
              <span
                className={`text-sm leading-relaxed pt-0.5 ${
                  esEsta ? 'font-semibold text-stone-900' : 'text-stone-700'
                }`}
              >
                {opcionTexto}
              </span>
            </button>
          );
        })}
      </div>
    );
  };

  // 2. RENDER FALSO / VERDADERO
  const renderFalsoVerdadero = () => {
    const seleccion = typeof respuesta === 'boolean' ? respuesta : null;

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <button
          type="button"
          onClick={() => onCambioRespuesta(true)}
          className={`p-5 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
            seleccion === true
              ? 'border-emerald-600 bg-emerald-100/70 text-emerald-900 shadow-sm'
              : 'border-stone-200 hover:border-emerald-500 bg-white text-stone-700'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
            <Check className="w-5 h-5" />
          </div>
          <span className="font-serif text-lg font-bold">Verdadero</span>
        </button>

        <button
          type="button"
          onClick={() => onCambioRespuesta(false)}
          className={`p-5 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
            seleccion === false
              ? 'border-red-600 bg-red-100/70 text-red-900 shadow-sm'
              : 'border-stone-200 hover:border-red-500 bg-white text-stone-700'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center">
            <X className="w-5 h-5" />
          </div>
          <span className="font-serif text-lg font-bold">Falso</span>
        </button>
      </div>
    );
  };

  // 3. RENDER RESPUESTA CORTA
  const renderRespuestaCorta = () => {
    const valor = typeof respuesta === 'string' ? respuesta : '';

    return (
      <div className="mt-4 space-y-2">
        <input
          type="text"
          value={valor}
          onChange={(e) => onCambioRespuesta(e.target.value)}
          placeholder="Escribe tu respuesta aquí..."
          className="w-full px-4 py-3 text-base border-2 border-stone-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:bg-white bg-stone-50 transition-colors"
        />
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-light">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
          <span>El evaluador compara las palabras clave conceptuales de forma automática.</span>
        </div>
      </div>
    );
  };

  // 4. RENDER CLOZE (CAÑEVÁ)
  const renderCloze = () => {
    const p = pregunta as PreguntaCloze;
    const respCloze = (respuesta as RespuestaCloze) || { slots: {} };
    const slots = respCloze.slots || {};

    const partes = p.texto.split('___');
    const indicesUsados = Object.values(slots);

    const colocarPalabra = (slotPos: number, palabraIdx: number) => {
      const nuevoSlots = { ...slots };
      // Si la palabra ya estaba en otro slot, quitarla
      Object.keys(nuevoSlots).forEach((k) => {
        if (nuevoSlots[Number(k)] === palabraIdx) delete nuevoSlots[Number(k)];
      });
      nuevoSlots[slotPos] = palabraIdx;
      onCambioRespuesta({ slots: nuevoSlots });
      setSelectedWordIndex(null);
    };

    const quitarPalabra = (slotPos: number) => {
      const nuevoSlots = { ...slots };
      delete nuevoSlots[slotPos];
      onCambioRespuesta({ slots: nuevoSlots });
    };

    return (
      <div className="mt-4 space-y-6">
        {/* Texto con huecos interactivos */}
        <div className="p-4 sm:p-5 bg-stone-50 rounded-xl border border-stone-200 text-stone-800 text-sm sm:text-base leading-relaxed">
          {partes.map((parte, i) => (
            <React.Fragment key={i}>
              <span>{parte}</span>
              {i < partes.length - 1 && (
                <span
                  onClick={() => {
                    if (slots[i] !== undefined) {
                      quitarPalabra(i);
                    } else if (selectedWordIndex !== null) {
                      colocarPalabra(i, selectedWordIndex);
                    }
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const wIdx = Number(e.dataTransfer.getData('text/plain'));
                    if (!isNaN(wIdx)) colocarPalabra(i, wIdx);
                  }}
                  className={`inline-flex items-center justify-center min-w-[110px] h-8 px-2 mx-1.5 align-middle rounded-lg border-2 text-xs font-bold cursor-pointer transition-all ${
                    slots[i] !== undefined
                      ? 'bg-emerald-100 border-emerald-600 text-emerald-950 shadow-sm'
                      : selectedWordIndex !== null
                      ? 'bg-amber-50 border-dashed border-amber-500 text-amber-700 animate-pulse'
                      : 'bg-white border-dashed border-sky-400 text-sky-600 hover:bg-sky-50'
                  }`}
                  title={slots[i] !== undefined ? 'Haz clic para quitar' : 'Arrastra o haz clic aquí'}
                >
                  {slots[i] !== undefined ? p.banco[slots[i]] : 'Espacio vacío'}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Banco de Palabras */}
        <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              Banco de Palabras (Arrastra o haz clic para colocar)
            </span>
            {selectedWordIndex !== null && (
              <button
                type="button"
                onClick={() => setSelectedWordIndex(null)}
                className="text-[11px] text-red-600 hover:underline font-semibold"
              >
                Cancelar selección
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {p.banco.map((palabra, wIdx) => {
              const usada = indicesUsados.includes(wIdx);
              const seleccionada = selectedWordIndex === wIdx;

              return (
                <button
                  key={wIdx}
                  type="button"
                  disabled={usada}
                  draggable={!usada}
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', String(wIdx))}
                  onClick={() => setSelectedWordIndex(seleccionada ? null : wIdx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    usada
                      ? 'bg-stone-200/70 border-stone-300 text-stone-400 cursor-not-allowed'
                      : seleccionada
                      ? 'bg-amber-400 border-amber-500 text-stone-900 ring-2 ring-amber-300 scale-105'
                      : 'bg-white border-sky-300 text-sky-800 hover:bg-sky-50 shadow-sm cursor-grab active:cursor-grabbing'
                  }`}
                >
                  {palabra}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // 5. RENDER RELACIÓN DE COLUMNAS
  const renderRelacion = () => {
    const p = pregunta as PreguntaRelacion;
    let respRel = respuesta as RespuestaRelacion;

    // Asegurar que exista _ordenB estable para esta pregunta
    if (!respRel || !respRel._ordenB || respRel._ordenB.length !== p.columnaB.length) {
      const orden = [...Array(p.columnaB.length).keys()].sort(() => Math.random() - 0.5);
      respRel = { pares: respRel?.pares || {}, _ordenB: orden };
    }

    const pares = respRel.pares || {};
    const ordenB = respRel._ordenB;
    const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
    const usadosEnPares = Object.values(pares);

    const emparejar = (aIdx: number, chipPos: number) => {
      const nuevoPares = { ...pares };
      Object.keys(nuevoPares).forEach((k) => {
        if (nuevoPares[Number(k)] === chipPos) delete nuevoPares[Number(k)];
      });
      nuevoPares[aIdx] = chipPos;
      onCambioRespuesta({ pares: nuevoPares, _ordenB: ordenB });
      setSelectedRelChipIndex(null);
    };

    const desemparejar = (aIdx: number) => {
      const nuevoPares = { ...pares };
      delete nuevoPares[aIdx];
      onCambioRespuesta({ pares: nuevoPares, _ordenB: ordenB });
    };

    return (
      <div className="mt-4 space-y-4">
        <p className="text-xs text-stone-500 italic">
          💡 Puedes arrastrar cada definición o hacer clic sobre una letra en la Columna B y luego en la ranura correspondiente de la Columna A.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Columna A: Conceptos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider mb-1">
              Columna A · Conceptos
            </h4>
            {p.columnaA.map((concepto, aIdx) => {
              const chipPos = pares[aIdx];
              const tienePar = chipPos !== undefined;
              const realBIdx = tienePar ? ordenB[chipPos] : null;

              return (
                <div
                  key={aIdx}
                  className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                    <span className="w-5 h-5 rounded-full bg-[#1a5c36] text-white flex items-center justify-center text-[10px] font-bold">
                      {aIdx + 1}
                    </span>
                    <span>{concepto}</span>
                  </div>

                  <div
                    onClick={() => {
                      if (tienePar) {
                        desemparejar(aIdx);
                      } else if (selectedRelChipIndex !== null) {
                        emparejar(aIdx, selectedRelChipIndex);
                      }
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      const cPos = Number(e.dataTransfer.getData('text/plain'));
                      if (!isNaN(cPos)) emparejar(aIdx, cPos);
                    }}
                    className={`min-h-[42px] px-3 py-2 rounded-lg border-2 text-xs flex items-center gap-2 cursor-pointer transition-all ${
                      tienePar
                        ? 'bg-emerald-100/70 border-emerald-600 text-emerald-900 font-medium'
                        : selectedRelChipIndex !== null
                        ? 'bg-amber-50 border-dashed border-amber-500 text-amber-700 animate-pulse'
                        : 'bg-white border-dashed border-stone-300 text-stone-400 hover:border-emerald-500'
                    }`}
                    title={tienePar ? 'Haz clic para quitar' : 'Coloca aquí la definición'}
                  >
                    {tienePar && realBIdx !== null ? (
                      <>
                        <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0">
                          {letras[chipPos]}
                        </span>
                        <span className="line-clamp-2 leading-tight">
                          {p.columnaB[realBIdx]}
                        </span>
                      </>
                    ) : (
                      <span>Arrastra o haz clic aquí para emparejar</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Columna B: Definiciones */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-xs font-bold text-stone-600 uppercase tracking-wider">
                Columna B · Definiciones
              </h4>
              {selectedRelChipIndex !== null && (
                <button
                  type="button"
                  onClick={() => setSelectedRelChipIndex(null)}
                  className="text-[11px] text-red-600 hover:underline font-semibold"
                >
                  Cancelar
                </button>
              )}
            </div>

            <div className="space-y-2.5">
              {ordenB.map((realBIdx, chipPos) => {
                const usada = usadosEnPares.includes(chipPos);
                const seleccionada = selectedRelChipIndex === chipPos;

                return (
                  <div
                    key={chipPos}
                    draggable={!usada}
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', String(chipPos))}
                    onClick={() => {
                      if (!usada) {
                        setSelectedRelChipIndex(seleccionada ? null : chipPos);
                      }
                    }}
                    className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs transition-all ${
                      usada
                        ? 'bg-stone-100 border-stone-200 text-stone-400 cursor-not-allowed opacity-60'
                        : seleccionada
                        ? 'bg-amber-100 border-amber-500 text-amber-950 ring-2 ring-amber-300 shadow-md scale-[1.01] cursor-pointer'
                        : 'bg-white border-stone-200 hover:border-emerald-600 text-stone-800 shadow-sm cursor-grab active:cursor-grabbing hover:bg-stone-50'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5 ${
                        seleccionada
                          ? 'bg-amber-500 text-white'
                          : 'bg-amber-500/20 text-amber-900'
                      }`}
                    >
                      {letras[chipPos]}
                    </span>
                    <span className="leading-snug pt-0.5">{p.columnaB[realBIdx]}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-8">
      {/* Encabezado del Reactivo */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-200">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badge.bg} ${badge.text} ${badge.border}`}
        >
          {badge.label}
        </span>
        <span className="font-mono text-xs font-semibold text-stone-500">
          Reactivo <strong className="text-stone-900">{posicion}</strong> de {total}
        </span>
      </div>

      {/* Pregunta o Instrucción (si no es cloze) */}
      {tipo !== 'cloze' && (
        <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-900 leading-relaxed">
          {pregunta.p || pregunta.instruccion}
        </h3>
      )}

      {/* Cuerpo interactivo según el tipo */}
      {tipo === 'opcion_multiple' && renderOpcionMultiple()}
      {tipo === 'falso_verdadero' && renderFalsoVerdadero()}
      {tipo === 'respuesta_corta' && renderRespuestaCorta()}
      {tipo === 'cloze' && renderCloze()}
      {tipo === 'relacion' && renderRelacion()}

      {/* Botones de Navegación Inferiores */}
      <div className="pt-8 mt-6 border-t border-stone-200 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onAnterior}
          disabled={posicion === 1}
          className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 disabled:opacity-35 disabled:cursor-not-allowed font-semibold text-xs flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Anterior</span>
        </button>

        <button
          type="button"
          onClick={esUltima ? onSolicitarEntrega : onSiguiente}
          className="px-5 py-2.5 rounded-xl bg-[#1a5c36] hover:bg-[#2e7d4f] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
        >
          <span>{esUltima ? 'Finalizar Examen →' : 'Siguiente →'}</span>
          {!esUltima && <ArrowRight className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};

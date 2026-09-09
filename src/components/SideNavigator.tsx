import React from 'react';
import { ItemSecuencia, RespuestaUsuario } from '../types.ts';
import { tieneRespuesta } from '../utils/examEngine.ts';
import { Send, CheckCircle2, Circle } from 'lucide-react';

interface SideNavigatorProps {
  secuencia: ItemSecuencia[];
  posicionActual: number;
  respuestas: Record<number, RespuestaUsuario>;
  onIrAPosicion: (pos: number) => void;
  onSolicitarEntrega: () => void;
}

export const SideNavigator: React.FC<SideNavigatorProps> = ({
  secuencia,
  posicionActual,
  respuestas,
  onIrAPosicion,
  onSolicitarEntrega,
}) => {
  const total = secuencia.length;
  let contestadas = 0;

  secuencia.forEach((item, pos) => {
    if (tieneRespuesta(item.tipo, respuestas[pos])) {
      contestadas++;
    }
  });

  const pendientes = total - contestadas;

  return (
    <div className="bg-white rounded-2xl border border-stone-200/90 p-5 shadow-sm space-y-5 sticky top-20">
      <div>
        <h3 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
          Navegador de Preguntas
        </h3>
        <p className="text-xs text-stone-500">
          Haz clic en cualquier número para revisar o modificar tu respuesta.
        </p>
      </div>

      {/* Grid de 60 reactivos */}
      <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-1.5 max-h-[300px] overflow-y-auto pr-1">
        {secuencia.map((item, idx) => {
          const esActual = idx === posicionActual;
          const respondida = tieneRespuesta(item.tipo, respuestas[idx]);

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onIrAPosicion(idx)}
              className={`h-8 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center border ${
                esActual
                  ? 'border-amber-500 bg-amber-400 text-stone-900 ring-2 ring-amber-300 z-10 scale-105'
                  : respondida
                  ? 'bg-[#1a5c36] border-[#1a5c36] text-white hover:bg-[#2e7d4f]'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:border-emerald-600 hover:bg-white'
              }`}
              title={`Pregunta ${idx + 1} (${respondida ? 'Respondida' : 'Sin responder'})`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Leyenda y estadísticas */}
      <div className="pt-3 border-t border-stone-200 space-y-2 text-xs">
        <div className="flex items-center justify-between text-stone-600">
          <span className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Respondidas:</span>
          </span>
          <span className="font-bold text-emerald-800 font-mono text-sm">
            {contestadas} / {total}
          </span>
        </div>

        <div className="flex items-center justify-between text-stone-600">
          <span className="flex items-center gap-1.5 font-medium">
            <Circle className="w-3.5 h-3.5 text-stone-400" />
            <span>Sin contestar:</span>
          </span>
          <span className="font-bold text-stone-700 font-mono text-sm">
            {pendientes}
          </span>
        </div>
      </div>

      {/* Botón de Entrega */}
      <button
        type="button"
        onClick={onSolicitarEntrega}
        className="w-full py-2.5 px-4 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Entregar Examen</span>
      </button>
    </div>
  );
};

import React from 'react';
import { AlertCircle, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface ConfirmModalProps {
  abierto: boolean;
  esTiempoAgotado?: boolean;
  preguntasSinResponder: number;
  total: number;
  onCancelar: () => void;
  onConfirmar: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  abierto,
  esTiempoAgotado = false,
  preguntasSinResponder,
  total,
  onCancelar,
  onConfirmar,
}) => {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150 text-center">
        <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-4 border">
          {esTiempoAgotado ? (
            <div className="bg-amber-100 text-amber-700 w-full h-full rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
          ) : preguntasSinResponder > 0 ? (
            <div className="bg-amber-100 text-amber-700 w-full h-full rounded-full flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
          ) : (
            <div className="bg-emerald-100 text-emerald-800 w-full h-full rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
          )}
        </div>

        <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
          {esTiempoAgotado ? '¡Tiempo Agotado!' : '¿Deseas entregar tu examen?'}
        </h3>

        <div className="text-xs text-stone-600 space-y-2 mb-6 leading-relaxed">
          {esTiempoAgotado ? (
            <p>
              Los 90 minutos reglamentarios han concluido. Se procederá a calificar las respuestas
              registradas hasta el momento.
            </p>
          ) : preguntasSinResponder > 0 ? (
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-left flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                Aún tienes <strong>{preguntasSinResponder}</strong> de {total} preguntas sin
                responder. ¿Estás seguro de entregar ahora?
              </span>
            </div>
          ) : (
            <p>
              Has respondido todas las <strong>{total} preguntas</strong>. Al confirmar la entrega no
              podrás modificar tus respuestas y se calculará tu puntaje inmediatamente.
            </p>
          )}
        </div>

        <div className="flex gap-3 justify-center">
          {!esTiempoAgotado && (
            <button
              type="button"
              onClick={onCancelar}
              className="flex-1 py-2.5 px-4 rounded-xl border border-stone-300 text-stone-700 font-semibold text-xs hover:bg-stone-50 transition-colors"
            >
              Continuar respondiendo
            </button>
          )}

          <button
            type="button"
            onClick={onConfirmar}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#c0392b] hover:bg-[#a93226] text-white font-bold text-xs transition-colors shadow-sm"
          >
            {esTiempoAgotado ? 'Ver Resultados Ahora' : 'Sí, Entregar Examen'}
          </button>
        </div>
      </div>
    </div>
  );
};

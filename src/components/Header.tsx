import React from 'react';
import { Clock, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  titulo?: string;
  subtitulo?: string;
  tiempoRestante?: number;
  mostrarTimer?: boolean;
  progresoPorcentaje?: number;
  onOpenProfesor?: () => void;
  esProfesor?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  titulo = 'CBT Chapa de Mota · Examen en Línea',
  subtitulo = 'Técnico en Informática · Plan NEM 2025 · Ciclo 2025–2026',
  tiempoRestante = 90 * 60,
  mostrarTimer = false,
  progresoPorcentaje = 0,
  onOpenProfesor,
  esProfesor = false,
}) => {
  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;
  const timerTexto = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  const esPocoTiempo = tiempoRestante <= 300; // últimos 5 minutos

  return (
    <header className="sticky top-0 z-40 bg-[#1a5c36] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[64px]">
        {/* Logo e información */}
        <div className="flex items-center gap-3 py-2">
          <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center font-serif text-lg font-bold tracking-wider text-emerald-100 border border-white/20 shadow-inner">
            CBT
          </div>
          <div>
            <h1 className="font-serif text-base sm:text-lg font-bold leading-tight line-clamp-1">
              {titulo}
            </h1>
            <p className="text-xs text-emerald-100/80 font-normal line-clamp-1">
              {subtitulo}
            </p>
          </div>
        </div>

        {/* Acciones y Timer */}
        <div className="flex items-center gap-3">
          {mostrarTimer && (
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors ${
                esPocoTiempo
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                  : 'bg-white/10 border-white/15 text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <div className="text-right">
                <span className="block text-[10px] uppercase tracking-wider text-emerald-200/80 leading-none">
                  Tiempo
                </span>
                <span className="font-mono text-base sm:text-lg font-bold leading-none">
                  {timerTexto}
                </span>
              </div>
            </div>
          )}

          {onOpenProfesor && (
            <button
              onClick={onOpenProfesor}
              title="Panel del Docente"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                esProfesor
                  ? 'bg-white text-[#1a5c36] shadow-sm'
                  : 'bg-white/10 text-emerald-100 hover:bg-white/20 border border-white/15'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Modo Profesor</span>
            </button>
          )}
        </div>
      </div>

      {/* Barra de progreso suave */}
      {mostrarTimer && (
        <div className="w-full bg-black/20 h-1">
          <div
            className="bg-emerald-300 h-1 transition-all duration-300 ease-out"
            style={{ width: `${Math.min(100, Math.max(0, progresoPorcentaje))}%` }}
          />
        </div>
      )}
    </header>
  );
};

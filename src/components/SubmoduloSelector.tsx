import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, Play, Lock, AlertTriangle } from 'lucide-react';
import { SUBMODULOS } from '../data/submodulos.ts';

interface SubmoduloSelectorProps {
  onIniciarExamen: (subId: string, nombre: string, semestre: string) => void;
  onOpenProfesor: () => void;
}

const MODULOS_INFO = [
  { mod: 'Módulo I', sem: '2° Semestre', ids: ['I1', 'I2'], icon: '⚙️' },
  { mod: 'Módulo II', sem: '3° Semestre', ids: ['II1', 'II2'], icon: '🧩' },
  { mod: 'Módulo III', sem: '4° Semestre', ids: ['III1', 'III2', 'III3'], icon: '🌐' },
  { mod: 'Módulo IV', sem: '5° Semestre', ids: ['IV1', 'IV2', 'IV3'], icon: '💻' },
];

export const SubmoduloSelector: React.FC<SubmoduloSelectorProps> = ({
  onIniciarExamen,
  onOpenProfesor,
}) => {
  const [modalSubId, setModalSubId] = useState<string | null>(null);
  const [nombre, setNombre] = useState('');
  const [semestre, setSemestre] = useState('');
  const [errorValidacion, setErrorValidacion] = useState('');

  const handleSeleccionar = (subId: string) => {
    const sub = SUBMODULOS[subId];
    if (!sub) return;
    setModalSubId(subId);
    setSemestre(sub.semestre + ' Semestre');
    setErrorValidacion('');
  };

  const handleComenzar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalSubId) return;
    const cleanNombre = nombre.trim();
    if (!cleanNombre) {
      setErrorValidacion('Por favor escribe tu nombre completo (Apellido Paterno, Materno, Nombres).');
      return;
    }
    if (!semestre) {
      setErrorValidacion('Por favor selecciona tu semestre.');
      return;
    }

    // Verificar si ya presentó
    const previo = localStorage.getItem(`ex2_${modalSubId}`);
    if (previo) {
      setErrorValidacion('Ya registraste un examen en este equipo para este submódulo. Contacta a tu docente para habilitar un nuevo intento.');
      return;
    }

    onIniciarExamen(modalSubId, cleanNombre, semestre);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Banner de Bienvenida */}
      <div className="bg-gradient-to-br from-[#1a5c36] to-[#2e7d4f] text-white rounded-2xl p-6 sm:p-10 shadow-lg mb-8 text-center sm:text-left relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Evaluación Institucional NEM 2025
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight mb-3">
            Exámenes en Línea de Informática
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-6 font-light">
            Plataforma oficial del CBT Chapa de Mota. Cada examen evalúa integralmente el submódulo
            con <strong>60 reactivos</strong> distribuidos en 5 tipos pedagógicos: Respuesta Corta,
            Opción Múltiple, Falso/Verdadero, Cañevá y Relación de Columnas.
          </p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs font-medium">
            <span className="px-2.5 py-1 bg-white/15 rounded-md border border-white/20">
              ✍️ 10 Respuesta Corta
            </span>
            <span className="px-2.5 py-1 bg-white/15 rounded-md border border-white/20">
              🔘 20 Opción Múltiple
            </span>
            <span className="px-2.5 py-1 bg-white/15 rounded-md border border-white/20">
              ⚖️ 10 Falso / Verdadero
            </span>
            <span className="px-2.5 py-1 bg-white/15 rounded-md border border-white/20">
              🧩 10 Cañevá
            </span>
            <span className="px-2.5 py-1 bg-white/15 rounded-md border border-white/20">
              🔗 10 Relación de Columnas
            </span>
          </div>
        </div>
      </div>

      {/* Lista de Módulos y Submódulos */}
      <div className="space-y-8">
        {MODULOS_INFO.map((bloque) => (
          <div key={bloque.mod} className="bg-white rounded-xl border border-stone-200/80 p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{bloque.icon}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {bloque.mod}
                  </h3>
                  <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {bloque.sem}
                  </span>
                </div>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                {bloque.ids.length} Submódulos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bloque.ids.map((id) => {
                const sub = SUBMODULOS[id];
                if (!sub) return null;
                const yaPresentado = Boolean(localStorage.getItem(`ex2_${id}`));
                const nombreLimpio = sub.nombre.replace(/^[IVX]+\.\d+\s·\s/, '');

                return (
                  <div
                    key={id}
                    className="flex flex-col justify-between p-4 rounded-lg border border-stone-200 hover:border-emerald-600 bg-stone-50/50 hover:bg-emerald-50/30 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                          Submódulo {id.replace(/([IVX]+)(\d)/, '$1.$2')}
                        </span>
                        {yaPresentado ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3 h-3" /> Realizado
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-600 bg-stone-200/70 px-2 py-0.5 rounded-full">
                            <Clock className="w-3 h-3" /> 90 min
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-base font-semibold text-stone-900 leading-snug mb-3 line-clamp-2">
                        {nombreLimpio}
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] text-stone-600">
                        <span className="px-1.5 py-0.5 bg-white rounded border border-stone-200">
                          60 reactivos
                        </span>
                        <span className="px-1.5 py-0.5 bg-white rounded border border-stone-200">
                          NEM 2025
                        </span>
                        <span className="px-1.5 py-0.5 bg-emerald-100/60 text-emerald-800 rounded font-medium">
                          10 tipos c/u
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleSeleccionar(id)}
                      className="w-full mt-2 py-2 px-3 bg-[#1a5c36] hover:bg-[#2e7d4f] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {yaPresentado ? 'Ver o Repetir Examen' : 'Presentar Examen'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sección rápida de acceso a Modo Profesor */}
      <div className="mt-10 p-6 bg-stone-100 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-stone-300/70 flex items-center justify-center text-stone-700">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-stone-800 text-sm">
              ¿Eres docente del CBT Chapa de Mota?
            </h4>
            <p className="text-xs text-stone-600">
              Accede al panel de estadísticas, historial de calificaciones de alumnos y descarga de reportes.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenProfesor}
          className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
        >
          Acceso Docente →
        </button>
      </div>

      {/* Modal de Registro para Iniciar */}
      {modalSubId && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-serif font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                  Registro de Alumno
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900 line-clamp-1">
                  {SUBMODULOS[modalSubId]?.nombre}
                </h3>
              </div>
            </div>

            <p className="text-xs text-stone-600 mb-5 leading-relaxed">
              Ingresa tus datos verídicos tal como aparecen en las listas escolares. Dispondrás de{' '}
              <strong>90 minutos</strong> cronometrados para completar los 60 reactivos.
            </p>

            {errorValidacion && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorValidacion}</span>
              </div>
            )}

            <form onSubmit={handleComenzar} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nombre Completo del Alumno *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Hernández López, Carlos Manuel"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Semestre Cursado *
                </label>
                <select
                  value={semestre}
                  onChange={(e) => setSemestre(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-white"
                >
                  <option value="">— Selecciona —</option>
                  <option value="2° Semestre">2° Semestre</option>
                  <option value="3° Semestre">3° Semestre</option>
                  <option value="4° Semestre">4° Semestre</option>
                  <option value="5° Semestre">5° Semestre</option>
                </select>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setModalSubId(null)}
                  className="flex-1 py-2.5 border border-stone-300 text-stone-700 font-semibold text-xs rounded-lg hover:bg-stone-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#1a5c36] hover:bg-[#2e7d4f] text-white font-bold text-xs rounded-lg shadow-sm transition-colors"
                >
                  Iniciar Examen →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

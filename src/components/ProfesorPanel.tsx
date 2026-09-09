import React, { useState, useEffect } from 'react';
import { SUBMODULOS } from '../data/submodulos.ts';
import { ExamenLocalGuardado } from '../types.ts';
import {
  getAppsScriptUrl,
  setAppsScriptUrl,
  resetAppsScriptUrl,
  probarConexionAppsScript,
  enviarResultadoAGoogleSheets,
  APPS_SCRIPT_URL_DEFAULT,
} from '../utils/googleSheetsService.ts';
import {
  Lock,
  Download,
  Trash2,
  Search,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Users,
  Award,
  BarChart3,
  BookOpen,
  FileSpreadsheet,
  RotateCw,
  Check,
  Save,
} from 'lucide-react';

interface ProfesorPanelProps {
  onVolver: () => void;
}

const PASSWORD_DOCENTE = 'cbt2025prof';

export const ProfesorPanel: React.FC<ProfesorPanelProps> = ({ onVolver }) => {
  const [autenticado, setAutenticado] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);

  const [examenes, setExamenes] = useState<(ExamenLocalGuardado & { subId: string })[]>([]);
  const [filtroSub, setFiltroSub] = useState('');
  const [filtroSem, setFiltroSem] = useState('');
  const [filtroNombre, setFiltroNombre] = useState('');
  const [tabActual, setTabActual] = useState<'resumen' | 'alumnos' | 'tipos' | 'config'>('resumen');

  // Estado para gestión de Google Sheets
  const [appsScriptUrlInput, setAppsScriptUrlInput] = useState<string>(getAppsScriptUrl());
  const [guardadoUrlOk, setGuardadoUrlOk] = useState(false);
  const [testConexionStatus, setTestConexionStatus] = useState<'idle' | 'probando' | 'ok' | 'error'>('idle');
  const [testConexionMsg, setTestConexionMsg] = useState('');
  const [sincronizandoTodo, setSincronizandoTodo] = useState(false);
  const [syncTodoMsg, setSyncTodoMsg] = useState('');

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = () => {
    const lista: (ExamenLocalGuardado & { subId: string })[] = [];

    // 1. Cargar del historial acumulativo si existe
    try {
      const historialRaw = localStorage.getItem('cbt_examenes_historial');
      if (historialRaw) {
        const hist = JSON.parse(historialRaw);
        if (Array.isArray(hist)) {
          hist.forEach((item) => {
            if (item && item.subId && SUBMODULOS[item.subId]) {
              lista.push(item);
            }
          });
        }
      }
    } catch (e) {
      console.error('Error al leer historial:', e);
    }

    // 2. Cargar registros por clave individual ex2_
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('ex2_') && !k.includes('_ord')) {
        const subId = k.replace('ex2_', '');
        if (SUBMODULOS[subId]) {
          try {
            const val = JSON.parse(localStorage.getItem(k) || '{}');
            const existe = lista.some(
              (x) => x.subId === subId && x.nombre === val.nombre && x.fecha === val.fecha
            );
            if (!existe) {
              lista.push({ subId, ...val });
            }
          } catch (e) {
            console.error('Error al leer registro:', e);
          }
        }
      }
    }
    setExamenes(lista);
  };

  const handleGuardarUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appsScriptUrlInput.trim()) {
      resetAppsScriptUrl();
      setAppsScriptUrlInput(APPS_SCRIPT_URL_DEFAULT);
    } else {
      setAppsScriptUrl(appsScriptUrlInput.trim());
    }
    setGuardadoUrlOk(true);
    setTimeout(() => setGuardadoUrlOk(false), 3000);
  };

  const handleRestablecerUrl = () => {
    resetAppsScriptUrl();
    setAppsScriptUrlInput(APPS_SCRIPT_URL_DEFAULT);
    setGuardadoUrlOk(true);
    setTimeout(() => setGuardadoUrlOk(false), 3000);
  };

  const handleProbarConexion = async () => {
    setTestConexionStatus('probando');
    setTestConexionMsg('Verificando respuesta del script de Google Apps Script...');
    const res = await probarConexionAppsScript(appsScriptUrlInput);
    if (res.exito) {
      setTestConexionStatus('ok');
      setTestConexionMsg('¡Conexión exitosa! El endpoint está activo y listo para recibir datos.');
    } else {
      setTestConexionStatus('error');
      setTestConexionMsg(res.mensaje || 'Error al comunicarse con la URL proporcionada.');
    }
    setTimeout(() => setTestConexionStatus('idle'), 6000);
  };

  const handleSincronizarTodo = async () => {
    if (examenes.length === 0) {
      setSyncTodoMsg('No hay evaluaciones registradas para sincronizar.');
      setTimeout(() => setSyncTodoMsg(''), 4000);
      return;
    }

    setSincronizandoTodo(true);
    setSyncTodoMsg(`Transmitiendo ${examenes.length} registro(s) a Google Sheets...`);
    let exitosos = 0;

    for (const item of examenes) {
      const fakeResultado: any = {
        subId: item.subId,
        nombre: item.nombre,
        semestre: item.semestre,
        aciertos: item.aciertos,
        total: item.total || 60,
        porcentaje: item.porcentaje,
        aprobado: item.aprobado,
        fecha: item.fecha ? new Date(item.fecha).toLocaleDateString('es-MX') : new Date().toLocaleDateString('es-MX'),
        duracionSegundos: item.duracionSegundos || 0,
        desglose: {
          respuesta_corta: { aciertos: 0, total: 10 },
          opcion_multiple: { aciertos: 0, total: 20 },
          falso_verdadero: { aciertos: 0, total: 10 },
          cloze: { aciertos: 0, total: 10 },
          relacion: { aciertos: 0, total: 10 },
        },
        detalles: [],
      };

      try {
        await enviarResultadoAGoogleSheets(fakeResultado, appsScriptUrlInput);
        exitosos++;
      } catch (e) {
        console.error('Error sincronizando item:', e);
      }
    }

    setSincronizandoTodo(false);
    setSyncTodoMsg(`¡Sincronización terminada! ${exitosos} de ${examenes.length} registros enviados a Google Sheets.`);
    setTimeout(() => setSyncTodoMsg(''), 6000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PASSWORD_DOCENTE) {
      setAutenticado(true);
      setErrorLogin(false);
    } else {
      setErrorLogin(true);
      setTimeout(() => setErrorLogin(false), 3000);
    }
  };

  const examenesFiltrados = examenes.filter((item) => {
    const coincideSub = !filtroSub || item.subId === filtroSub;
    const coincideSem = !filtroSem || item.semestre === filtroSem;
    const coincideNom =
      !filtroNombre ||
      (item.nombre || '').toLowerCase().includes(filtroNombre.toLowerCase());
    return coincideSub && coincideSem && coincideNom;
  });

  const totalExamenes = examenes.length;
  const aprobados = examenes.filter((e) => e.aciertos >= 36).length;
  const reprobados = totalExamenes - aprobados;
  const promedioAciertos =
    totalExamenes > 0
      ? (examenes.reduce((acc, curr) => acc + (curr.aciertos || 0), 0) / totalExamenes).toFixed(1)
      : '0.0';

  const submodulosActivos = new Set(examenes.map((e) => e.subId)).size;

  const exportarCSV = () => {
    const headers = ['Alumno', 'Semestre', 'Submódulo', 'Aciertos', 'Estado', 'Fecha'];
    const rows = examenes.map((d) => [
      `"${d.nombre || ''}"`,
      `"${d.semestre || ''}"`,
      `"${SUBMODULOS[d.subId]?.nombre || d.subId}"`,
      d.aciertos || 0,
      (d.aciertos || 0) >= 36 ? 'Aprobado' : 'No aprobado',
      `"${d.fecha ? new Date(d.fecha).toLocaleDateString('es-MX') : '—'}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `reporte_evaluaciones_cbt_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const borrarRegistrosLocales = () => {
    if (
      !window.confirm(
        '¿Estás seguro de que deseas borrar todos los intentos guardados en este equipo? Esta acción no se puede deshacer.'
      )
    ) {
      return;
    }

    const keysToDelete: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('ex2_')) keysToDelete.push(k);
    }
    keysToDelete.forEach((k) => localStorage.removeItem(k));
    cargarDatos();
    alert(`Se eliminaron ${keysToDelete.length} registros locales.`);
  };

  // PANTALLA DE ACCESO RESTRINGIDO
  if (!autenticado) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#1a5c36] flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Modo Profesor · Acceso Seguro
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Ingresa la contraseña docente para visualizar reportes y estadísticas de los alumnos.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Contraseña del docente"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-2.5 text-sm border-2 border-stone-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:bg-white bg-stone-50 text-center font-mono tracking-widest"
                autoFocus
              />
              {errorLogin && (
                <p className="text-xs text-red-600 font-semibold mt-2">
                  Contraseña incorrecta. Verifica e intenta de nuevo.
                </p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onVolver}
                className="flex-1 py-2.5 border border-stone-300 text-stone-700 font-semibold text-xs rounded-xl hover:bg-stone-50"
              >
                ← Volver
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 bg-[#1a5c36] hover:bg-[#2e7d4f] text-white font-bold text-xs rounded-xl shadow-sm"
              >
                Acceder al Panel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // PANTALLA PRINCIPAL DEL PANEL DOCENTE
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10 space-y-6">
      {/* Barra superior de navegación del docente */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
        <div>
          <button
            type="button"
            onClick={onVolver}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Volver a Alumnos
          </button>
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Panel Docente · CBT Chapa de Mota
          </h2>
          <p className="text-xs text-stone-500">
            Supervisión integral de evaluaciones y analíticas de desempeño por submódulo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleSincronizarTodo}
            disabled={sincronizandoTodo}
            className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
            title="Enviar todas las evaluaciones de este equipo a la Hoja de Cálculo de Google"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>{sincronizandoTodo ? 'Sincronizando...' : 'Sincronizar con Sheets'}</span>
          </button>
          <button
            type="button"
            onClick={exportarCSV}
            className="px-3.5 py-2 bg-[#1a5c36] hover:bg-[#2e7d4f] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exportar CSV</span>
          </button>
          <button
            type="button"
            onClick={() => setAutenticado(false)}
            className="px-3.5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-semibold rounded-lg"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 gap-2 overflow-x-auto text-xs font-bold">
        {[
          { id: 'resumen', label: '📊 Resumen General' },
          { id: 'alumnos', label: '👨‍🎓 Lista de Evaluaciones' },
          { id: 'tipos', label: '📋 Rendimiento por Tipo' },
          { id: 'config', label: '⚙️ Configuración' },
        ].map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTabActual(t.id as any)}
            className={`py-2.5 px-4 border-b-2 transition-all whitespace-nowrap ${
              tabActual === t.id
                ? 'border-[#1a5c36] text-[#1a5c36] bg-emerald-50/40'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: RESUMEN */}
      {tabActual === 'resumen' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-xl border border-stone-200 text-center shadow-sm">
              <Users className="w-5 h-5 text-stone-400 mx-auto mb-2" />
              <span className="font-serif text-3xl font-bold text-stone-900 block">
                {totalExamenes}
              </span>
              <span className="text-xs text-stone-500 font-medium">Exámenes Realizados</span>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200 text-center shadow-sm">
              <Award className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
              <span className="font-serif text-3xl font-bold text-emerald-700 block">
                {aprobados}
              </span>
              <span className="text-xs text-stone-500 font-medium">Aprobados (≥36)</span>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200 text-center shadow-sm">
              <XCircle className="w-5 h-5 text-red-600 mx-auto mb-2" />
              <span className="font-serif text-3xl font-bold text-red-600 block">
                {reprobados}
              </span>
              <span className="text-xs text-stone-500 font-medium">No Aprobados (&lt;36)</span>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200 text-center shadow-sm">
              <BarChart3 className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
              <span className="font-serif text-3xl font-bold text-indigo-700 block">
                {promedioAciertos}
              </span>
              <span className="text-xs text-stone-500 font-medium">Promedio Aciertos / 60</span>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm">
            <h3 className="font-serif text-base font-bold text-stone-900 mb-4">
              Estado de los 10 Submódulos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.keys(SUBMODULOS).map((id) => {
                const sub = SUBMODULOS[id];
                const examenesSub = examenes.filter((e) => e.subId === id);
                const count = examenesSub.length;
                const aprobadosSub = examenesSub.filter((e) => e.aciertos >= 36).length;
                const pct = count > 0 ? Math.round((aprobadosSub / count) * 100) : 0;

                return (
                  <div
                    key={id}
                    className="p-3.5 rounded-lg border border-stone-200 bg-stone-50 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-800 uppercase">
                        Submódulo {id.replace(/([IVX]+)(\d)/, '$1.$2')}
                      </span>
                      <p className="text-xs text-stone-700 font-medium line-clamp-1">
                        {sub.nombre.replace(/^[IVX]+\.\d+\s·\s/, '')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-stone-900 block">
                        {count} {count === 1 ? 'alumno' : 'alumnos'}
                      </span>
                      <span className="text-[10px] text-stone-500 font-medium">
                        {count > 0 ? `${pct}% aprobados` : 'Sin registros'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: LISTA DE ALUMNOS */}
      {tabActual === 'alumnos' && (
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap gap-2.5 items-center justify-between">
            <div className="flex flex-wrap gap-2 flex-1">
              <select
                value={filtroSub}
                onChange={(e) => setFiltroSub(e.target.value)}
                className="text-xs border border-stone-300 rounded-lg px-2.5 py-1.5 bg-white"
              >
                <option value="">Todos los submódulos</option>
                {Object.keys(SUBMODULOS).map((k) => (
                  <option key={k} value={k}>
                    {SUBMODULOS[k].nombre}
                  </option>
                ))}
              </select>

              <select
                value={filtroSem}
                onChange={(e) => setFiltroSem(e.target.value)}
                className="text-xs border border-stone-300 rounded-lg px-2.5 py-1.5 bg-white"
              >
                <option value="">Todos los semestres</option>
                <option value="2° Semestre">2° Semestre</option>
                <option value="3° Semestre">3° Semestre</option>
                <option value="4° Semestre">4° Semestre</option>
                <option value="5° Semestre">5° Semestre</option>
              </select>

              <div className="relative min-w-[200px]">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Buscar por nombre..."
                  value={filtroNombre}
                  onChange={(e) => setFiltroNombre(e.target.value)}
                  className="w-full text-xs border border-stone-300 rounded-lg pl-8 pr-3 py-1.5"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setFiltroSub('');
                setFiltroSem('');
                setFiltroNombre('');
              }}
              className="text-xs text-stone-500 hover:text-stone-800 font-medium"
            >
              ✕ Limpiar filtros
            </button>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-lg">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1a5c36] text-white">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Alumno</th>
                  <th className="py-2.5 px-3">Semestre</th>
                  <th className="py-2.5 px-3">Submódulo</th>
                  <th className="py-2.5 px-3 text-center">Aciertos</th>
                  <th className="py-2.5 px-3 text-center">Estado</th>
                  <th className="py-2.5 px-3">Fecha</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {examenesFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-stone-400">
                      No se encontraron evaluaciones con los filtros seleccionados.
                    </td>
                  </tr>
                ) : (
                  examenesFiltrados.map((item, idx) => {
                    const ap = item.aciertos >= 36;
                    return (
                      <tr key={idx} className="hover:bg-stone-50">
                        <td className="py-2.5 px-3 font-mono text-stone-400">{idx + 1}</td>
                        <td className="py-2.5 px-3 font-bold text-stone-800">
                          {item.nombre || '—'}
                        </td>
                        <td className="py-2.5 px-3 text-stone-600">{item.semestre || '—'}</td>
                        <td className="py-2.5 px-3 text-stone-600">
                          {SUBMODULOS[item.subId]?.nombre || item.subId}
                        </td>
                        <td className="py-2.5 px-3 text-center font-mono font-bold text-stone-900">
                          {item.aciertos}/60
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              ap
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {ap ? 'Aprobado' : 'No aprobado'}
                          </span>
                        </td>
                        <td className="py-2.5 px-3 text-stone-500 font-mono">
                          {item.fecha ? new Date(item.fecha).toLocaleDateString('es-MX') : '—'}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: POR TIPO */}
      {tabActual === 'tipos' && (
        <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-4">
          <p className="text-xs text-stone-600">
            Estructura balanceada oficial: cada examen cuenta con 60 reactivos (10 Respuesta Corta,
            20 Opción Múltiple, 10 Falso/Verdadero, 10 Cañevá y 10 Relación de Columnas).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { label: '✍️ Respuesta Corta', n: '10 reactivos', desc: 'Evalúa retención conceptual y terminología técnica' },
              { label: '🔘 Opción Múltiple', n: '20 reactivos', desc: 'Análisis de opciones aleatorizadas A, B, C, D' },
              { label: '⚖️ Falso / Verdadero', n: '10 reactivos', desc: 'Discriminación de afirmaciones y axiomas' },
              { label: '🧩 Cañevá (Cloze)', n: '10 reactivos', desc: 'Completación de textos técnicos con banco de palabras' },
              { label: '🔗 Relación de Columnas', n: '10 reactivos', desc: 'Emparejamiento de conceptos clave y definiciones' },
            ].map((t) => (
              <div key={t.label} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                <h4 className="font-bold text-xs text-stone-800">{t.label}</h4>
                <span className="text-[11px] font-mono text-emerald-700 block font-semibold">{t.n}</span>
                <p className="text-[11px] text-stone-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: CONFIGURACIÓN */}
      {tabActual === 'config' && (
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-6 max-w-2xl">
          <div>
            <h3 className="font-serif text-base font-bold text-stone-900 mb-1">
              Parámetros del Sistema y Conexión Institucional
            </h3>
            <p className="text-xs text-stone-500">
              Gestión de contraseñas, almacenamiento local y sincronización con Google Sheets del CBT Chapa de Mota.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            {/* Sección Google Sheets / Google Apps Script */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold">
                <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                <span>Hoja de Cálculo Oficial (Google Sheets & Apps Script)</span>
              </div>

              <p className="text-emerald-800 text-[11px] leading-relaxed">
                Cada examen finalizado por un alumno se transmite automáticamente a la Hoja de Cálculo
                institucional para la captura docente de calificaciones y auditoría del Plan NEM 2025.
              </p>

              <form onSubmit={handleGuardarUrl} className="space-y-2 pt-1">
                <label className="block text-[11px] font-bold text-stone-700">
                  URL del Web App de Google Apps Script:
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={appsScriptUrlInput}
                    onChange={(e) => setAppsScriptUrlInput(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white font-mono"
                    required
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg flex items-center gap-1 transition-colors"
                    title="Guardar URL personalizada"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Guardar</span>
                  </button>
                </div>
              </form>

              {guardadoUrlOk && (
                <div className="p-2 bg-emerald-100 text-emerald-900 rounded-lg text-[11px] font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-700" /> URL configurada correctamente.
                </div>
              )}

              {/* Acciones de prueba y reset */}
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleProbarConexion}
                  disabled={testConexionStatus === 'probando'}
                  className="px-3 py-1.5 bg-white border border-stone-300 hover:bg-stone-100 text-stone-800 font-bold rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${testConexionStatus === 'probando' ? 'animate-spin text-emerald-700' : ''}`} />
                  <span>{testConexionStatus === 'probando' ? 'Probando...' : 'Probar Conexión'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleRestablecerUrl}
                  className="px-3 py-1.5 bg-white border border-stone-300 hover:bg-stone-100 text-stone-600 font-medium rounded-lg transition-colors"
                >
                  Restablecer URL por Defecto
                </button>

                <button
                  type="button"
                  onClick={handleSincronizarTodo}
                  disabled={sincronizandoTodo}
                  className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <FileSpreadsheet className="w-3.5 h-3.5" />
                  <span>{sincronizandoTodo ? 'Sincronizando...' : 'Reenviar todo a Sheets'}</span>
                </button>
              </div>

              {testConexionStatus !== 'idle' && (
                <div
                  className={`p-2.5 rounded-lg text-[11px] font-semibold flex items-center gap-1.5 ${
                    testConexionStatus === 'ok'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      : testConexionStatus === 'error'
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-blue-50 text-blue-900 border border-blue-200'
                  }`}
                >
                  {testConexionStatus === 'ok' && <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />}
                  {testConexionStatus === 'error' && <XCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />}
                  <span>{testConexionMsg}</span>
                </div>
              )}

              {syncTodoMsg && (
                <div className="p-2.5 rounded-lg text-[11px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {syncTodoMsg}
                </div>
              )}

              <div className="pt-2 border-t border-emerald-200/60 text-[10px] text-emerald-800 space-y-1">
                <span className="font-bold block">Columnas generadas en cada envío:</span>
                <p>
                  <code>Fecha</code>, <code>Alumno</code>, <code>Semestre</code>, <code>Submódulo</code>, <code>Aciertos</code>, <code>Total (60)</code>, <code>Porcentaje</code>, <code>Calificación (Base 10)</code>, <code>Estado (Aprobado/No aprobado)</code>, <code>Duración</code> y <code>Desglose por los 5 tipos de reactivos</code>.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <span className="font-bold text-stone-700 block">Contraseña Docente</span>
              <p className="text-stone-500">
                La contraseña actual es <code className="bg-white px-2 py-0.5 rounded border font-mono">cbt2025prof</code>.
              </p>
            </div>

            <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
              <span className="font-bold text-stone-700 block">Criterio de Aprobación</span>
              <p className="text-stone-500">
                Mínimo aprobatorio fijado en <strong>36 aciertos</strong> de 60 reactivos (60%).
              </p>
            </div>

            <div className="p-3.5 bg-red-50/60 rounded-lg border border-red-200 space-y-2">
              <span className="font-bold text-red-800 block">Restablecer Intentos del Equipo</span>
              <p className="text-red-700">
                Si un alumno necesita presentar nuevamente el examen en este equipo, puedes borrar
                los intentos locales registrados en el navegador.
              </p>
              <button
                type="button"
                onClick={borrarRegistrosLocales}
                className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" /> Borrar intentos en este equipo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

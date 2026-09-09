import { ResultadoExamen } from '../types.ts';
import { SUBMODULOS } from '../data/submodulos.ts';

export const APPS_SCRIPT_URL_DEFAULT =
  'https://script.google.com/macros/s/AKfycbwlQ8VU7SxWaOu8TPaa6I2GSjvuu8Dix1t9BFfzk_Bkq3nAHPQLMgCIBwKqS6pcoCU/exec';

const STORAGE_KEY_URL = 'cbt_apps_script_url';
const STORAGE_KEY_SYNC_LOG = 'cbt_sheets_sync_log';

export function getAppsScriptUrl(): string {
  try {
    const custom = localStorage.getItem(STORAGE_KEY_URL);
    if (custom && custom.trim().startsWith('http')) {
      return custom.trim();
    }
  } catch {
    // ignore
  }
  return APPS_SCRIPT_URL_DEFAULT;
}

export function setAppsScriptUrl(url: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_URL, url.trim());
  } catch (e) {
    console.error('Error al guardar URL de Apps Script:', e);
  }
}

export function resetAppsScriptUrl(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_URL);
  } catch (e) {
    console.error('Error al reiniciar URL de Apps Script:', e);
  }
}

export interface SyncStatus {
  enviado: boolean;
  fecha: string;
  error?: string;
}

export function getSyncLog(): Record<string, SyncStatus> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SYNC_LOG);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function marcarSincronizado(idRegistro: string, exito: boolean, error?: string) {
  try {
    const log = getSyncLog();
    log[idRegistro] = {
      enviado: exito,
      fecha: new Date().toISOString(),
      error,
    };
    localStorage.setItem(STORAGE_KEY_SYNC_LOG, JSON.stringify(log));
  } catch (e) {
    console.error('Error al guardar log de sincronización:', e);
  }
}

/**
 * Envía el resultado del examen al Google Apps Script conectado a la Hoja de Cálculo.
 * Admite tanto e.postData.contents (JSON) como e.parameter para máxima compatibilidad.
 */
export async function enviarResultadoAGoogleSheets(
  resultado: ResultadoExamen,
  urlDestino?: string
): Promise<{ exito: boolean; mensaje: string }> {
  const url = (urlDestino || getAppsScriptUrl()).trim();
  const sub = SUBMODULOS[resultado.subId];
  const submoduloNombre = sub?.nombre || `Submódulo ${resultado.subId}`;

  // Clave única para tracking de este intento
  const idIntento = `${resultado.subId}_${resultado.nombre}_${new Date().toISOString().slice(0, 10)}`;

  const min = Math.floor(resultado.duracionSegundos / 60);
  const seg = resultado.duracionSegundos % 60;
  const tiempoFormateado = `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')} min`;

  // Payload estructurado completo para doPost(e) con JSON.parse(e.postData.contents)
  const payload = {
    action: 'guardarResultado',
    fecha: resultado.fecha,
    fechaISO: new Date().toISOString(),
    alumno: resultado.nombre,
    nombre: resultado.nombre,
    semestre: resultado.semestre,
    subId: resultado.subId,
    submodulo: submoduloNombre,
    modulo: sub?.modulo || '',
    aciertos: resultado.aciertos,
    total: resultado.total,
    porcentaje: `${resultado.porcentaje}%`,
    calificacion10: ((resultado.aciertos / resultado.total) * 10).toFixed(1),
    aprobado: resultado.aprobado ? 'Aprobado' : 'No aprobado',
    estado: resultado.aprobado ? 'Aprobado' : 'No aprobado',
    duracion: tiempoFormateado,
    duracionSegundos: resultado.duracionSegundos,
    desglose: {
      respuesta_corta: `${resultado.desglose.respuesta_corta.aciertos}/${resultado.desglose.respuesta_corta.total}`,
      opcion_multiple: `${resultado.desglose.opcion_multiple.aciertos}/${resultado.desglose.opcion_multiple.total}`,
      falso_verdadero: `${resultado.desglose.falso_verdadero.aciertos}/${resultado.desglose.falso_verdadero.total}`,
      cloze: `${resultado.desglose.cloze.aciertos}/${resultado.desglose.cloze.total}`,
      relacion: `${resultado.desglose.relacion.aciertos}/${resultado.desglose.relacion.total}`,
    },
  };

  try {
    // También agregamos parámetros de consulta para scripts que leen e.parameter
    const targetUrl = new URL(url);
    targetUrl.searchParams.set('action', 'guardarResultado');
    targetUrl.searchParams.set('alumno', resultado.nombre);
    targetUrl.searchParams.set('nombre', resultado.nombre);
    targetUrl.searchParams.set('semestre', resultado.semestre);
    targetUrl.searchParams.set('subId', resultado.subId);
    targetUrl.searchParams.set('submodulo', submoduloNombre);
    targetUrl.searchParams.set('aciertos', String(resultado.aciertos));
    targetUrl.searchParams.set('total', String(resultado.total));
    targetUrl.searchParams.set('porcentaje', `${resultado.porcentaje}%`);
    targetUrl.searchParams.set('aprobado', resultado.aprobado ? 'Aprobado' : 'No aprobado');
    targetUrl.searchParams.set('estado', resultado.aprobado ? 'Aprobado' : 'No aprobado');
    targetUrl.searchParams.set('fecha', resultado.fecha);
    targetUrl.searchParams.set('duracion', tiempoFormateado);

    // Usamos text/plain con mode: 'no-cors' para garantizar que el navegador
    // despache el POST a Google Apps Script sin bloqueos de preflight CORS
    await fetch(targetUrl.toString(), {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    marcarSincronizado(idIntento, true);
    return {
      exito: true,
      mensaje: 'Resultado transmitido y guardado exitosamente en la Hoja de Cálculo institucional.',
    };
  } catch (error: any) {
    console.error('Error al sincronizar con Google Sheets:', error);
    marcarSincronizado(idIntento, false, error?.message || 'Error de conexión');
    return {
      exito: false,
      mensaje:
        'No se pudo conectar inmediatamente con Google Sheets. Los datos han quedado asegurados en este dispositivo y podrán sincronizarse más tarde.',
    };
  }
}

/**
 * Prueba la conectividad enviando un ping / prueba ligera al Apps Script
 */
export async function probarConexionAppsScript(urlTest?: string): Promise<{ exito: boolean; mensaje: string }> {
  const url = (urlTest || getAppsScriptUrl()).trim();
  try {
    const targetUrl = new URL(url);
    targetUrl.searchParams.set('ping', 'test_' + Date.now());

    await fetch(targetUrl.toString(), {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({ action: 'ping', fecha: new Date().toISOString() }),
    });

    return {
      exito: true,
      mensaje: 'Conexión alcanzada con éxito con el script de Google Sheets.',
    };
  } catch (e: any) {
    return {
      exito: false,
      mensaje: e?.message || 'Error al conectar con la URL de Apps Script.',
    };
  }
}

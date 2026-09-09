import {
  ItemSecuencia,
  RespuestaUsuario,
  ResultadoExamen,
  CalificacionItem,
  TipoPregunta,
  RespuestaCloze,
  RespuestaRelacion,
} from '../types.ts';
import { SUBMODULOS } from '../data/submodulos.ts';

export const TIEMPO_TOTAL_SEGUNDOS = 90 * 60; // 90 minutos

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function construirSecuenciaExamen(subId: string): ItemSecuencia[] {
  const sub = SUBMODULOS[subId];
  if (!sub) return [];

  const p = sub.preguntas;

  // Exact target: 10 RC, 20 OM, 10 FV, 10 Cloze, 10 Relación = 60 total
  const rc = shuffle([...Array(p.respuesta_corta.length).keys()])
    .slice(0, 10)
    .map((idx) => ({ tipo: 'respuesta_corta' as TipoPregunta, idx }));

  const om = shuffle([...Array(p.opcion_multiple.length).keys()])
    .slice(0, 20)
    .map((idx) => ({ tipo: 'opcion_multiple' as TipoPregunta, idx }));

  const fv = shuffle([...Array(p.falso_verdadero.length).keys()])
    .slice(0, 10)
    .map((idx) => ({ tipo: 'falso_verdadero' as TipoPregunta, idx }));

  const cloze = shuffle([...Array(p.cloze.length).keys()])
    .slice(0, 10)
    .map((idx) => ({ tipo: 'cloze' as TipoPregunta, idx }));

  const relacion = shuffle([...Array(p.relacion.length).keys()])
    .slice(0, 10)
    .map((idx) => ({ tipo: 'relacion' as TipoPregunta, idx }));

  return shuffle([...rc, ...om, ...fv, ...cloze, ...relacion]);
}

export function tieneRespuesta(tipo: TipoPregunta, resp: RespuestaUsuario | undefined): boolean {
  if (resp === undefined || resp === null || resp === '') return false;
  if (tipo === 'cloze') {
    const r = resp as RespuestaCloze;
    return Boolean(r && r.slots && Object.keys(r.slots).length > 0);
  }
  if (tipo === 'relacion') {
    const r = resp as RespuestaRelacion;
    return Boolean(r && r.pares && Object.keys(r.pares).length > 0);
  }
  return true;
}

export function calificarPregunta(
  subId: string,
  tipo: TipoPregunta,
  idx: number,
  resp: RespuestaUsuario | undefined
): { ok: boolean; sinResp?: boolean } {
  const sub = SUBMODULOS[subId];
  if (!sub) return { ok: false, sinResp: true };

  const preg = sub.preguntas[tipo]?.[idx] as any;
  if (!preg) return { ok: false, sinResp: true };

  if (resp === undefined || resp === null || resp === '') {
    return { ok: false, sinResp: true };
  }

  if (tipo === 'opcion_multiple') {
    return { ok: resp === preg.r };
  }

  if (tipo === 'falso_verdadero') {
    return { ok: resp === preg.r };
  }

  if (tipo === 'respuesta_corta') {
    const rStr = String(resp).toLowerCase().trim();
    if (!rStr) return { ok: false, sinResp: true };
    const ok = preg.keywords.some((kw: string) => rStr.includes(kw.toLowerCase()));
    return { ok };
  }

  if (tipo === 'cloze') {
    const rCloze = resp as RespuestaCloze;
    if (!rCloze || !rCloze.slots) return { ok: false, sinResp: true };
    const rCorrectos = preg.r as number[];
    let aciertos = 0;
    rCorrectos.forEach((bancoIdx, slotPos) => {
      if (rCloze.slots[slotPos] === bancoIdx) aciertos++;
    });
    return { ok: aciertos === rCorrectos.length && rCorrectos.length > 0 };
  }

  if (tipo === 'relacion') {
    const rRel = resp as RespuestaRelacion;
    if (!rRel || !rRel.pares || !rRel._ordenB) return { ok: false, sinResp: true };
    const ordenB = rRel._ordenB;
    for (let aIdx = 0; aIdx < preg.columnaA.length; aIdx++) {
      const chipPos = rRel.pares[aIdx];
      if (chipPos === undefined) return { ok: false };
      const realIdx = ordenB[chipPos];
      if (realIdx !== preg.r[aIdx]) return { ok: false };
    }
    return { ok: true };
  }

  return { ok: false };
}

export function calificarExamen(
  subId: string,
  secuencia: ItemSecuencia[],
  respuestas: Record<number, RespuestaUsuario>,
  nombre: string,
  semestre: string,
  segsRestantes: number
): ResultadoExamen {
  const sub = SUBMODULOS[subId];
  let aciertos = 0;

  const desglose: Record<TipoPregunta, { aciertos: number; total: number }> = {
    respuesta_corta: { aciertos: 0, total: 0 },
    opcion_multiple: { aciertos: 0, total: 0 },
    falso_verdadero: { aciertos: 0, total: 0 },
    cloze: { aciertos: 0, total: 0 },
    relacion: { aciertos: 0, total: 0 },
  };

  const detalles: CalificacionItem[] = [];

  secuencia.forEach((item, pos) => {
    desglose[item.tipo].total++;
    const resp = respuestas[pos];
    const cal = calificarPregunta(subId, item.tipo, item.idx, resp);
    const preg = sub.preguntas[item.tipo][item.idx];

    if (cal.ok) {
      aciertos++;
      desglose[item.tipo].aciertos++;
    }

    detalles.push({
      pos: pos + 1,
      tipo: item.tipo,
      idx: item.idx,
      ok: cal.ok,
      sinResp: cal.sinResp,
      preg,
      resp,
    });
  });

  const total = secuencia.length;
  const porcentaje = total > 0 ? Math.round((aciertos / total) * 100) : 0;
  const aprobado = aciertos >= 36; // Mínimo aprobatorio oficial (60% de 60 reactivos)

  const duracionSegundos = TIEMPO_TOTAL_SEGUNDOS - segsRestantes;
  const fecha = new Date().toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return {
    subId,
    nombre,
    semestre,
    aciertos,
    total,
    porcentaje,
    aprobado,
    desglose,
    detalles,
    fecha,
    duracionSegundos,
  };
}

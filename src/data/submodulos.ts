import { SubmodulosDict } from '../types.ts';
import { submoduloI1, submoduloI2 } from './modulo1.ts';
import { submoduloII1, submoduloII2 } from './modulo2.ts';
import { submoduloIII1, submoduloIII2, submoduloIII3 } from './modulo3.ts';
import { submoduloIV1, submoduloIV2, submoduloIV3 } from './modulo4.ts';

export const SUBMODULOS: SubmodulosDict = {
  I1: submoduloI1,
  I2: submoduloI2,
  II1: submoduloII1,
  II2: submoduloII2,
  III1: submoduloIII1,
  III2: submoduloIII2,
  III3: submoduloIII3,
  IV1: submoduloIV1,
  IV2: submoduloIV2,
  IV3: submoduloIV3,
};

// Validate that each submodule has exactly 10 RC, 20 OM, 10 FV, 10 Cloze, and 10 Relacion
export function getSubmoduloStats(subId: string) {
  const s = SUBMODULOS[subId];
  if (!s) return null;
  return {
    rc: s.preguntas.respuesta_corta.length,
    om: s.preguntas.opcion_multiple.length,
    fv: s.preguntas.falso_verdadero.length,
    cloze: s.preguntas.cloze.length,
    relacion: s.preguntas.relacion.length,
    total:
      s.preguntas.respuesta_corta.length +
      s.preguntas.opcion_multiple.length +
      s.preguntas.falso_verdadero.length +
      s.preguntas.cloze.length +
      s.preguntas.relacion.length,
  };
}

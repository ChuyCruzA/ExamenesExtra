export type TipoPregunta =
  | 'respuesta_corta'
  | 'opcion_multiple'
  | 'falso_verdadero'
  | 'cloze'
  | 'relacion';

export interface PreguntaRespuestaCorta {
  p: string;
  keywords: string[];
  puntos: number;
}

export interface PreguntaOpcionMultiple {
  p: string;
  o: string[];
  r: number;
}

export interface PreguntaFalsoVerdadero {
  p: string;
  r: boolean;
}

export interface PreguntaCloze {
  texto: string;
  banco: string[];
  r: number[];
}

export interface PreguntaRelacion {
  instruccion: string;
  columnaA: string[];
  columnaB: string[];
  r: number[];
}

export interface PreguntasSubmodulo {
  respuesta_corta: PreguntaRespuestaCorta[];
  opcion_multiple: PreguntaOpcionMultiple[];
  falso_verdadero: PreguntaFalsoVerdadero[];
  cloze: PreguntaCloze[];
  relacion: PreguntaRelacion[];
}

export interface Submodulo {
  nombre: string;
  modulo: string;
  semestre: string;
  preguntas: PreguntasSubmodulo;
}

export type SubmodulosDict = Record<string, Submodulo>;

export interface ItemSecuencia {
  tipo: TipoPregunta;
  idx: number;
}

export interface RespuestaCloze {
  slots: Record<number, number>;
}

export interface RespuestaRelacion {
  pares: Record<number, number>; // aIdx -> chipPos (position in _ordenB)
  _ordenB?: number[]; // mapping from chipPos to original columnaB index
}

export type RespuestaUsuario =
  | string // for respuesta_corta
  | number // for opcion_multiple
  | boolean // for falso_verdadero
  | RespuestaCloze
  | RespuestaRelacion;

export interface CalificacionItem {
  pos: number;
  tipo: TipoPregunta;
  idx: number;
  ok: boolean;
  sinResp?: boolean;
  preg: any;
  resp: any;
}

export interface ResultadoExamen {
  subId: string;
  nombre: string;
  semestre: string;
  aciertos: number;
  total: number;
  porcentaje: number;
  aprobado: boolean;
  desglose: Record<TipoPregunta, { aciertos: number; total: number }>;
  detalles: CalificacionItem[];
  fecha: string;
  duracionSegundos: number;
}

export interface ExamenLocalGuardado {
  nombre: string;
  semestre: string;
  submodulo?: string;
  subId?: string;
  aciertos: number;
  fecha: string;
  desglose?: Record<TipoPregunta, number>;
  preguntasFallidas?: string;
}

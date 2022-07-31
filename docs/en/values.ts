import { Geometry } from "@vikid-core/values/graphics";
import { PrimitiveKind } from "@vikid-mod/language";

export type ValueDescription = typeof values;

export const values = {
  never: "nooit",

  undefined: "undefined",

  factory: "new",

  shape: "shape",

  color: "color",

  boolean: {
    true: "on",
    false: "off",
  },

  number: {
    natural: "natural number",
    integer: "integer number",
    rational: "rational number",
    real: "real number",
  },

  geometry: {
    [Geometry.Empty]: "empty",
    [Geometry.Universe]: "plane",
    [Geometry.Circle]: "circle",
    [Geometry.Square]: "square",
    [Geometry.Half]: "half-plane",
  },

  figure: "figure",
  drawing: "drawing",

  list: "list",

  sound: "sound source",
  audio: "audio node",

  any: "value",

  receiver: "receiver",

  tuple: "tuple",

  bag: "set",

  map: "map",

  sat: "satellite",

  dynamic: "dynamic"
}

export const primitives: Record<PrimitiveKind, string> = {
  [PrimitiveKind.Graphics]: "graphic",
  [PrimitiveKind.Color]: "color",
  [PrimitiveKind.Number]: "number",
  [PrimitiveKind.String]: "text",
  [PrimitiveKind.Vector]: "vector",
  [PrimitiveKind.Method]: "function",
  [PrimitiveKind.Matrix]: "transformation",
  [PrimitiveKind.Boolean]: "boolean",
  [PrimitiveKind.Figure]: "figure",
  [PrimitiveKind.Drawing]: "drawing",
  [PrimitiveKind.Factory]: "factory",
  [PrimitiveKind.SoundStream]: "streamed sound source",
  [PrimitiveKind.SoundBuffer]: "buffered sound source",
  [PrimitiveKind.Audio]: "audio node",
}

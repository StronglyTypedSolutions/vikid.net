import { Geometry } from "@vikid-core/values/graphics";
import { PrimitiveKind } from "@vikid-mod/language";
import { ValueDescription } from "../types";

export const values: ValueDescription = {
  never: "never",

  undefined: "ongedefinieerd",

  factory: "nieuwe",

  shape: "vorm",

  color: "kleur",

  boolean: {
    true: "aan",
    false: "uit",
  },

  geometry: {
    [Geometry.Empty]: "leeg vlak",
    [Geometry.Universe]: "vol vlak",
    [Geometry.Circle]: "cirkel",
    [Geometry.Square]: "vierkant",
    [Geometry.Half]: "halfvlak",
  },

  number: {
    natural: "natuurlijk getal",
    integer: "geheel getal",
    rational: "rationeel getal",
    real: "reëel getal",
  },

  figure: "figuur",
  drawing: "lijntekening",

  list: "lijst",

  sound: "geluidsbron",

  audio: "audio node",

  any: "waarde",

  receiver: "ontvanger",

  tuple: "tupel",

  bag: "verzameling",

  map: "map",

  sat: "satelliet",

  dynamic: "dynamisch"
}

export const primitives: Record<PrimitiveKind, string> = {
  [PrimitiveKind.Graphics]: "vorm",
  [PrimitiveKind.Color]: "kleur",
  [PrimitiveKind.Number]: "getal",
  [PrimitiveKind.String]: "tekst",
  [PrimitiveKind.Vector]: "vector",
  [PrimitiveKind.Method]: "functie",
  [PrimitiveKind.Matrix]: "transformatie",
  [PrimitiveKind.Boolean]: "schakelaar",
  [PrimitiveKind.Figure]: "figuur",
  [PrimitiveKind.Drawing]: "lijntekening",
  [PrimitiveKind.Factory]: "fabriek",
  [PrimitiveKind.SoundStream]: "gestreamde geluidsbron",
  [PrimitiveKind.SoundBuffer]: "gebufferde geluidsbron",
  [PrimitiveKind.Audio]: "audio node",
}

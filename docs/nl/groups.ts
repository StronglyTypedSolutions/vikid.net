import { GroupName } from "language";

export const groups: Record<GroupName, string> = {
  [GroupName.Graphics]: "vorm",
  [GroupName.Colors]: "kleur",
  [GroupName.Numbers]: "getal",
  [GroupName.Booleans]: "boolean",
  [GroupName.Strings]: "tekst",
  [GroupName.Vectors]: "vector",
  [GroupName.Matrices]: "transform",
  [GroupName.Methods]: "functie",
  [GroupName.Factories]: "maak",
  [GroupName.Lists]: "lijst",
  [GroupName.Audio]: "audio",
  [GroupName.Physics]: "fysica",

  /* Method groups */
  [GroupName.Others]: "overige",
  [GroupName.Painting]: "verven",
  [GroupName.Transformation]: "transformeren",
  [GroupName.Construction]: "construeren",

  [GroupName.Arithmetic]: "rekenen",
  [GroupName.Numeric]: "numeriek",
  [GroupName.Logic]: "logica",
  [GroupName.Trigonometry]: "goniometrie",
  [GroupName.Calculus]: "analyse",

  [GroupName.Adjust]: "aanpassen",
  [GroupName.Updates]: "updates",

  [GroupName.Puzzle]: "puzzel",
}

import { GroupName } from "@vikid-core/language";

export const groups: Record<GroupName, string> = {
  [GroupName.Graphics]: "shape",
  [GroupName.Colors]: "color",
  [GroupName.Numbers]: "number",
  [GroupName.Booleans]: "boolean",
  [GroupName.Strings]: "text",
  [GroupName.Vectors]: "vector",
  [GroupName.Matrices]: "transform",
  [GroupName.Methods]: "function",
  [GroupName.Factories]: "make",
  [GroupName.Lists]: "list",
  [GroupName.Audio]: "audio",

  /* Method groups */
  [GroupName.Others]: "others",
  [GroupName.Painting]: "painting",
  [GroupName.Transformation]: "transformation",
  [GroupName.Construction]: "construction",

  [GroupName.Arithmetic]: "arithmetic",
  [GroupName.Numeric]: "numeric",
  [GroupName.Logic]: "logic",
  [GroupName.Trigonometry]: "trigonometry",
  [GroupName.Calculus]: "calculus",

  [GroupName.Adjust]: "adjust",
  [GroupName.Updates]: "updates",

  [GroupName.Puzzle]: "puzzle",
}

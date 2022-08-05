import type { en } from "./en";
import type { values } from "./en/values";

// TODO: Support regions, eg en-US, nl-BE...
export type Language = "nl" | "en";

export type ValueDescription = typeof values;
export type Translations = typeof en;

export type TranslationKey = keyof Translations;

export interface Features {
  readonly upload: string;
  readonly rewind: string;
  readonly templatize: string;
  readonly generic: string;
  readonly video: string;
}

export type FeatureKey = keyof Features;
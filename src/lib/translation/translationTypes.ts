/**
 * Types for the translation system
 */

export interface TranslationItem {
  source: string;
  comment?: string;
  translation: string;
}

export interface TranslationContext {
  name: string;
  messages: TranslationItem[];
}

export interface Translation {
  language: string;
  contexts: TranslationContext[];
}

export interface TranslationMap {
  [key: string]: string;
}

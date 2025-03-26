import type { TranslationMap } from "./translationTypes";

/**
 * German translations based on the XML file
 */
export const germanTranslations: TranslationMap = {
  greeting:
    "Hallo! Ich lade noch schnell meine Applikation. Dann kann es auch schon losgehn.",
  shutUp: "Ok, ich bin ja schon still!!",
  volumeUp: "Lauter",
  volumeDown: "Leiser",
};

/**
 * Translation function
 *
 * @param key The translation key
 * @param language The target language (defaults to German)
 * @returns The translated string or the key if not found
 */
export function translate(key: string, language: string = "de_DE"): string {
  // For now we only have German translations
  if (language === "de_DE") {
    return germanTranslations[key] || key;
  }

  return key;
}

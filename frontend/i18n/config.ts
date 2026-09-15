export const APP_LOCALES = [
  "en-US",
  "ar-EG",
  "zh-CN",
  "fr-FR",
  "de-DE",
  "es-ES",
  "ja-JP",
  "ko-KR",
  "tr-TR",
  "ru-RU",
] as const;

export type AppLocale = (typeof APP_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = "en-US";

export const LOCALE_COOKIE_NAME = "thoth_chat_locale";

export const APP_LOCALE_LABELS: Record<AppLocale, string> = {
  "en-US": "English",
  "ar-EG": "العربية",
  "zh-CN": "简体中文",
  "fr-FR": "Français",
  "de-DE": "Deutsch",
  "es-ES": "Español",
  "ja-JP": "日本語",
  "ko-KR": "한국어",
  "tr-TR": "Türkçe",
  "ru-RU": "Русский",
};

export function normalizeAppLocale(
  value: string | null | undefined,
): AppLocale {
  const normalized = String(value ?? "").trim();
  const canonical = normalized.replace("_", "-");
  const lower = canonical.toLowerCase();

  if (lower === "ar" || lower.startsWith("ar-")) {
    return "ar-EG";
  }

  if (lower === "zh" || lower.startsWith("zh-")) {
    return "zh-CN";
  }

  if (lower === "fr" || lower.startsWith("fr-")) {
    return "fr-FR";
  }

  if (lower === "de" || lower.startsWith("de-")) {
    return "de-DE";
  }

  if (lower === "es" || lower.startsWith("es-")) {
    return "es-ES";
  }

  if (lower === "ja" || lower.startsWith("ja-")) {
    return "ja-JP";
  }

  if (lower === "ko" || lower.startsWith("ko-")) {
    return "ko-KR";
  }

  if (lower === "tr" || lower.startsWith("tr-")) {
    return "tr-TR";
  }

  if (lower === "ru" || lower.startsWith("ru-")) {
    return "ru-RU";
  }

  if (lower === "en" || lower.startsWith("en-")) {
    return "en-US";
  }

  return APP_LOCALES.includes(canonical as AppLocale)
    ? (canonical as AppLocale)
    : DEFAULT_LOCALE;
}

export function resolveBrowserLocale(
  languages: readonly string[] | undefined,
): AppLocale {
  for (const language of languages ?? []) {
    const normalized = String(language ?? "")
      .trim()
      .toLowerCase()
      .replace("_", "-");

    if (normalized === "ar" || normalized.startsWith("ar-")) {
      return "ar-EG";
    }

    if (normalized === "zh" || normalized.startsWith("zh-")) {
      return "zh-CN";
    }

    if (normalized === "fr" || normalized.startsWith("fr-")) {
      return "fr-FR";
    }

    if (normalized === "de" || normalized.startsWith("de-")) {
      return "de-DE";
    }

    if (normalized === "es" || normalized.startsWith("es-")) {
      return "es-ES";
    }

    if (normalized === "ja" || normalized.startsWith("ja-")) {
      return "ja-JP";
    }

    if (normalized === "ko" || normalized.startsWith("ko-")) {
      return "ko-KR";
    }

    if (normalized === "tr" || normalized.startsWith("tr-")) {
      return "tr-TR";
    }

    if (normalized === "ru" || normalized.startsWith("ru-")) {
      return "ru-RU";
    }

    if (normalized === "en" || normalized.startsWith("en-")) {
      return "en-US";
    }
  }

  return DEFAULT_LOCALE;
}

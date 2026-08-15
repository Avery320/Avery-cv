import { withBase } from "./sitePath";

export type Locale = "zh-TW" | "en";

export const getLocale = (locale?: string): Locale => locale === "en" ? "en" : "zh-TW";

export const localizedPath = (path = "", locale: Locale) => {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  return withBase(locale === "en" ? `en/${normalizedPath}` : normalizedPath);
};

export const getRoutePath = (pathname: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  const path = pathname.startsWith(baseUrl) ? pathname.slice(baseUrl.length) : pathname.replace(/^\/+/, "");
  return path.replace(/^\/+/, "").replace(/^en(?:\/|$)/, "").replace(/\/$/, "");
};

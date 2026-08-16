import { getCollection } from "astro:content";
import type { collections } from "../content/config";
import type { Locale } from "./i18n";

export type PortfolioCollection = keyof typeof collections;

export const getLocalizedEntries = async (collection: PortfolioCollection, locale: Locale) => {
  const entries = await getCollection(collection);
  return entries.filter((entry) => entry.id.startsWith(`${locale}/`));
};

export const getContentSlug = (slug: string) => slug.slice(slug.lastIndexOf("/") + 1);

export const getLocalizedContentPaths = async (collection: PortfolioCollection, locale: Locale) => {
  const entries = await getLocalizedEntries(collection, locale);

  return entries.map((entry) => ({
    params: { slug: getContentSlug(entry.slug) },
    props: { entry },
  }));
};

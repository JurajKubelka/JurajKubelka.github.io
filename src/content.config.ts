import { defineCollection } from 'astro:content';
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const homeCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home" }),
  schema: z.object({
    lang: z.enum(["en", "cs", "es"]),
    locale: z.string(),
    pageTitle: z.string(),
    pageDescription: z.string(),
    nav: z.object({
      about: z.string(),
      work: z.string(),
      health: z.string(),
      pets: z.string(),
      medicine: z.string(),
      contact: z.string()
    }),
    hero: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      ctaLabel: z.string(),
      ctaHref: z.string()
    }),
    about: z.object({
      title: z.string(),
      body: z.string()
    }),
    work: z.object({
      title: z.string(),
      body: z.string()
    }),
    health: z.object({
      title: z.string(),
      body: z.string()
    }),
    pets: z.object({
      title: z.string(),
      body: z.string()
    }),
    medicine: z.object({
      title: z.string(),
      body: z.string()
    }),
    contact: z.object({
      title: z.string(),
      intro: z.string(),
      emailLabel: z.string(),
      email: z.string(),
      links: z.array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
    }),
    footer: z.string()
  })
});

export const collections = {
  home: homeCollection
};

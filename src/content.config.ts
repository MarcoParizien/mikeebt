import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { sectionSlugs } from "./lib/site";

const articles = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lede: z.string(),
      author: z.string(),
      authorPhoto: image().optional(),
      section: z.enum(sectionSlugs),
      date: z.coerce.date(),
      image: image(),
      caption: z.string(),
      imagePosition: z.string().default("center"),
      featured: z.boolean().default(false),
    }),
});

export const collections = { articles };

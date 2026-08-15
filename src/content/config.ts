import { defineCollection, z } from "astro:content";

const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
  cover: z.string().optional(),
});

const robotics = defineCollection({
  type: "content",
  schema: portfolioSchema,
});

const projects = defineCollection({
  type: "content",
  schema: portfolioSchema,
});

export const collections = { projects, robotics };

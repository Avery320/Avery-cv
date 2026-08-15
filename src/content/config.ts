import { defineCollection, z } from "astro:content";

const robotics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    cover: z.string().optional(),
  }),
});

export const collections = { robotics };

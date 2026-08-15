import { defineCollection, z } from "astro:content";

const robotics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = { robotics };

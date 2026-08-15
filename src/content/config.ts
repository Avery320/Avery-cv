import { defineCollection, z } from "astro:content";

const portfolioFields = {
  title: z.string(),
  description: z.string(),
  order: z.number(),
};

const robotics = defineCollection({
  type: "content",
  schema: z.object({
    ...portfolioFields,
    cover: z.string().optional(),
  }),
});

const fabrication = defineCollection({
  type: "content",
  schema: z.object({
    ...portfolioFields,
    cover: z.string().optional(),
  }),
});

const paramtricDesign = defineCollection({
  type: "content",
  schema: z.object({
    ...portfolioFields,
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    ...portfolioFields,
    cover: image().optional(),
  }),
});

export const collections = { fabrication, paramtricDesign, projects, robotics };

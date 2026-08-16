import { defineCollection, z } from "astro:content";

const portfolioFields = {
  title: z.string(),
  description: z.string(),
  order: z.number(),
  hidden: z.boolean().optional(),
};

const defineStringCoverCollection = () => defineCollection({
  type: "content",
  schema: z.object({
    ...portfolioFields,
    cover: z.string().optional(),
  }),
});

const architecture = defineStringCoverCollection();
const fabrication = defineStringCoverCollection();
const paramtricDesign = defineStringCoverCollection();
const robotics = defineStringCoverCollection();

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    ...portfolioFields,
    cover: image().optional(),
  }),
});

export const collections = { architecture, fabrication, paramtricDesign, projects, robotics };

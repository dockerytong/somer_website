import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(['staff', 'postdoc', 'phd', 'master', 'alumni']).default('master'),
    email: z.string().email().optional(),
    photo: z.string().optional(),
    research: z.string().optional(),
    scholar: z.string().url().optional(),
    note: z.string().optional(),
    origin: z.string().optional(),
    destination: z.string().optional(),
    order: z.number().default(99),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    journal: z.string(),
    year: z.number(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    cover: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { news, people, publications, research };

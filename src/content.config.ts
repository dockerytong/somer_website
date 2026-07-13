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
    researchgate: z.string().url().optional(),
    note: z.string().optional(),
    origin: z.string().optional(),
    destination: z.string().optional(),
    hidden: z.boolean().default(false),
    alumniType: z.enum(['researcher', 'student']).optional(),
    assistedStudents: z.array(z.object({
      name: z.string(),
      role: z.string(),
      institution: z.string(),
    })).optional(),
    order: z.number().default(99),
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

export const collections = { news, people, research };

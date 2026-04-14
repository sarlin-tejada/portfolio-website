import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.url().optional(),
    github: z.url().optional(),
    tags: z.array(z.string()).default([]),
    types: z.array(z.enum(['commercial', 'open-source', 'social'])).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
    directLink: z.boolean().default(false).optional(),
  }),
});

const about = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/_*'],
    base: './site/content/about',
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { projects, about };

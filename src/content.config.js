import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Astro's built-in file() loader only logs bad JSON or entries without an id,
// so a broken data.json would quietly render an empty page. This one throws.
function projectsLoader(fileName) {
  return {
    name: 'projects-loader',
    load: async ({ config, store, parseData, watcher }) => {
      const filePath = fileURLToPath(new URL(fileName, config.root));

      async function sync() {
        const items = JSON.parse(await readFile(filePath, 'utf-8'));
        store.clear();
        for (const [i, item] of items.entries()) {
          const id = `${String(i).padStart(3, '0')}-${item.title ?? 'untitled'}`;
          store.set({ id, data: await parseData({ id, data: item }) });
        }
      }

      await sync();
      watcher?.add(filePath);
      watcher?.on('change', (changed) => changed === filePath && sync());
    },
  };
}

const projects = defineCollection({
  loader: projectsLoader('src/data.json'),
  // strictObject rejects unknown keys, so a typo like "linkcode" fails the build
  schema: z.strictObject({
    title: z.string(),
    description: z.string(),
    linkLive: z.union([z.url(), z.string().startsWith('/')]).optional(),
    linkCode: z.url().optional(),
    bullets: z.array(z.string()).default([]),
    image: z
      .string()
      .refine((f) => existsSync(`public/images/${f}`), {
        message: 'no such file in public/images',
      })
      .optional(),
  }),
});

export const collections = { projects };

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
          // filePath lets image() resolve paths relative to the data file
          const data = await parseData({ id, data: item, filePath });
          store.set({ id, data, filePath: fileName });
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
  schema: ({ image }) =>
    z.strictObject({
      title: z.string(),
      description: z.string(),
      linkLive: z.union([z.url(), z.string().startsWith('/')]).optional(),
      linkCode: z.url().optional(),
      bullets: z.array(z.string()).default([]),
      // data.json holds a bare filename; image() resolves it relative to data.json
      // so Astro can optimize it. Check it exists first: a missing import otherwise
      // fails later with an error that doesn't name the entry.
      image: z
        .string()
        .refine((f) => existsSync(`src/assets/projects/${f}`), {
          message: 'no such file in src/assets/projects',
        })
        .transform((f) => `./assets/projects/${f}`)
        .pipe(image())
        .optional(),
    }),
});

export const collections = { projects };

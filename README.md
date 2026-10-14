# greenwwwold

A little web portfolio. Built with Astro, React, and Tailwind, deployed on Netlify.

## Development

Requires Node 22.12 or newer.

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site to `./dist/`             |
| `npm run preview` | Preview the build locally               |

## Adding a project

Projects live in `src/data.json`. Each entry looks like:

```json
{
  "title": "the odin project",
  "linkLive": "https://www.theodinproject.com/",
  "linkCode": "https://github.com/qooqu/top",
  "description": "full stack JS curriculum - completed",
  "bullets": ["open source curriculum", "html, css, js, react, node, express, mongo"],
  "image": "top.png"
}
```

- `title` and `description` are required. Everything else is optional.
- `linkLive` is a full URL or a site path like `/bouncy`. `linkCode` must be a full URL.
- `image` is a filename in `src/assets/projects/`. It's converted to WebP at build time.
- `bullets` may contain HTML, e.g. links.

Cards render in the order they appear in the file.

The data is validated by the schema in `src/content.config.js`. A missing field, unknown key,
bad link, missing image, or JSON syntax error fails the build with a message naming the entry.
To add a new field, add it to the schema first.

## Structure

```text
src/
├── content.config.js   schema + loader for data.json
├── data.json           project list
├── assets/projects/    project screenshots
├── components/         React components (project cards, page bodies)
├── layouts/Layout.astro
├── pages/
│   ├── index.astro                    project list
│   ├── bouncy.astro                   embedded game
│   └── liberty-bridge-analysis.astro  write-up
└── styles/global.css   Tailwind theme (Nord palette, Raleway)
```

## Deployment

Hosted on Netlify. Build settings and the Node version are in `netlify.toml`.
Analytics via GoatCounter.

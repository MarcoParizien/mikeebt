# Le Journal de mikeebt

Faux journal (parodie du Journal de Montréal) pour l'anniversaire de Mike, le 14 octobre.

Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Run locally

```sh
npm install
npm run dev
```

## Add or edit an article

Each article is one Markdown file in `src/content/articles/`:

```md
---
title: "Le titre"
lede: "Le chapeau, une phrase."
author: "Philippe"
section: palmares        # see `sections` in src/lib/site.ts
date: 2026-10-14T07:12:00-04:00
image: ../../assets/photos/mike-bain.jpg
caption: "La légende de la photo."
featured: false           # true = main story on the front page
---

Le texte de l'article.
```

Photos go in `src/assets/photos/`. Astro resizes and compresses them at build time.

The breaking news ticker lives in `src/lib/site.ts`.

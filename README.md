# Yuki Ichihara Website

Static portfolio and research-note site for `index.en.html` and the `blog/` pages.

## Structure

- `index.en.html`: English landing page and publication overview
- `blog/`: research notes and article pages
- `figs/`: lightweight SVG thumbnails for papers
- `images/`: social preview and portrait-style artwork
- `site.css`: shared visual system for all pages
- `site.js`: small interactions such as menu toggle, reveal animation, and paper filtering

## Local preview

Run a simple static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/index.en.html](http://localhost:8000/index.en.html).

## Updating content

- Edit the publication cards in `index.en.html` to add new papers or links.
- Add new notes under `blog/` and link them from `blog/index.html`.
- Replace or extend the SVG files in `figs/` and `images/` if you want a different visual direction.
# SOMER Website Maintenance Notes

## Workflow

- Do not commit or push automatically. Only create a commit when the user explicitly says to commit, and only push when the user explicitly says to push.
- Keep changes scoped to the requested website content or layout. Avoid unrelated refactors during content updates.
- Run `npm run build` after meaningful content, schema, layout, or data changes.

## Content Rules

- Chinese and English pages should be content-equivalent. The English version should not be noticeably thinner or rougher than the Chinese version.
- For news titles about papers, use the unified style: `XX论文被/发表于XX`.
- When adding paper-related news, also check and update the publications page data.
- The publications page is maintained through `src/data/scholar-publications.json`.
- The publications page should mainly include papers where SOMER members are first authors or corresponding authors.
- Personal profile pages should not auto-pull full publication lists from the publications JSON. Representative publications should be written directly in the person Markdown file or the English bio data.
- For Chinese-language publication and profile pages, use Chinese author names and Chinese paper metadata where appropriate; do not mix in English transliterations unless the page itself is the English version.
- Do not add corresponding-author or communication-author marks on publication lists or profile pages.

## People Pages

- Master students do not show research directions.
- PhD students, postdocs, and staff may show research directions.
- Chinese titles follow the researcher-track wording used by RCEES/CAS. English public-facing titles may use the professor-track wording when appropriate.
- The current PhD students are Yang Shuang, Chen Suixiaochen, Feng Qi, and Wu Yuqi. Other student entries are master students unless the user says otherwise.
- Alumni or former-member entries should not add extra labels such as `已离组` or `(Alumni)` inside the person card; the section grouping already makes that status clear.
- Shiqi Zhang is listed publicly as a current postdoc (2026-10-16, Tong confirmed showing him).

## Site Assets

- The browser favicon should use the SOMER logo rather than the default Astro icon.
- Prefer existing site assets and visual style before adding new design patterns.
- Keep the global visual style clean and light. Prefer softer background colors and clear typography hierarchy, but avoid making the layout heavier or more decorative than necessary.
- Source material (uncompressed originals) lives in `sources/`, which is not deployed. `public/` should only contain files the pages actually reference. New figures: keep the original in `sources/`, ship a `cwebp -q 82 -resize 1200 0` webp in `public/images/`, plus a `-card.webp` thumbnail (`cwebp -q 72 -resize 620 0`) for card/list use. List and card views derive the thumbnail path from the cover path (`cover.replace(/\.webp$/, '-card.webp')`), so every cover shipped needs its `-card` file to exist.

## Infrastructure

- `astro.config.mjs` sets `site: 'https://somer.pages.dev'`; canonical URLs, `hreflang`, `og:url`, `og:image`, RSS and `sitemap-index.xml` all derive from it. Change the domain there, not per page.
- `BaseLayout.astro` emits canonical, zh/en `hreflang` alternates (derived from the pathname, so en counterparts must exist at the mirrored path), Open Graph/Twitter tags, the RSS autodiscovery link, and Organization JSON-LD. Pass `image` to override the share image for a page.
- Share image is `public/og-cover.png` (1200x630); regenerate it from the logo if the naming or affiliation text changes.
- `public/robots.txt` and `public/_headers` are static; `_headers` sets long cache lifetimes for `/images/*` and the icons.
- `en-site.ts` string keys use both single and double quotes; regex or grep checks over slugs must cover both, or they will report files as missing.

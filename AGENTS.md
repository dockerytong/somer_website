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

## People Pages

- Master students do not show research directions.
- PhD students, postdocs, and staff may show research directions.
- Chinese titles follow the researcher-track wording used by RCEES/CAS. English public-facing titles may use the professor-track wording when appropriate.
- The current PhD students are Yang Shuang, Chen Suixiaochen, Feng Qi, and Wu Yuqi. Other student entries are master students unless the user says otherwise.

## Site Assets

- The browser favicon should use the SOMER logo rather than the default Astro icon.
- Prefer existing site assets and visual style before adding new design patterns.

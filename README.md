# Juraj Kubelka Personal Website

A multilingual personal website built with Astro and prepared for deployment to GitHub Pages.

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Build the production site:

   ```bash
   npm run build
   ```

## Content editing

Update the localized homepage content in these files:

- `src/content/home/en.md`
- `src/content/home/cs.md`
- `src/content/home/es.md`

The shared site layout and styling live in:

- `src/components/HomePage.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

## GitHub Pages deployment

The project includes `.github/workflows/deploy.yml` using the official Astro GitHub Action.

Before the first deployment:

1. Push this project to GitHub.
2. In repository settings, configure GitHub Pages to use **GitHub Actions** as the source.
3. Set repository variables if needed:
   - `SITE_URL`: your final site URL such as `https://your-domain.example`
   - `SITE_BASE`: use `/` for a user site or `/repo-name/` for a project site
4. If you use a custom domain, copy `public/CNAME.example` to `public/CNAME` and replace it with your real domain.

## Still worth customizing

- Replace `hello@example.com` and social links in each language file.
- Adjust the text in the feenk and health sections to match your preferred voice.
- Replace `SITE_URL` with your actual GitHub Pages or custom domain before launch.

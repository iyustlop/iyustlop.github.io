# Portfolio de Ignacio Yuste López

Sitio personal de **Ignacio Yuste López**, QA Engineer & Full Stack Developer.
One-page en español con experiencia, proyectos, biografía y contacto.

**https://iyustlop.github.io**

## Stack

- [Astro 7](https://astro.build) con salida estática
- Tailwind CSS 3 vía PostCSS (sin `@astrojs/tailwind`)
- TypeScript en modo `strict`
- Imágenes optimizadas con `astro:assets` + `sharp`
- Tipografía `@fontsource-variable/onest` (self-hosted)
- SEO: canonical, Open Graph/Twitter, `@astrojs/sitemap` y `robots.txt`

## Comandos

| Comando                   | Acción                                          |
| :------------------------ | :---------------------------------------------- |
| `npm install`             | Instala dependencias                            |
| `npm run dev`             | Servidor de desarrollo en `localhost:4321`      |
| `npm run build`           | Genera el sitio estático en `./dist/`           |
| `npm run preview`         | Previsualiza el build local                     |
| `npm run astro -- check`  | Comprueba tipos y errores de Astro              |

Requiere Node `>=22.12.0`.

## Estructura

- `src/pages/index.astro` — página principal que compone las secciones
- `src/components/` — secciones y componentes (`Experience`, `Projects`, `AboutMe`, `Footer`…)
- `src/layouts/Layout.astro` — layout, metadatos y estilos globales
- `src/assets/` — imágenes procesadas por `astro:assets`
- `public/` — archivos servidos tal cual (`favicon.svg`, `robots.txt`, `og-image.jpg`)

## Despliegue

Cada push a `master` dispara `.github/workflows/deploy.yml`, que construye el sitio con
`withastro/action` y lo publica en GitHub Pages.

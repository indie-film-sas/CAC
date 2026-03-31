# Córdoba Audiovisual Cluster Platform

Estructura preparada para hosting estático directo.

## Estructura de hosting web (raíz)

- `index.html`
- `el-cluster.html`
- `miembros.html`
- `novedades.html`
- `sumate.html`
- `contacto.html`
- `404.html`
- `.nojekyll`
- `assets/css/site.css`
- `assets/js/app.js`

## Funcionalidad frontend incluida

- Catálogo de miembros dinámico con búsqueda + filtros en `miembros.html`.
- Novedades con tabs filtrables en `novedades.html`.
- Formularios funcionales (feedback de envío) en `sumate.html` y `contacto.html`.

## URL de entrada en hosting

- `/cac/index.html` (si el sitio está bajo subcarpeta `cac`)
- `/index.html` (si está publicado en raíz)

## Nota sobre Next.js / Payload

La base en `src/` (Next.js + Payload) se mantiene para evolución dinámica del proyecto.

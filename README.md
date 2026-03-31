# Córdoba Audiovisual Cluster Platform

Este repositorio ahora incluye una **estructura web estática estándar** lista para hosting online (GitHub Pages, Netlify static, cPanel, etc.) sin depender de runtime Node.

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

Todos los enlaces entre páginas son relativos y funcionales para hosting estático.

## Nota sobre Next.js / Payload

La base en `src/` (Next.js + Payload) se mantiene para evolución dinámica del proyecto,
pero para publicar inmediatamente como web tradicional podés subir directamente los archivos de raíz + `assets/`.

## Publicación rápida

1. Subir el contenido del repo al hosting estático.
2. Verificar que el documento de inicio sea `index.html`.
3. Validar navegación:
   - `/index.html`
   - `/miembros.html`
   - `/novedades.html`
   - `/contacto.html`


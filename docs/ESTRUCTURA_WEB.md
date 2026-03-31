# Estructura de la web (HTML + secciones)

## Sitemap principal

- `/` Home
- `/el-cluster`
- `/miembros`
- `/miembros/[slug]`
- `/novedades`
- `/recursos`
- `/sumate`
- `/contacto`
- `/area-privada`
- `/cms-login`
- `/dashboard-editorial`

## Estructura HTML de Home

```html
<header>...</header>
<main>
  <section id="hero">...</section>
  <section id="definicion">...</section>
  <section id="catalogo-miembros">...</section>
  <section id="novedades">...</section>
  <section id="beneficios">...</section>
  <section id="cta-final">...</section>
</main>
<footer>...</footer>
```

## Referencias de implementación

- Home real: `src/app/page.tsx`
- Shell global: `src/app/layout.tsx`
- Header/Footer: `src/components/Header.tsx`, `src/components/Footer.tsx`
- Catálogo miembros: `src/app/miembros/page.tsx`, `src/components/members/MembersCatalogClient.tsx`

# Córdoba Audiovisual Cluster Platform

Plataforma híbrida construida con **Next.js + TypeScript + Tailwind + Payload CMS + PostgreSQL**.

## Incluye

- Sitio institucional público completo (home, cluster, miembros, novedades, recursos, contacto y sumate).
- Landing simplificada con visual dark premium.
- Catálogo de miembros con listado y ficha individual.
- Área privada de miembros (login protegido + panel base) y pantalla frontend de dashboard editorial.
- Esquema headless CMS para noticias, eventos, estrenos, anuncios, convocatorias, recursos y home.

## Seguridad de login (miembros + CMS)

- Rate limiting por IP para endpoints de login.
- Honeypot anti-bot en formularios.
- Time-trap mínimo de interacción humana.
- Token CSRF por cookie `httpOnly` + validación en formulario.
- Para usuarios de CMS en Payload: `maxLoginAttempts` + `lockTime` + expiración de token.


## Estructura visible de la web

- Estructura por secciones HTML de Home en `src/app/page.tsx` (ids: `hero`, `definicion`, `catalogo-miembros`, `novedades`, `beneficios`, `cta-final`).
- Documento de estructura en `docs/ESTRUCTURA_WEB.md`.
- HTML estático de referencia en `public/html/home-structure.html`.

## Estructura

- `src/app`: frontend público y rutas.
- `src/components`: componentes UI reutilizables.
- `src/payload`: configuración de Payload y modelos de datos.
- `src/lib`: utilidades y mock data.


## Importante sobre publicación

Si publicás el repositorio en un hosting estático sin build de Next.js, se puede mostrar el `README.md` en vez de la app.

Para evitar eso:
- opción A (recomendada): desplegar Next.js en Vercel/Render con `npm run build`.
- opción B (estático): usar `index.html` + `site.css` incluidos en la raíz (landing institucional lista para publicación estática).


### Rutas estáticas listas para publicar

Si publicás en estático (sin runtime Next), usá estas páginas dentro de `public/html/`:
- `index.html` (home)
- `el-cluster.html`
- `miembros.html`
- `novedades.html`
- `sumate.html`
- `contacto.html`

Todos los links de navegación entre estas páginas son relativos y funcionales.

## Ejecutar

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Configurar variables de entorno:
   ```bash
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/cac
   PAYLOAD_SECRET=replace-with-secure-secret
   ```
3. Levantar entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. (Opcional) generar tipos de Payload:
   ```bash
   npm run payload:types
   ```

## Arquitectura de roles recomendada

- `superadmin/admin`: control total y publicación.
- `editor`: gestión editorial.
- `member`: edición de su propio perfil para revisión.

## Workflow de miembros recomendado

1. Miembro edita su perfil.
2. Estado pasa a `pending_review`.
3. Admin revisa.
4. Admin publica perfil en catálogo.

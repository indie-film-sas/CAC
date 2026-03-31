# Córdoba Audiovisual Cluster Platform

Plataforma híbrida construida con **Next.js + TypeScript + Tailwind + Payload CMS + PostgreSQL**.

## Incluye

- Sitio institucional público.
- Landing simplificada con visual dark premium.
- Catálogo de miembros con listado y ficha individual.
- Área privada de miembros (login + panel base).
- Esquema headless CMS para noticias, eventos, estrenos, anuncios, convocatorias, recursos y home.

## Seguridad de login (miembros + CMS)

- Rate limiting por IP para endpoints de login.
- Honeypot anti-bot en formularios.
- Time-trap mínimo de interacción humana.
- Token CSRF por cookie `httpOnly` + validación en formulario.
- Para usuarios de CMS en Payload: `maxLoginAttempts` + `lockTime` + expiración de token.

## Estructura

- `src/app`: frontend público y rutas.
- `src/components`: componentes UI reutilizables.
- `src/payload`: configuración de Payload y modelos de datos.
- `src/lib`: utilidades y mock data.

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

# horizonte-web

Landing page de **Horizonte Constructora SAS**, hecha con Next.js, Tailwind CSS y TypeScript.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
STATIC_EXPORT=1 npm run build   # sitio estático en /out (hosting sin servidor)
```

## Demo en GitHub Pages

Cada push a `main` (o a `feat/landing-page`) ejecuta `.github/workflows/deploy-pages.yml`, que construye el sitio
y lo publica en la rama `gh-pages`. La demo queda en `https://vdaymon.github.io/horizonte-web/`.

Para activarlo una sola vez: **Settings → Pages → Build and deployment → Source: Deploy from a branch →
Branch: `gh-pages` / `(root)`**. GitHub Pages solo funciona en repositorios públicos, salvo con un plan de pago.

## Animaciones

Hechas con [Motion](https://motion.dev) (`src/components/motion.tsx`) y CSS (`src/app/globals.css`).
Respetan la opción del sistema "reducir movimiento".

## Editar el contenido

Todo el contenido editable está en `src/data/site.ts`:

- **Contacto**: teléfono, WhatsApp y dirección.
- **Servicios**, **mantenimiento**, **metodología 360°** y **valores**.
- **Proyectos**: para poner una foto, copia la imagen en `public/proyectos/` y pon su ruta en `image`
  (por ejemplo `image: "/proyectos/torres-cali.jpg"`). Si un proyecto no tiene `image`, se muestra un espacio reservado.

## Marca

- `public/brand/`: logo e ícono en SVG, sacados del archivo vectorial de marca.
- `public/img/`: fotos tomadas de las piezas gráficas.

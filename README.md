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
- **Proyectos**: cada proyecto agrupa sus fotos por etapa de obra, con fecha y pie de foto.
  Las fotos van en `public/proyectos/<proyecto>/full/` (1600 px) y `public/proyectos/<proyecto>/thumb/` (720 px).
  Para crear las dos versiones de una foto nueva:

  ```bash
  convert original.jpg -resize "1600x1600>" -strip -quality 82 public/proyectos/palmaseca/full/41-avance.jpg
  convert original.jpg -resize "720x720>"  -strip -quality 74 public/proyectos/palmaseca/thumb/41-avance.jpg
  ```

  y se agrega una línea en `media` del proyecto en `src/data/site.ts`.

## Marca

- `public/brand/`: logo e ícono en SVG, sacados del archivo vectorial de marca.
- `public/img/`: fotos tomadas de las piezas gráficas.

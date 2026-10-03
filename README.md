# horizonte-web

Landing page de **Horizonte Constructora SAS**, hecha con Next.js, Tailwind CSS y TypeScript.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
STATIC_EXPORT=1 npm run build   # sitio estático en /out (hosting sin servidor)
```

## Editar el contenido

Todo el contenido editable está en `src/data/site.ts`:

- **Contacto**: teléfono, WhatsApp y dirección.
- **Servicios**, **mantenimiento**, **metodología 360°** y **valores**.
- **Proyectos**: para poner una foto, copia la imagen en `public/proyectos/` y pon su ruta en `image`
  (por ejemplo `image: "/proyectos/torres-cali.jpg"`). Si un proyecto no tiene `image`, se muestra un espacio reservado.

## Marca

- `public/brand/`: logo e ícono en SVG, sacados del archivo vectorial de marca.
- `public/img/`: fotos tomadas de las piezas gráficas.

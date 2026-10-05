# Pozuzo · tres webs para Gersson Garay

**Abre `index.html`** para la portada con tres tarjetas. Cada tarjeta abre una web autónoma en otra pestaña. También puedes abrir directamente:

1. `01-ubicacion/index.html` — globo 3D y recorrido Perú → Pasco → Oxapampa → Pozuzo.
2. `02-territorio/index.html` — dos panoramas reales, cuatro hotspots y un relieve satelital 3D.
3. `03-selva-alta/index.html` — modelo visual con cuatro factores y transición al siguiente integrante.

Los archivos `Pozuzo-01-Globo-3D.html`, `Pozuzo-02-Territorio.html` y `Pozuzo-03-Selva-Alta.html` en la carpeta de entregables son versiones individuales con código e imágenes incorporados. Ábrelos con Edge o Chrome. La vista satelital de alta resolución y el relieve 3D consultan teselas en línea; necesitas internet para esos fondos. Las fotografías, textos y demás interacciones están incluidas en el archivo.

Se diseñó para presentación panorámica 16:9. Usa el botón de pantalla completa del encabezado. En el pie de cada web puedes abrir el guion de Gersson Garay (~1 minuto) y las fuentes. Las tres webs mantienen su propio contenido y pueden abrirse directamente.

## Contenido y precisión

El mapa usa geometrías administrativas simplificadas. En el acercamiento final, el contorno visible corresponde a la **provincia de Oxapampa** y el punto indica de forma referencial la **localidad de Pozuzo**. No es un contorno del distrito ni una ruta vial. La Municipalidad indica que el distrito se ubica en la Cordillera Oriental y atraviesa una transición entre selva baja, selva alta y ceja de selva. La exposición se concentra en sus ambientes de Selva Alta.

La exposición introduce el vínculo con el resto del trabajo, pero no desarrolla flora, fauna, impactos, problemas ambientales ni el econegocio. La última frase abre paso al siguiente expositor: “Con el territorio ubicado, pasamos a reconocer los ecosistemas que sostienen esta biodiversidad.”

## Fuentes

- MINCETUR, *Pueblo de Pozuzo*, ficha 12877: https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=12877
- Municipalidad Distrital de Pozuzo, Programa EDUCCA 2017–2022, pp. 11–12: https://sinia.minam.gob.pe/sites/default/files/sinia/archivos/public/docs/dt-md_pozuzo_2017-2022_pasco.pdf
- MINAM, *Informe Nacional sobre el Estado del Medio Ambiente*, apartado Selva Alta: https://sinia.minam.gob.pe/inea/informe/estado-y-los-impactos/
- SENAMHI, *Guía climática turística*: https://www.senamhi.gob.pe/load/file/01401SENA-20.pdf
- MINCETUR, *Lluvias Eternas de Pozuzo*, ficha 12110: https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=12110

Consultadas el 4 de octubre de 2026.

## Imágenes, mapas y software

- “Colinas en Pozuzo” y “Paisaje típico de Pozuzo”, **Heiner Amado Cadillo** / Wikimedia Commons, 11 de junio de 2015, **CC BY-SA 3.0**: https://commons.wikimedia.org/wiki/File:Colinas_en_Pozuzo_-_panoramio.jpg ; https://commons.wikimedia.org/wiki/File:Paisaje_tipico_de_Pozuzo_-_panoramio.jpg ; https://creativecommons.org/licenses/by-sa/3.0/. Se redimensionaron y convirtieron a WebP; la interfaz las recorta y superpone color. Las adaptaciones fotográficas conservan la misma licencia.
- Textura alternativa de la Tierra: **NASA Earth Observatory, Blue Marble Next Generation, julio de 2004**: https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-base/july/world.200407.3x5400x2700.jpg. Se usa cuando el navegador no puede mostrar el globo satelital interactivo.
- Satélite interactivo: **EOX Sentinel‑2 cloudless 2024**; teselas en línea y atribución visible, **CC BY-NC-SA 4.0**, uso educativo no comercial: https://cloudless.eox.at/products/viewing ; https://cloudless.eox.at/pricing.
- Relieve 3D en línea: **Mapterhorn**: https://mapterhorn.com/data-access/.
- Límites departamentales simplificados: geoBoundaries ADM1 Perú, fuente Wikimedia Commons (dominio público), referencia 2008. Provincia de Oxapampa: geoBoundaries ADM2 Perú, fuente IGN/OCHA ROLAC, referencia 2020, CC BY 3.0 IGO: https://www.geoboundaries.org/ ; https://creativecommons.org/licenses/by/3.0/igo/.
- Motor 3D: **MapLibre GL JS 5.6.0**, BSD-3-Clause: https://github.com/maplibre/maplibre-gl-js/blob/main/LICENSE.txt.
- Tipografías DM Sans y Manrope, SIL Open Font License; textos de licencia incluidos en `shared/`.

## Publicación en Vercel

Este repositorio es un sitio estático sin compilación. En Vercel, importa el repositorio desde GitHub con **Framework Preset: Other**, deja **Build Command** vacío y usa el directorio raíz (`.`) como salida. Al desplegar, `index.html` será la portada pública; cada tarjeta abrirá una de las tres webs independientes. Las imágenes y el código están incluidos. Los mapas satelitales y el relieve necesitan internet.

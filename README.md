# Mateo Import. — Sitio Web

Tienda web responsiva para **Mateo Import.** (**Dijes**, **Aretes**, **Aretes Modelo** y **Pulseras**) con carrito de compras persistente, envío directo de pedidos por WhatsApp al **+51 931 088 900**, tiendas físicas en Cercado de Lima y envíos a todo el Perú.

## Tiendas Físicas y Envíos
- **Galería Cusco:** Jr. Cusco 716, Tienda 216 y Tienda 225 — Cercado de Lima.
- **Galería Mercado Central:** Jr. Cusco 640, Tienda 1116 — Cercado de Lima.
- **Envíos:** Lima Metropolitana y provincias a todo el Perú.

## Páginas incluidas
- `index.html`: Página principal (hero editorial, 4 categorías, productos destacados, tiendas físicas y propuesta de valor).
- `catalogo.html`: Catálogo interactivo con filtros (`Todos`, `Dijes`, `Aretes`, `Aretes Modelo`, `Pulseras`), búsqueda por nombre, ordenamiento, vista rápida y selector de cantidad.
- `nosotros.html`: Historia de la marca, sedes físicas y guía de compra en 3 pasos.
- `politicas.html`: Términos y condiciones, tiendas físicas y envíos, cambios, cuidado de accesorios y privacidad.

## Cómo personalizar productos o precios
Edita el archivo `assets/js/products.js`:
- En `MATEO_CONFIG` puedes ajustar el número de WhatsApp (`whatsappNumber`), teléfono visible o moneda (`S/`).
- En `MATEO_PRODUCTS` puedes agregar, modificar o quitar productos (`id`, `name`, `category`, `categoryLabel`, `price`, `tag`, `featured`, `image`).

---

## Resumen del Catálogo Actual

| Categoría | Clave (`category`) | Total de productos | Destacados (`featured: true`) | Estado |
|---|---|---:|---:|---|
| **Dijes** | `dijes` | 84 | 10 | Cargada con fotos reales |
| **Aretes** | `aretes` | 38 | 10 | Cargada con fotos reales |
| **Aretes Modelo** | `aretes-modelo` | 93 | 10 | Cargada con fotos reales |
| **Pulseras** | `pulseras` | 72 | 10 | Cargada con fotos reales |
| **TOTAL** | — | **287** | **40** | — |

---

## Productos Repetitivos con Medidas Distintas

### 1. Productos con medidas distintas que **SÍ comparten la misma imagen**

Estos productos provienen de una sola fotografía cuyo archivo original incluía dos medidas y dos precios distintos, por lo que se separaron en dos registros compartiendo la misma imagen:

| Categoría | Productos (Medida y Precio) | Imagen compartida |
|---|---|---|
| Aretes Modelo | Pendientes de Perlas Amarillo Bebé 6 mm (S/ 4.10) / Pendientes de Perlas Amarillo Bebé 10 mm (S/ 6.80) | `assets/img/aretes modelo/Elegancia en perlas amarillo bebe de 6 mm - 4.10 - 10 mm - 6.80.jpg` |
| Aretes Modelo | Pendientes de Perla Elegancia 7 mm (S/ 3.60) / Pendientes de Perla Elegancia 10 mm (S/ 5.80) | `assets/img/aretes modelo/Elegancia Perla de 7 mm - 3.60 - 10 mm - 5.80.jpg` |

### 2. Todos los modelos repetitivos con medidas distintas (29 modelos / 75 productos)

| # | Categoría | Modelo base | Variantes (Nombre y Precio) | ¿Misma imagen? |
|---:|---|---|---|---|
| 1 | Dijes | cruz con cristales 18k | Cruz con Cristales 18k 2 cm (S/ 3.80)<br>Cruz con Cristales 18k 6 cm (S/ 6.60) | No (foto individual) |
| 2 | Dijes | corazón | Corazón 3 mm (S/ 3.20)<br>Corazón 5 mm (S/ 4.20) | No (foto individual) |
| 3 | Dijes | corazón dorado 14k | Corazón Dorado 1 mm 14k (S/ 1.80)<br>Corazón Dorado 14k (S/ 2.60)<br>Corazón Dorado 3 mm 14k (S/ 2.00) | No (foto individual) |
| 4 | Dijes | corazón dorado 18k | Corazón Dorado 1 mm 18k (S/ 1.80)<br>Corazón Dorado 2 mm 18k (S/ 2.00) | No (foto individual) |
| 5 | Dijes | corazón plateado | Corazón Plateado 1 mm (S/ 2.00)<br>Corazón Plateado 2 mm (S/ 2.00)<br>Corazón Plateado 4 mm (S/ 2.20)<br>Corazón Plateado 8 mm (S/ 2.60) | No (foto individual) |
| 6 | Dijes | estrella 18k | Estrella 18k 1 mm (S/ 1.80)<br>Estrella 18k 12 mm (S/ 4.00)<br>Estrella 18k 3 mm (S/ 2.20)<br>Estrella 18k 5 mm (S/ 3.00) | No (foto individual) |
| 7 | Dijes | niño 18k | Niño 3 mm 18k (S/ 4.00)<br>Niño 5 mm 18k (S/ 3.20) | No (foto individual) |
| 8 | Aretes | argolla dorada | Argolla Dorada 10 mm (S/ 4.80)<br>Argolla Dorada 15 mm (S/ 4.80)<br>Argolla Dorada 8 mm (S/ 4.20) | No (foto individual) |
| 9 | Aretes | bola dorada | Bola Dorada 2 mm (S/ 2.00)<br>Bola Dorada 10 mm (S/ 3.20)<br>Bola Dorada 10 mm (S/ 6.60) | No (foto individual) |
| 10 | Aretes | diamante con dorado | Diamante con Dorado (S/ 3.40)<br>Diamante con Dorado 3 mm (S/ 2.40) | No (foto individual) |
| 11 | Aretes Modelo | aros plateados | Aros Plateados de 20 mm (S/ 5.50)<br>Aros Plateados de 25 mm (S/ 6.00)<br>Aros Plateados de 35 mm (S/ 7.80)<br>Aros Plateados de 40 mm (S/ 8.60)<br>Aros Plateados de 45 mm (S/ 9.60)<br>Aros Plateados de 50 mm (S/ 10.70) | No (foto individual) |
| 12 | Aretes Modelo | elegancia dorada con aros 18k | Elegancia Dorada con Aros de 25 mm 18k (S/ 6.20)<br>Elegancia Dorada con Aros de 30 mm 18k (S/ 7.60)<br>Elegancia Dorada con Aros de 40 mm 18k (S/ 8.60)<br>Elegancia Dorada con Aros de 55 mm 18k (S/ 11.60) | No (foto individual) |
| 13 | Aretes Modelo | pendientes de perlas amarillo bebé | Pendientes de Perlas Amarillo Bebé 6 mm (S/ 4.10)<br>Pendientes de Perlas Amarillo Bebé 10 mm (S/ 6.80) | **Sí (comparten foto)** |
| 14 | Aretes Modelo | pendientes de perla elegancia | Pendientes de Perla Elegancia 7 mm (S/ 3.60)<br>Pendientes de Perla Elegancia 10 mm (S/ 5.80) | **Sí (comparten foto)** |
| 15 | Aretes Modelo | pendientes de diamante | Pendientes de Diamante de 6 mm (S/ 2.80)<br>Pendientes de Diamante de 4 mm (S/ 2.50) | No (foto individual) |
| 16 | Aretes Modelo | pendientes de plata | Pendientes de Plata de 30 mm (S/ 7.60)<br>Pendientes de Plata de 12 mm (S/ 7.20) | No (foto individual) |
| 17 | Aretes Modelo | pendientes dorados 18k | Pendientes Dorados de 8 mm 18k (S/ 4.20)<br>Pendientes Dorados 7 mm 18k (S/ 5.40) | No (foto individual) |
| 18 | Aretes Modelo | pendientes de aro plateados | Pendientes de Aro Plateados de 7 mm (S/ 5.00)<br>Pendientes de Aro Plateados (S/ 9.60)<br>Pendientes de Aro Plateados (S/ 4.20) | No (foto individual) |
| 19 | Aretes Modelo | pendientes de corazón | Pendientes de Corazón 4 mm (S/ 2.40)<br>Pendientes de Corazón 7 mm (S/ 3.00) | No (foto individual) |
| 20 | Aretes Modelo | pendientes de corazón dorado 18k | Pendientes de Corazón Dorado 6 mm 18k (S/ 3.00)<br>Pendientes de Corazón Dorado de 10 mm 18k (S/ 4.20)<br>Pendientes de Corazón Dorado de 7 mm 18k (S/ 4.00) | No (foto individual) |
| 21 | Aretes Modelo | pendientes de perla granate | Pendientes de Perla Granate 10 mm (S/ 6.80)<br>Pendientes de Perla Granate 6 mm (S/ 4.10) | No (foto individual) |
| 22 | Aretes Modelo | pendientes dorados de nudo 18k | Pendientes Dorados de Nudo 18k (S/ 6.60)<br>Pendientes Dorados de Nudo 1 mm 18k (S/ 6.60) | No (foto individual) |
| 23 | Aretes Modelo | pendientes nacarados celeste bebé | Pendientes Nacarados Celeste Bebé 10 mm (S/ 6.80)<br>Pendientes Nacarados Celeste Bebé de 8 mm (S/ 4.60) | No (foto individual) |
| 24 | Pulseras | collar cadena argolla gruesa | Collar Cadena Argolla Gruesa 60 cm (S/ 24.90)<br>Collar Cadena Argolla Gruesa 60 cm (S/ 23.50) | No (foto individual) |
| 25 | Pulseras | collar cadena cúbica delgada dorada | Collar Cadena Cúbica Delgada Dorada 45 cm (S/ 7.20)<br>Collar Cadena Cúbica Delgada Dorada 50 cm (S/ 6.60) | No (foto individual) |
| 26 | Pulseras | collar cadena dorada | Collar Cadena Dorada 55 cm (S/ 18.90)<br>Collar Cadena Dorada 70 cm (S/ 22.60) | No (foto individual) |
| 27 | Pulseras | collar cadena frejol menudo | Collar Cadena Frejol Menudo 45 cm (S/ 6.20)<br>Collar Cadena Frejol Menudo 60 cm (S/ 27.10) | No (foto individual) |
| 28 | Pulseras | collar cadena gruesa plateada | Collar Cadena Gruesa Plateada 50 cm (S/ 7.10)<br>Collar Cadena Gruesa Plateada 55 cm (S/ 24.90) | No (foto individual) |
| 29 | Pulseras | esclava dorada | Esclava Dorada 14x2 cm (S/ 7.20)<br>Esclava Dorada 19 cm (S/ 12.80) | No (foto individual) |

---

## Inventario Completo por Categoría

### Dijes (84 productos)

| # | Nombre | Precio (S/) | Destacado | Etiqueta (`tag`) | Imagen |
|---:|---|---:|:---:|---|---|
| 1 | Dije San Benito 14k | 3.60 | No | — | `assets/img/dijes/14k - 3.60.jpg` |
| 2 | Dije Virgen con Rayos 14k | 5.20 | No | — | `assets/img/dijes/14k - 5.20.jpg` |
| 3 | Dije Virgen de Guadalupe Borde Trenzado 18k | 3.60 | No | — | `assets/img/dijes/18k - 3.60.jpg` |
| 4 | Dije Virgen de Guadalupe Rectangular 18k | 4.20 | No | — | `assets/img/dijes/18k - 4.20.jpg` |
| 5 | Dije Rombo Cristal 18k | 4.70 | No | — | `assets/img/dijes/18k - 4.70.jpg` |
| 6 | Dije Relicario Libro 18k | 5.00 | No | — | `assets/img/dijes/18k - 5.00.jpg` |
| 7 | Dije San Judas Tadeo con Cristales 18k | 8.90 | No | — | `assets/img/dijes/18k - 8.90.jpg` |
| 8 | Cruz Mom con Cristales 18k 12 mm | 9.00 | No | — | `assets/img/dijes/18k 12mm - 9.0.jpg` |
| 9 | Cruz con Cristales 18k 2 cm | 3.80 | No | — | `assets/img/dijes/18k 2 cm  - 3.80.jpg` |
| 10 | Cruz con Cristales 18k 6 cm | 6.60 | No | — | `assets/img/dijes/18k 6cm - 6.60.jpg` |
| 11 | Árbol de Corazones | 7.20 | Sí | Más vendido | `assets/img/dijes/Arbol de Corazones 7.20.png` |
| 12 | Árbol de Vida 18k | 7.80 | Sí | Más vendido | `assets/img/dijes/arbol de vida 18k - 7.80.jpg` |
| 13 | Árbol Dorado con Diamantes | 6.80 | No | — | `assets/img/dijes/arbol dorado con diamantes - 6.80.jpg` |
| 14 | Bola Dorada 18k | 3.40 | No | — | `assets/img/dijes/bola dorada 18k - 3.40.jpg` |
| 15 | Bola Dorada 8 mm 14k | 3.00 | No | — | `assets/img/dijes/bola dorada 8 mm 14k - 3.00.jpg` |
| 16 | Cara Virgen Dorado 18k | 5.80 | No | — | `assets/img/dijes/cara virgen dorado 18k -5.80.jpg` |
| 17 | Chihuahua | 9.90 | No | — | `assets/img/dijes/chihuahua - 9.90.jpg` |
| 18 | Corazón 3 mm | 3.20 | No | — | `assets/img/dijes/corazon 3 mm - 3.20.jpg` |
| 19 | Corazón 5 mm | 4.20 | No | — | `assets/img/dijes/corazon 5 mm - 4.20.jpg` |
| 20 | Corazón Dorado 1 mm 14k | 1.80 | No | — | `assets/img/dijes/corazon dorado 1 mm 14k - 1.8.jpg` |
| 21 | Corazón Dorado 1 mm 18k | 1.80 | No | — | `assets/img/dijes/corazon dorado 1 mm 18k -1.80.jpg` |
| 22 | Corazón Dorado 14k | 2.60 | No | — | `assets/img/dijes/corazon dorado 14k - 2.60.jpg` |
| 23 | Corazón Dorado 2 mm 18k | 2.00 | No | — | `assets/img/dijes/corazon dorado 2 mm 18k - 2.0.jpg` |
| 24 | Corazón Dorado 3 mm 14k | 2.00 | No | — | `assets/img/dijes/corazon dorado 3mm 14k - 2.0.jpg` |
| 25 | Corazón Grande Dorado | 4.60 | No | — | `assets/img/dijes/Corazon grande dorado - 4.60.jpg` |
| 26 | Corazón Margen Dorado | 3.50 | No | — | `assets/img/dijes/corazon margen dorado - 3.50.jpg` |
| 27 | Corazón Plateado 1 mm | 2.00 | No | — | `assets/img/dijes/corazon plateado 1mm - 2.0.jpg` |
| 28 | Corazón Plateado 2 mm | 2.00 | No | — | `assets/img/dijes/corazon plateado 2mm - 2.00.jpg` |
| 29 | Corazón Plateado 4 mm | 2.20 | No | — | `assets/img/dijes/corazon plateado 4mm - 2.20.jpg` |
| 30 | Corazón Plateado 8 mm | 2.60 | No | — | `assets/img/dijes/corazon plateado 8mm - 2.60.jpg` |
| 31 | Cruz Cruz | 5.50 | No | — | `assets/img/dijes/cruz cruz - 5.50.jpg` |
| 32 | Cruz Dorada 14k | 3.60 | No | — | `assets/img/dijes/cruz dorada 14k - 3.60.jpg` |
| 33 | Cruz Dorada 18k | 3.60 | No | — | `assets/img/dijes/cruz dorada 18k - 3.60.jpg` |
| 34 | Cruz Dorada Cristo | 7.20 | No | — | `assets/img/dijes/cruz dorada cristo - 7.20.jpg` |
| 35 | Cruz Dorada Grande Curvo | 5.80 | No | — | `assets/img/dijes/cruz dorada grande curvo - 5.80.jpg` |
| 36 | Cruz Grande | 8.60 | No | — | `assets/img/dijes/cruz grande - 8.60.jpg` |
| 37 | Cruz Lujo Diamante | 13.80 | Sí | Destacado | `assets/img/dijes/cruz lujo diamante - 13.80.jpg` |
| 38 | Cruz Pequeña Dorada 18k | 3.30 | No | — | `assets/img/dijes/cruz pequeña dorada 18k - 3.30.jpg` |
| 39 | Cruz Pequeña Plateada | 3.60 | No | — | `assets/img/dijes/cruz pequeña plateada - 3.60.jpg` |
| 40 | Diamante Negro | 3.10 | No | — | `assets/img/dijes/diamante negro - 3.10.jpg` |
| 41 | Diamante Verde | 3.50 | No | — | `assets/img/dijes/diamante verde - 3.50.png` |
| 42 | Estrella 18k 1 mm | 1.80 | No | — | `assets/img/dijes/estrella 18k 1 mm - 1.80.jpg` |
| 43 | Estrella 18k 12 mm | 4.00 | No | — | `assets/img/dijes/estrella 18k 12mm - 4.0.jpg` |
| 44 | Estrella 18k 3 mm | 2.20 | No | — | `assets/img/dijes/estrella 18k 3mm - 2.20.jpg` |
| 45 | Estrella 18k 5 mm | 3.00 | No | — | `assets/img/dijes/estrella 18k 5 mm - 3.0.jpg` |
| 46 | Estrella con Diamantes | 3.80 | Sí | Destacado | `assets/img/dijes/estrella con diamantes - 3.80.jpg` |
| 47 | Flor Multicolor | 4.20 | No | — | `assets/img/dijes/flor multicolor - 4.20.jpg` |
| 48 | Gatito en Flor Dorado 18k | 5.80 | Sí | Nuevo | `assets/img/dijes/gatito en flor dorado 18k - 5.80.jpg` |
| 49 | Luna Dorada Diamante | 4.00 | No | — | `assets/img/dijes/luna dorada diamante - 4.00.jpg` |
| 50 | Luna Dorada Diamante | 4.70 | Sí | Más vendido | `assets/img/dijes/luna dorada diamante - 4.70.jpg` |
| 51 | Mamá e Hijo Corazón | 6.30 | Sí | Más vendido | `assets/img/dijes/mama e hijo corazon - 6.30.jpg` |
| 52 | Mano Invertida | 3.80 | No | — | `assets/img/dijes/mano invertida - 3.80.jpg` |
| 53 | Mariposa Dorada | 4.60 | Sí | Destacado | `assets/img/dijes/mariposa dorada - 4.60.jpg` |
| 54 | Mariquita | 3.60 | No | — | `assets/img/dijes/mariquita - 3.60.jpg` |
| 55 | Maxicruz | 7.20 | No | — | `assets/img/dijes/maxicruz - 7.20.jpg` |
| 56 | Medalla Asunción Virgen María | 3.90 | No | — | `assets/img/dijes/medalla asuncion virgen maria - 3.90.jpg` |
| 57 | Medalla Cristo Cruz | 3.90 | No | — | `assets/img/dijes/medalla cristo cruz - 3.90.jpg` |
| 58 | Medalla Pequeña Virgen 18k | 3.00 | No | — | `assets/img/dijes/medalla pequeña virgen 18k- 3.0.jpg` |
| 59 | Medalla Plateada | 3.60 | No | — | `assets/img/dijes/medalla plateada - 3.60.png` |
| 60 | Medalla Santo 14k | 4.20 | No | — | `assets/img/dijes/medalla santo 14 k - 4.20.jpg` |
| 61 | Medalla Santo Cruz Cuadrado Dorado | 5.80 | No | — | `assets/img/dijes/medalla santo cruz cuadrado dorado - 5.80.png` |
| 62 | Medalla Santo Destello | 4.80 | No | — | `assets/img/dijes/medalla santo destello - 4.80.jpg` |
| 63 | Medalla Santo Plateado | 4.20 | No | — | `assets/img/dijes/medalla santo plateado - 4.20.jpg` |
| 64 | Medalla Virgen | 4.20 | No | — | `assets/img/dijes/medalla virgen - 4.20.jpg` |
| 65 | Medalla Virgen con Niño en Brazos Redondeado Dorado | 4.20 | No | — | `assets/img/dijes/medalla Virgen con niño en brazos redondeado dorado - 4.20.jpg` |
| 66 | Medalla Virgen Corazón 18k | 3.60 | No | — | `assets/img/dijes/medalla virgen corazon 18k - 3.60.jpg` |
| 67 | Medalla Virgen Cuadrado Plata | 4.20 | No | — | `assets/img/dijes/medalla virgen cuadrado plata - 4.20.jpg` |
| 68 | Medalla Virgen Dorada | 3.40 | No | — | `assets/img/dijes/medalla virgen dorada - 3.40.jpg` |
| 69 | Medalla Virgen Dorada Circular | 5.80 | No | — | `assets/img/dijes/medalla virgen dorada circular - 5.80.jpg` |
| 70 | Medalla Virgen María | 3.90 | No | — | `assets/img/dijes/medalla virgen maria - 3.90.jpg` |
| 71 | Medalla Virgen Plateada | 3.60 | No | — | `assets/img/dijes/medalla virgen plateada - 3.60.jpg` |
| 72 | Medalla Virgen Redondo Dorado | 3.60 | No | — | `assets/img/dijes/medalla virgen redondo dorado - 3.60.jpg` |
| 73 | Niña Dorada con Diamante | 3.50 | No | — | `assets/img/dijes/niña dorada con diamante - 3.50.jpg` |
| 74 | Niño 3 mm 18k | 4.00 | No | — | `assets/img/dijes/niño 3 mm 18k - 4.0.jpg` |
| 75 | Niño 5 mm 18k | 3.20 | No | — | `assets/img/dijes/niño 5mm 18k - 3.20.jpg` |
| 76 | Niño Grande 7 mm | 5.80 | No | — | `assets/img/dijes/niño grande 7 mm - 5.80.jpg` |
| 77 | Niño Plateado | 3.20 | No | — | `assets/img/dijes/niño plateado - 3.20.jpg` |
| 78 | Oso Diamante Dorado | 12.20 | Sí | Nuevo | `assets/img/dijes/oso diamante dorado - 12.20.jpg` |
| 79 | Perla con Dorado 18k | 3.60 | No | — | `assets/img/dijes/perla con dorado 18k - 3.60.jpg` |
| 80 | Perla con Plateado | 3.40 | No | — | `assets/img/dijes/perla con plateado - 3.40.jpg` |
| 81 | Placa Dorada Corazón | 3.60 | No | — | `assets/img/dijes/placa dorada corazon - 3.60.jpg` |
| 82 | Placa Dorada Redonda | 3.00 | No | — | `assets/img/dijes/placa dorada redonda - 3.00.jpg` |
| 83 | Placa Plateada Circular | 3.00 | No | — | `assets/img/dijes/placa plateada circular - 3.0.jpg` |
| 84 | Tulipán Amarillo | 7.80 | Sí | Nuevo | `assets/img/dijes/tulipan amarillo - 7.80.jpg` |

### Aretes (38 productos)

| # | Nombre | Precio (S/) | Destacado | Etiqueta (`tag`) | Imagen |
|---:|---|---:|:---:|---|---|
| 1 | Arete Bola Dorada 18k 6 mm | 4.20 | No | — | `assets/img/aretes/arete bola dorada 18k 6 mm - 4.20.jpg` |
| 2 | Aretes Cuadrados de Colores con Dorados | 3.60 | No | — | `assets/img/aretes/Aretes cuadrados de colores con dorados- 3.60.jpg` |
| 3 | Aretes Dorados 18k | 9.80 | No | — | `assets/img/aretes/Aretes dorados XUPING sobre tarjeta blanca 18k - 9.80.jpg` |
| 4 | Aretes Redondos de Colores con Dorado | 2.30 | No | — | `assets/img/aretes/Aretes redondos de colores con dorado - 2.30.jpg` |
| 5 | Argolla Bicolor Dorado 18k | 4.20 | No | — | `assets/img/aretes/argolla bicolor dorado 18k - 4.20.jpg` |
| 6 | Argolla con Diamante 6 mm | 5.80 | No | — | `assets/img/aretes/argolla con diamante 6 mm - 5.80.jpg` |
| 7 | Argolla con Diamante y Oro Cruzado 18k | 7.80 | Sí | Más vendido | `assets/img/aretes/argolla con diamante y oro cruzado 18k - 7.80.jpg` |
| 8 | Argolla Dorada 10 mm | 4.80 | No | — | `assets/img/aretes/argolla dorada 10 mm 4.80.png` |
| 9 | Argolla Dorada 15 mm | 4.80 | No | — | `assets/img/aretes/argolla dorada 15 mm 4.80.jpg` |
| 10 | Argolla Dorada 8 mm | 4.20 | No | — | `assets/img/aretes/argolla dorada 8 mm 4.20.jpg` |
| 11 | Argolla Dorada con Diamante 18k | 5.00 | No | — | `assets/img/aretes/argolla dorada con diamante 18k - 5.0.jpg` |
| 12 | Argolla Gruesa Dorada | 4.80 | No | — | `assets/img/aretes/argolla gruesa dorada - 4.80.jpg` |
| 13 | Argolla Gusano | 4.80 | No | — | `assets/img/aretes/argolla gusano - 4.80.jpg` |
| 14 | Argolla Maxi Dorada 18k | 5.80 | Sí | Más vendido | `assets/img/aretes/argolla maxi dorada 18k - 5.80.jpg` |
| 15 | Bola Dorada 2 mm | 2.00 | No | — | `assets/img/aretes/bola dorada - 2mm - 2.0.jpg` |
| 16 | Bola Dorada 10 mm | 3.20 | No | — | `assets/img/aretes/bola dorada 10 mm - 3.20.jpg` |
| 17 | Bola Dorada 10 mm | 6.60 | No | — | `assets/img/aretes/bola dorada 10mm - 6.60.jpg` |
| 18 | Bola Dorada 5 mm 18k | 3.60 | No | — | `assets/img/aretes/bola dorada 5mm 18k - 3.60.jpg` |
| 19 | Caracola Diamante Dorado | 7.80 | Sí | Nuevo | `assets/img/aretes/caracola diamante dorado - 7.80.jpg` |
| 20 | Corazón Destello con Diamante | 6.20 | No | — | `assets/img/aretes/corazon destelo con diamante - 6.20.jpg` |
| 21 | Corazón Escarchado | 4.20 | No | — | `assets/img/aretes/corazon escarchado - 4.20.jpg` |
| 22 | Corazón Invertido con Diamante | 9.80 | Sí | Destacado | `assets/img/aretes/corazon invertido con diamante - 9.80.jpg` |
| 23 | Corazón Margen Diamante 18k | 5.00 | No | — | `assets/img/aretes/corazon margen diamante 18k - 5.00.jpg` |
| 24 | Diamante con Dorado | 3.40 | No | — | `assets/img/aretes/diamante con dorado - 3.40.jpg` |
| 25 | Diamante con Dorado 3 mm | 2.40 | No | — | `assets/img/aretes/diamante con dorado 3mm- 2.40.jpg` |
| 26 | Dúo Dorado y Diamante | 8.80 | Sí | Nuevo | `assets/img/aretes/duo dorado y diamante - 8.80.jpg` |
| 27 | Elegancia Argolla con Diamante Dorada | 5.60 | Sí | Más vendido | `assets/img/aretes/elegancia argolla con diamante dorada - 5.60.jpg` |
| 28 | Elegancia Dorada Menudo Diamante 18k | 8.60 | No | — | `assets/img/aretes/elegancia dorada menudo diamante 18k - 8.60.jpg` |
| 29 | Estrella Colgante 18k | 8.00 | Sí | Destacado | `assets/img/aretes/estrella colgante 18k - 8.0.jpg` |
| 30 | Estrellita 18k | 3.00 | No | — | `assets/img/aretes/estrellita 18k - 3.0.jpg` |
| 31 | Flor Naranja 18k | 9.60 | No | — | `assets/img/aretes/flor naranja 18k - 9.60.jpg` |
| 32 | Flores Doradas 18k | 9.80 | Sí | Nuevo | `assets/img/aretes/flores doradas 18k - 9.80.jpg` |
| 33 | Infinito Colgante Dorado | 7.80 | Sí | Más vendido | `assets/img/aretes/infinito colgante dorado 7.80.jpg` |
| 34 | Joyas Marinas | 8.80 | No | — | `assets/img/aretes/joyas marinas - 8.80.jpg` |
| 35 | Moño Dorado 18k | 7.80 | Sí | Destacado | `assets/img/aretes/moño dorado 18k - 7.80.jpg` |
| 36 | Ojos Rojos | 4.20 | No | — | `assets/img/aretes/ojos rojos - 4.20.jpg` |
| 37 | Rollo Dorado 18k | 5.40 | No | — | `assets/img/aretes/rollo dorado 18k - 5.40.jpg` |
| 38 | Triángulo 18k | 3.00 | No | — | `assets/img/aretes/triangulo 18k - 3.0.jpg` |

### Aretes Modelo (93 productos)

| # | Nombre | Precio (S/) | Destacado | Etiqueta (`tag`) | Imagen |
|---:|---|---:|:---:|---|---|
| 1 | Aros Plateados de 20 mm | 5.50 | No | — | `assets/img/aretes modelo/Aro plateado de 20 mm - 5.50.jpg` |
| 2 | Aros Plateados de 25 mm | 6.00 | No | — | `assets/img/aretes modelo/Aro plateado de 25 mm - 6.0.jpg` |
| 3 | Aros Plateados de 35 mm | 7.80 | No | — | `assets/img/aretes modelo/Aro plateado de 35mm - 7.80.jpg` |
| 4 | Aros Plateados de 40 mm | 8.60 | No | — | `assets/img/aretes modelo/Aro plateado de 40 mm - 8.60.jpg` |
| 5 | Aros Plateados de 45 mm | 9.60 | No | — | `assets/img/aretes modelo/Aro plateado de 45 mm - 9.60.jpg` |
| 6 | Aros Plateados de 50 mm | 10.70 | No | — | `assets/img/aretes modelo/Aro plateado de 50 mm - 10.70.jpg` |
| 7 | Aros Dorados de 35 mm 14k | 7.80 | Sí | Más vendido | `assets/img/aretes modelo/Aros dorados de 35 mm 14k - 7.80.jpg` |
| 8 | Aros Dorados Minimalistas 18k | 4.20 | No | — | `assets/img/aretes modelo/Aros dorados minimalista 18k - 4.20.jpg` |
| 9 | Elegancia Dorada 18k | 4.80 | No | — | `assets/img/aretes modelo/Elegancia dorada 18k- 4.80.jpg` |
| 10 | Elegancia Dorada con Aros de 25 mm 18k | 6.20 | No | — | `assets/img/aretes modelo/Elegancia dorada con aros de 25 mm 18k - 6.20.jpg` |
| 11 | Elegancia Dorada con Aros de 30 mm 18k | 7.60 | No | — | `assets/img/aretes modelo/Elegancia dorada con aros de 30 mm 18k- 7.60.jpg` |
| 12 | Elegancia Dorada con Aros de 40 mm 18k | 8.60 | No | — | `assets/img/aretes modelo/Elegancia dorada con aros de 40 mm 18k - 8.60.jpg` |
| 13 | Elegancia Dorada con Aros de 55 mm 18k | 11.60 | No | — | `assets/img/aretes modelo/Elegancia dorada con aros de 55 mm 18k - 11.60.jpg` |
| 14 | Elegancia Dorada con Perlas 18k | 9.60 | Sí | Más vendido | `assets/img/aretes modelo/Elegancia dorada con perlas 18k - 9.60.jpg` |
| 15 | Pendientes de Perlas Amarillo Bebé 6 mm | 4.10 | No | — | `assets/img/aretes modelo/Elegancia en perlas amarillo bebe de 6 mm - 4.10 - 10 mm - 6.80.jpg` |
| 16 | Pendientes de Perlas Amarillo Bebé 10 mm | 6.80 | No | — | `assets/img/aretes modelo/Elegancia en perlas amarillo bebe de 6 mm - 4.10 - 10 mm - 6.80.jpg` |
| 17 | Elegancia en Rojo y Oro | 3.60 | No | — | `assets/img/aretes modelo/Elegancia en rojo y oro - 3.60.jpg` |
| 18 | Elegancia Floral en Plata y Esmalte | 10.80 | Sí | Nuevo | `assets/img/aretes modelo/Elegancia floral en plata y esmalte - 10.80.jpg` |
| 19 | Elegancia Minimalista con Pendientes de Bola Plateados 3 mm | 2.40 | No | — | `assets/img/aretes modelo/Elegancia minimalista con pendientes de bola plateados 3 mm - 2.40.jpg` |
| 20 | Pendientes de Perla Elegancia 7 mm | 3.60 | No | — | `assets/img/aretes modelo/Elegancia Perla de 7 mm - 3.60 - 10 mm - 5.80.jpg` |
| 21 | Pendientes de Perla Elegancia 10 mm | 5.80 | No | — | `assets/img/aretes modelo/Elegancia Perla de 7 mm - 3.60 - 10 mm - 5.80.jpg` |
| 22 | Pendientes Circulares con Zirconio de Oro Rosa 18k | 3.80 | No | — | `assets/img/aretes modelo/Pendiente circular con zirconio de oro rosa 18K- 3.80.jpg` |
| 23 | Pendientes con Piedra Zirconio Dorado | 2.00 | No | — | `assets/img/aretes modelo/Pendiente con piedra zirconio dorado - 2.00.jpg` |
| 24 | Pendientes de 6 mm 18k | 3.80 | No | — | `assets/img/aretes modelo/Pendiente de 6 mm 18K - 3.80.jpg` |
| 25 | Pendientes de Diamante de 6 mm | 2.80 | No | — | `assets/img/aretes modelo/Pendiente de diamante de 6 mm - 2.80.jpg` |
| 26 | Pendientes de Gato con Lazo Rojo 18k | 5.50 | Sí | Nuevo | `assets/img/aretes modelo/Pendiente de gato con lazo rojo 18k - 5.50.jpg` |
| 27 | Pendientes de Hojas de Plata | 9.80 | No | — | `assets/img/aretes modelo/Pendiente de hojas de plata en primer plano - 9.80.jpg` |
| 28 | Pendientes de Lazo Dorado con Zafiro Azul 18k | 5.20 | Sí | Destacado | `assets/img/aretes modelo/Pendiente de lazo dorado con zafiro azul 18k - 5.20.jpg` |
| 29 | Pendientes de Nudo de 10 mm | 5.60 | No | — | `assets/img/aretes modelo/Pendiente de nudo de 10 mm - 5.60.jpg` |
| 30 | Pendientes de Nudo Dorado 18k | 5.60 | No | — | `assets/img/aretes modelo/Pendiente de nudo dorado 18k- 5.60.jpg` |
| 31 | Pendientes de Perla y Cristal de 20 mm | 8.80 | Sí | Más vendido | `assets/img/aretes modelo/Pendiente de perla y cristal de 20 mm - 8.80.jpg` |
| 32 | Pendientes de Plata de 30 mm | 7.60 | No | — | `assets/img/aretes modelo/Pendiente de plata con detalle de 30 mm - 7.60.jpg` |
| 33 | Pendientes de Plata de 12 mm | 7.20 | No | — | `assets/img/aretes modelo/Pendiente de plata de 12 mm - 7.20.jpg` |
| 34 | Pendientes Dorados de 8 mm 18k | 4.20 | No | — | `assets/img/aretes modelo/Pendiente dorado con detalle de 8 mm 18k - 4.20.jpg` |
| 35 | Pendientes Dorados de Lujo 18k | 9.80 | Sí | Destacado | `assets/img/aretes modelo/Pendiente dorado de lujo con detalle ampliado 18k - 9.80.jpg` |
| 36 | Pendientes Dorados Lenteja 11 mm 18k | 7.20 | No | — | `assets/img/aretes modelo/Pendiente dorados lenteja 11mm 18k - 7.20.jpg` |
| 37 | Pendientes Multicolor Plateados | 9.80 | No | — | `assets/img/aretes modelo/Pendiente multicolor plateado- 9.80.jpg` |
| 38 | Pendientes Negros de Oro 4 mm | 2.50 | No | — | `assets/img/aretes modelo/Pendiente negro de oro con detalle 4 mm - 2.50.jpg` |
| 39 | Pendientes Rojos Brillantes de 10 mm | 5.80 | No | — | `assets/img/aretes modelo/Pendiente rojo brillante y detalle de 10 mm - 5.80.jpg` |
| 40 | Pendientes Rojos | 5.60 | No | — | `assets/img/aretes modelo/Pendiente rojo con detalle de joyería  - 5.60.jpg` |
| 41 | Pendientes Rosa Bebé | 5.60 | No | — | `assets/img/aretes modelo/Pendiente rosa bebé con detalle de joyería - 5.60.jpg` |
| 42 | Pendientes Rubí | 2.80 | No | — | `assets/img/aretes modelo/Pendiente Rubí - 2.80.jpg` |
| 43 | Pendientes Triangulares de Plata de 6 mm | 3.00 | No | — | `assets/img/aretes modelo/Pendiente triangular de plata de 6 mm - 3.00.jpg` |
| 44 | Pendientes con Rubí y Zirconio de 8 mm 18k | 3.80 | No | — | `assets/img/aretes modelo/Pendientes con rubí y zirconio de 8 mm 18k - 3.80.jpg` |
| 45 | Pendientes de Aro Bicolor | 6.80 | No | — | `assets/img/aretes modelo/Pendientes de aro bicolor en primer plano - 6.80.jpg` |
| 46 | Pendientes de Aro | 9.80 | No | — | `assets/img/aretes modelo/Pendientes de aro con detalle de medidas - 9.80.jpg` |
| 47 | Pendientes de Aro Dorados con Bolita 18k | 5.20 | No | — | `assets/img/aretes modelo/Pendientes de aro dorados con bolita 18k - 5.20.jpg` |
| 48 | Pendientes de Aro Dorados con Corazones 18k | 9.80 | Sí | Más vendido | `assets/img/aretes modelo/Pendientes de aro dorados con corazones 18k - 9.80.jpg` |
| 49 | Pendientes de Aro Dorados de 30 mm 14k | 10.00 | No | — | `assets/img/aretes modelo/Pendientes de aro dorados con detalle de 30 mm 14k - 10.00.jpg` |
| 50 | Pendientes de Aro Dorados con Esfera Colgante | 4.60 | No | — | `assets/img/aretes modelo/Pendientes de aro dorados con esfera colgante - 4.60.jpg` |
| 51 | Pendientes de Aro Dorados Lujo 18k | 9.60 | No | — | `assets/img/aretes modelo/Pendientes de aro dorados lujo 18k- 9.60.jpg` |
| 52 | Pendientes de Aro Dorados Rugosos 18k | 9.20 | No | — | `assets/img/aretes modelo/Pendientes de aro dorados rugoso 18k- 9.20.jpg` |
| 53 | Pendientes de Aro Plateados Minimalistas | 4.20 | No | — | `assets/img/aretes modelo/Pendientes de aro plateado minimalista- 4.20.jpg` |
| 54 | Pendientes de Aro Plateados de 7 mm | 5.00 | No | — | `assets/img/aretes modelo/Pendientes de aro plateados con detalle de 7 mm - 5.0.jpg` |
| 55 | Pendientes de Aro Plateados | 9.60 | No | — | `assets/img/aretes modelo/Pendientes de aro plateados en primer plano - 9.60.jpg` |
| 56 | Pendientes de Aro Plateados | 4.20 | No | — | `assets/img/aretes modelo/Pendientes de aro plateados_ elegancia en detalle - 4.20.jpg` |
| 57 | Pendientes de Búhos Dorados | 5.50 | No | — | `assets/img/aretes modelo/Pendientes de buhos dorados 5.50.jpg` |
| 58 | Pendientes de Cereza Dorados de 10 mm | 6.80 | No | — | `assets/img/aretes modelo/Pendientes de cereza dorados de 10 mm - 6.80.jpg` |
| 59 | Pendientes de Corazón 4 mm | 2.40 | No | — | `assets/img/aretes modelo/Pendientes de corazón 4 mm - 2.40.jpg` |
| 60 | Pendientes de Corazón 7 mm | 3.00 | No | — | `assets/img/aretes modelo/Pendientes de corazón 7 mm - 3.0.jpg` |
| 61 | Pendientes de Corazón Dorado 6 mm 18k | 3.00 | No | — | `assets/img/aretes modelo/Pendientes de corazón dorado 6mm 18k - 3.00.jpg` |
| 62 | Pendientes de Corazón Dorado de 10 mm 18k | 4.20 | No | — | `assets/img/aretes modelo/Pendientes de corazón dorado de 10 mm 18k - 4.20.jpg` |
| 63 | Pendientes de Corazón Dorado de 7 mm 18k | 4.00 | No | — | `assets/img/aretes modelo/Pendientes de corazón dorado de 7 mm 18k - 4.00.jpg` |
| 64 | Pendientes de Corazón Dorado de 8 mm 14k | 3.00 | No | — | `assets/img/aretes modelo/Pendientes de Corazón Dorado de 8 mm 14k - 3.00.jpg` |
| 65 | Pendientes de Corazón Dorados 18k | 4.50 | No | — | `assets/img/aretes modelo/Pendientes de corazón dorados 18k - 4.50.jpg` |
| 66 | Pendientes de Corazón en Plata de 10 mm | 4.20 | No | — | `assets/img/aretes modelo/Pendientes de corazón en plata de 10 mm - 4.20.jpg` |
| 67 | Pendientes de Diamante de 4 mm | 2.50 | No | — | `assets/img/aretes modelo/Pendientes de diamante de 4 mm - 2.50.jpg` |
| 68 | Pendientes de Lazo en Oro 18k | 6.80 | No | — | `assets/img/aretes modelo/Pendientes de lazo en oro 18k - 6.80.jpg` |
| 69 | Pendientes de Mariquita Dorados | 9.80 | No | — | `assets/img/aretes modelo/Pendientes de mariquita dorados con medidas - 9.80.jpg` |
| 70 | Pendientes de Perla Granate 10 mm | 6.80 | No | — | `assets/img/aretes modelo/Pendientes de perla granate 10 mm - 6.80.jpg` |
| 71 | Pendientes de Perla Granate 6 mm | 4.10 | No | — | `assets/img/aretes modelo/Pendientes de perla granate 6 mm - 4.10.jpg` |
| 72 | Pendientes de Perla Lavanda 10 mm | 6.80 | No | — | `assets/img/aretes modelo/Pendientes de perla lavanda 10 mm - 6.80 -.jpg` |
| 73 | Pendientes de Perla Verde Bebé de 6 mm | 4.10 | No | — | `assets/img/aretes modelo/Pendientes de perla verde bebe de 6 mm - 4.10.jpg` |
| 74 | Pendientes de Perlas | 6.80 | No | — | `assets/img/aretes modelo/Pendientes de perlas con detalle ampliado - 6.80.jpg` |
| 75 | Pendientes de Plata con Flor y Perla 20 mm | 8.60 | No | — | `assets/img/aretes modelo/Pendientes de plata con flor y perla - 20mm - 8.60.jpg` |
| 76 | Pendientes de Plata Cuadrados | 3.00 | No | — | `assets/img/aretes modelo/Pendientes de plata cuadrado - 3.00.jpg` |
| 77 | Pendientes de Rubí de 5 mm | 3.60 | No | — | `assets/img/aretes modelo/Pendientes de rubí de 5 mm - 3.60.jpg` |
| 78 | Pendientes Dorados Colgantes 18k | 6.60 | No | — | `assets/img/aretes modelo/Pendientes dorados  colgantes 18k- 6.60.jpg` |
| 79 | Pendientes Dorados 7 mm 18k | 5.40 | No | — | `assets/img/aretes modelo/Pendientes Dorados 7mm 18k - 5.40.jpg` |
| 80 | Pendientes Dorados Colgantes 14k | 6.60 | No | — | `assets/img/aretes modelo/Pendientes dorados colgantes 14k - 6.60.jpg` |
| 81 | Pendientes Dorados Cuadrados 18k | 3.00 | No | — | `assets/img/aretes modelo/Pendientes dorados cuadrados 18k - 3.00.jpg` |
| 82 | Pendientes Dorados de Nudo 18k | 6.60 | No | — | `assets/img/aretes modelo/Pendientes dorados de nudo 18k - 6.60.jpg` |
| 83 | Pendientes Dorados de Nudo 1 mm 18k | 6.60 | No | — | `assets/img/aretes modelo/Pendientes dorados de nudo 1mm 18k - 6.60.jpeg` |
| 84 | Pendientes Dorados Flor de 9 mm 18k | 3.60 | No | — | `assets/img/aretes modelo/Pendientes dorados flor de 9 mm 18k - 3.60.jpg` |
| 85 | Pendientes Estrella 18k | 3.20 | No | — | `assets/img/aretes modelo/Pendientes estrella 18k - 3.20.jpg` |
| 86 | Pendientes Florales de Lujo con Diamantes 18k | 9.20 | Sí | Destacado | `assets/img/aretes modelo/Pendientes florales de lujo con diamantes 18k- 9.20.jpg` |
| 87 | Pendientes Gotas Dorados 18k | 4.80 | No | — | `assets/img/aretes modelo/Pendientes Gotas dorados 18k- 4.80.jpg` |
| 88 | Pendientes Hamsa B 18k | 9.80 | Sí | Nuevo | `assets/img/aretes modelo/Pendientes Hamsa B 18k- 9.80.jpg` |
| 89 | Pendientes Nacarados Celeste Bebé 10 mm | 6.80 | No | — | `assets/img/aretes modelo/Pendientes nacarados celeste bebe 10 mm - 6.80.jpg` |
| 90 | Pendientes Nacarados Celeste Bebé de 8 mm | 4.60 | No | — | `assets/img/aretes modelo/Pendientes nacarados celeste bebe de 8m - 4.60.jpg` |
| 91 | Pendientes Plateados Colgantes | 6.60 | No | — | `assets/img/aretes modelo/Pendientes plateados colgantes- 6.60.jpg` |
| 92 | Pendientes Turquesa de 10 mm | 5.80 | No | — | `assets/img/aretes modelo/Pendientes turquesa de 10 mm - 5.80.jpg` |
| 93 | Pendientes de Perla Blanca con Dorado 18k | 3.50 | No | — | `assets/img/aretes modelo/Perla blanca con dorado 18k - 3.50.jpg` |

### Pulseras (72 productos)

| # | Nombre | Precio (S/) | Destacado | Etiqueta (`tag`) | Imagen |
|---:|---|---:|:---:|---|---|
| 1 | Collar 45 cm | 8.90 | No | — | `assets/img/pulseras/Collar 45 cm - 8.90.jpg` |
| 2 | Collar Argolla Nudo 18k 45 cm | 6.00 | No | — | `assets/img/pulseras/Collar argolla nudo 18k 45cm - 6.00.jpg` |
| 3 | Collar Argolla Nudo Grande 18k 45 cm | 7.80 | No | — | `assets/img/pulseras/Collar argolla nudo grande 18k 45cm - 7.80.jpg` |
| 4 | Collar Argolla Plana Dorada 18k 45x5 cm | 14.20 | Sí | Más vendido | `assets/img/pulseras/Collar argolla plana dorada 18k 45x5 cm - 14.20.jpg` |
| 5 | Collar Argolla Plana Plateada 55 cm | 22.80 | No | — | `assets/img/pulseras/Collar argolla plana plateada 55 cm - 22.80.jpg` |
| 6 | Collar Cadena 18k Nudo 60 mm | 9.30 | No | — | `assets/img/pulseras/Collar cadena 18k nudo 60m - 9.30.jpg` |
| 7 | Collar Cadena Argolla 1x1 45 cm | 6.00 | No | — | `assets/img/pulseras/Collar cadena argolla 1x1 45 cm - 60.00.jpg` |
| 8 | Collar Cadena Argolla Delgada Dorada 45 cm | 6.00 | No | — | `assets/img/pulseras/Collar cadena argolla delgado dorada 45cm - 6.00.jpg` |
| 9 | Collar Cadena Argolla Dorada 45 cm | 5.80 | No | — | `assets/img/pulseras/Collar cadena argolla dorada 45cm - 5.80.jpg` |
| 10 | Collar Cadena Argolla Gruesa 60 cm | 24.90 | Sí | Destacado | `assets/img/pulseras/Collar cadena argolla gruesa 60 cm - 24.90.jpg` |
| 11 | Collar Cadena Argolla Gruesa 60 cm | 23.50 | No | — | `assets/img/pulseras/Collar cadena argolla gruesa 60cm - 23.50.jpg` |
| 12 | Collar Cadena Argolla Menuda 45 cm | 7.80 | No | — | `assets/img/pulseras/Collar cadena argolla menuda 45 cm - 7.80.jpg` |
| 13 | Collar Cadena Argolla Plana 18k 60 cm | 24.90 | No | — | `assets/img/pulseras/Collar cadena argolla plana 18k 60 cm - 24.90.jpg` |
| 14 | Collar Cadena Cúbica Dorada 45 cm | 6.00 | No | — | `assets/img/pulseras/Collar cadena cubica dorada 45cm - 6.00.jpg` |
| 15 | Collar Cadena Cúbica Delgada Dorada 45 cm | 7.20 | No | — | `assets/img/pulseras/Collar cadena cubico delgado dorada 45cm - 7.20.jpg` |
| 16 | Collar Cadena Cúbica Delgada Dorada 50 cm | 6.60 | No | — | `assets/img/pulseras/Collar cadena cubico delgado dorada 50 cm - 6.60.jpg` |
| 17 | Collar Cadena Delgada Argolla 45 cm | 8.20 | No | — | `assets/img/pulseras/Collar cadena delgado argolla 45cm - 8.20.jpg` |
| 18 | Collar Cadena Delgada Dorada 70 cm | 17.00 | No | — | `assets/img/pulseras/Collar cadena delgado dorada 70cm - 17.00.jpg` |
| 19 | Collar Cadena Delicada Dorada 55 cm | 9.10 | No | — | `assets/img/pulseras/Collar cadena delicada dorada 55cm - 9.10.jpg` |
| 20 | Collar Cadena Dorada 18k 60 cm | 24.60 | No | — | `assets/img/pulseras/Collar cadena dorada 18k 60cm - 24.60.jpg` |
| 21 | Collar Cadena Dorada 55 cm | 18.90 | No | — | `assets/img/pulseras/Collar cadena dorada 55 cm - 18.90.jpg` |
| 22 | Collar Cadena Dorada 70 cm | 22.60 | No | — | `assets/img/pulseras/Collar cadena dorada 70cm - 22.60.jpg` |
| 23 | Collar Cadena Dorada Gruesa 55 cm | 17.50 | No | — | `assets/img/pulseras/Collar cadena dorada gruesa 55cm - 17.50.jpg` |
| 24 | Collar Cadena Engranaje Argolla Plana Mixta 70 cm | 28.30 | No | — | `assets/img/pulseras/Collar cadena engranaje argolla plana mixta 70cm - 28.30.jpg` |
| 25 | Collar Cadena Frejol Dorado 60 cm | 9.60 | No | — | `assets/img/pulseras/Collar cadena frejol dorado 60 cm - 9.60.jpg` |
| 26 | Collar Cadena Frejol Menudo 45 cm | 6.20 | No | — | `assets/img/pulseras/Collar cadena frejol menudo 45cm - 6.20.jpg` |
| 27 | Collar Cadena Frejol Menudo 60 cm | 27.10 | No | — | `assets/img/pulseras/Collar cadena frejol menudo 60 cm - 27.10.jpg` |
| 28 | Collar Cadena Frijol Dorado 45 cm | 10.50 | No | — | `assets/img/pulseras/Collar cadena frijol dorado 45 cm - 10.50.jpg` |
| 29 | Collar Cadena Gruesa Plateada 50 cm | 7.10 | No | — | `assets/img/pulseras/Collar cadena gruesa plateada 50cm - 7.10.jpg` |
| 30 | Collar Cadena Gruesa Plateada 55 cm | 24.90 | No | — | `assets/img/pulseras/Collar cadena gruesa plateada 55 cm - 24.90.jpg` |
| 31 | Collar Cadena Medalla Dorada 45 cm | 7.40 | No | — | `assets/img/pulseras/Collar cadena medalla dorada 45cm - 7.40.jpg` |
| 32 | Collar Cadena Menuda Plateada 45 cm | 5.50 | No | — | `assets/img/pulseras/Collar cadena menuda plateada 45cm - 5.50.jpg` |
| 33 | Collar Cadena Mini Esclava Variada 45 cm | 6.20 | No | — | `assets/img/pulseras/Collar cadena mini eslva variada 45cm - 6.20.jpg` |
| 34 | Collar Cadena Mixta Dorada | 12.40 | No | — | `assets/img/pulseras/Collar cadena mixta dorada - 12.40.jpg` |
| 35 | Collar Cadena Nudo Dorado 18k 45 cm | 16.20 | No | — | `assets/img/pulseras/Collar cadena nudo dorado 18k 45cm -16.20.jpg` |
| 36 | Collar Cadena Nudo Fino Dorada 45 cm | 6.30 | No | — | `assets/img/pulseras/Collar cadena nudo fino dorada 45cm - 6.30.jpg` |
| 37 | Collar Cadena Perlita Boya Dorada 50 cm | 13.70 | No | — | `assets/img/pulseras/Collar cadena perlita boya dorada 50 cm - 13.70.jpg` |
| 38 | Collar Cadena Perlitas Doradas 45 cm | 14.50 | Sí | Nuevo | `assets/img/pulseras/Collar cadena perlitas doradas 45cm - 14.50.jpg` |
| 39 | Collar Cadena Plana 45 cm | 13.70 | No | — | `assets/img/pulseras/Collar cadena plana 45cm - 13.70.jpg` |
| 40 | Collar Cadena Plateada 45 cm | 12.40 | No | — | `assets/img/pulseras/Collar cadena plateada 45cm - 12.40.jpg` |
| 41 | Collar Cadena Plateada 60 cm 2 mm | 24.60 | No | — | `assets/img/pulseras/Collar cadena plateada 60cm- 2 cmm - 24.60.jpg` |
| 42 | Collar Cadena Plateada Menuda 60 cm | 24.60 | No | — | `assets/img/pulseras/Collar cadena plateada menuda 60 cm - 24.60.jpg` |
| 43 | Collar Cadena Soga Dorada 65 cm | 8.50 | No | — | `assets/img/pulseras/Collar cadena soga dorada 65cm - 8.50.jpg` |
| 44 | Collar Cadena Argolla Dúo 18k 45 cm | 9.50 | No | — | `assets/img/pulseras/Collar cadenar argolla duo 18k 45cm - 9.50.jpg` |
| 45 | Collar Cadena Argolla Grande Plana 45 cm | 18.60 | No | — | `assets/img/pulseras/Collar cadenar argolla grande plana 45cm - 18.60.jpg` |
| 46 | Collar Delicado Dorado 50 cm | 8.00 | No | — | `assets/img/pulseras/Collar delicado dorado 50cm - 8.00.jpg` |
| 47 | Collar Dorado Clásico Delicado 45 cm | 6.60 | No | — | `assets/img/pulseras/Collar dorado clasico delicado 45cm - 6.60.jpg` |
| 48 | Collar Dorado Menudo 45 cm | 13.50 | No | — | `assets/img/pulseras/Collar dorado menudo 45 cm - 13.50.jpg` |
| 49 | Collar Engranaje Cadena Dorada 60 cm | 23.70 | No | — | `assets/img/pulseras/Collar engranje cadena dorada 60 cm -23.70.jpg` |
| 50 | Collar Plateado Argolla Menuda 60 cm | 17.80 | No | — | `assets/img/pulseras/Collar plateada argolla menuda 60 cm 17.80.jpg` |
| 51 | Collar Plateado 50 cm | 18.30 | No | — | `assets/img/pulseras/Collar plateado 50 cm -18.30.jpg` |
| 52 | Collar Plateado Argolla 70 cm | 18.00 | No | — | `assets/img/pulseras/Collar plateado argolla 70 cm -18.00.jpg` |
| 53 | Esclava Dorada 14x2 cm | 7.20 | No | — | `assets/img/pulseras/Esclava dorada 14x2 cm -7.20.jpg` |
| 54 | Esclava Dorada 19 cm | 12.80 | No | — | `assets/img/pulseras/Esclava dorada 19 cm - 12.80.jpg` |
| 55 | Pulsera Dorada Pareja con Diamante 17+2 cm | 19.20 | Sí | Más vendido | `assets/img/pulseras/Pulsera dorada pareja con diamante 17+2cm - 19.20.jpg` |
| 56 | Pulsera Dorada con Pita Roja 17+3 cm | 9.80 | No | — | `assets/img/pulseras/Pulsera dorado con pita roja 17+3cm - 9.80.jpg` |
| 57 | Pulsera Esclava Beso 14x2 cm | 7.20 | No | — | `assets/img/pulseras/Pulsera esclava beso 14x2 - 7.20.jpg` |
| 58 | Pulsera Esclava con Argolla Plana Dorada 19 cm | 12.80 | Sí | Destacado | `assets/img/pulseras/Pulsera esclava con argolla plana dorada 19cm - 12.80.jpg` |
| 59 | Pulsera Esclava con Pie Blanco 14+2 cm | 7.80 | No | — | `assets/img/pulseras/Pulsera esclava con pie blanco 14+2 cm - 7.80.jpg` |
| 60 | Pulsera Esclava con Pie Rojo 14+2 cm | 7.80 | No | — | `assets/img/pulseras/Pulsera esclava con pie rojo 14+2 cm - 7.80.jpg` |
| 61 | Pulsera Esclava Flor de Colores 18k 14x2 cm | 7.80 | Sí | Nuevo | `assets/img/pulseras/Pulsera Esclava Flor de colores 18k 14x2 cm - 7.80.jpg` |
| 62 | Pulsera Placa Dorada 18k 19 cm | 10.80 | No | — | `assets/img/pulseras/Pulsera placa dorada 18k 19 cm - 10.80.jpg` |
| 63 | Pulsera Roja con Acabados Dorados y Flor Diamante | 6.90 | Sí | Más vendido | `assets/img/pulseras/Pulsera Roja con acabadados dorado y flor diamante - 6.90.jpg` |
| 64 | Puñera Áurea 57 mm | 11.80 | No | — | `assets/img/pulseras/Puñera aurea 57mm - 11.80.jpg` |
| 65 | Puñera Corazón | 19.80 | Sí | Más vendido | `assets/img/pulseras/Puñera corazón - 19.80.jpg` |
| 66 | Puñera Delicada Nudo 18k 60 mm | 15.80 | Sí | Destacado | `assets/img/pulseras/Puñera delicada Nudo 18k 60 mm - 15.80.jpg` |
| 67 | Puñera Dorada 18k | 10.40 | No | — | `assets/img/pulseras/Puñera dorada 18k - 10.40.jpg` |
| 68 | Puñera Dorada Clásica 53 mm | 12.00 | No | — | `assets/img/pulseras/Puñera dorada clasic 53mm - 12.00.jpg` |
| 69 | Puñera Dorada con Corazón Zirconio 60 mm | 18.80 | Sí | Nuevo | `assets/img/pulseras/Puñera dorada con corazon zirconio 60cmm 18.80.jpg` |
| 70 | Puñera Dorada Curve 57-60 mm 18k | 10.40 | No | — | `assets/img/pulseras/Puñera dorado curve 57-60 mm 18k - 10.40.jpg` |
| 71 | Puñera Niña Fresita Dorada 45 mm | 9.60 | No | — | `assets/img/pulseras/Puñera niña fresita dorada 45mm - 9.60.jpg` |
| 72 | Puñera Triple Dorada 18k 62 mm | 15.00 | No | — | `assets/img/pulseras/Puñera triple dorada 18k - 62mm - 15.00.jpg` |

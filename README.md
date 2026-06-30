# Desarrollo de Videojuego

## Descripcion
Este proyecto consiste en una pagina web sobre el desarrollo de videojuegos, desarrollada con HTML, CSS y JavaScript. Muestra las distintas etapas del proceso de creación de un videojuego (idea, diseño, planificación, producción, pruebas y lanzamiento), e incorpora imagenes, videos, un formulario de contacto y funcionalidades interactivas: una tabla de herramientas dinámica con filtro y alta de elementos, un generador de datos curiosos y validación de formulario con manejo de errores.

## La pagina incluye
- Encabezado principal.
- Sistema de navegacion mediante enlaces internos.
- Tabla de herramientas dinámica, generada con JavaScript, con filtro por nivel y buscador.
- Formulario para agregar nuevas herramientas a la tabla.
- Sección de "dato curioso" sobre desarrollo de videojuegos, generado al azar.
- Formulario de consultas con validación de campos y manejo de errores.
- Imagenes y videos relacionados con el desarrollo de videojuegos.
- Diseño adaptable para distintos dispositivos.

## Contenido
- Pagina principal.
- Imagenes.
- Videos.
- Formulario.
- Tablas


## Capturas del proyecto
### Sin estilos CSS
![Captura principal](./img/Captura_sin_CSS.png)

### Con estilos CSS

![Captura principal](./img/Captura1.png)

### Vista responsive

![Captura responsive](./img/captura_responsive.png)

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6)
- DOM (manipulación dinámica de elementos)
- Google Fonts
- Flexbox
- CSS Grid
- Media Queries
- Variables CSS

---

## Funcionalidades de JavaScript implementadas

- **Tabla de herramientas dinámica:** la tabla del "Kit de Herramientas" ya no es estática, se genera mediante JavaScript a partir de un array de objetos.
- **Filtro y búsqueda:** un selector de nivel y un campo de texto permiten filtrar las herramientas en tiempo real (eventos `change` e `input`).
- **Alta de herramientas:** un formulario permite agregar nuevas herramientas al array, que se reflejan al instante en la tabla, con validación de campos vacíos.
- **Dato curioso aleatorio:** un botón muestra, al hacer clic, un dato curioso sobre desarrollo de videojuegos elegido al azar de un array.
- **Validación del formulario de consulta:** se valida que los campos obligatorios no estén vacíos y que el email tenga un formato válido, mostrando los mensajes de error directamente en el formulario.
- **Manejo de excepciones:** se utilizan bloques `try/catch` para controlar errores de validación, tanto en el alta de herramientas como en la verificación del email.
- **Interacción visual:** las filas de la tabla cambian de color al pasar el mouse por encima (`mouseover` / `mouseout`).

---

## Mejoras visuales incorporadas

- Se agrego una paleta de colores en tonos azules para darle una mejor apariencia al sitio.
- Se utilizaron distintas tipografias para diferenciar titulos, botones y textos obtenidas de Google fonts.
- Se incorporaron sombras en contenedores, imagenes y botones para mejorar la presentacion visual.
- Se añadieron efectos hover en botones y enlaces para que la navegacion sea mas interactiva.
- Se aplicaron transiciones suaves en algunos elementos de la pagina.
- Se implemento diseño responsive para que el contenido pueda verse correctamente en pantallas mas pequeñas.
- Se utilizaron bordes redondeados en distintos componentes para lograr una estetica mas agradable.

---

## Repositorio

[https://github.com/Amaya-source/integrador](https://github.com/Amaya-source/integrador)

---

## Autor

Gimenez Lautaro Andres
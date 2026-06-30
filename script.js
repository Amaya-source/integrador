const herramientas = [
  { categoria: "Modelado", nombre: "Blender", nivel: "Básico" },
  { categoria: "Motor de Juego", nombre: "Unity / Unreal Engine", nivel: "Intermedio" },
  { categoria: "Lenguajes", nombre: "C# / C++", nivel: "Avanzado" },
];


const datosCuriosos = [
  "Super Mario Bros. tardó solo unos 4 meses en desarrollarse, mientras que muchos juegos actuales llevan años.",
  "El término 'easter egg' en videojuegos se popularizó después de que Atari escondiera un mensaje oculto en Adventure (1979).",
  "El primer videojuego de la historia, Tennis for Two, se creó en 1958 usando un osciloscopio.",
  "Pac-Man fue pensado para atraer a un público más amplio en una época dominada por juegos de disparos y carreras.",
  "Unreal Engine debe su nombre al juego Unreal de 1998, donde se usó por primera vez.",
  "Minecraft fue desarrollado originalmente por una sola persona antes de convertirse en un fenómeno mundial.",
  "Las fases Alpha y Beta no solo buscan bugs: también sirven para ajustar el balance de dificultad.",
  "Godot Engine es completamente gratuito y de código abierto, a diferencia de Unity y Unreal Engine.",
];


const tablaBody = document.getElementById("tabla-herramientas-body");
const filtroNivel = document.getElementById("filtro-nivel");
const buscarInput = document.getElementById("buscar-herramienta");

const formAgregar = document.getElementById("form-agregar-herramienta");
const mensajeAgregar = document.getElementById("mensaje-agregar");

const btnDatoCurioso = document.getElementById("btn-dato-curioso");
const datoCuriosoTexto = document.getElementById("dato-curioso-texto");

const formConsulta = document.getElementById("form-consulta");
const mensajeFormulario = document.getElementById("mensaje-formulario");


function renderHerramientas(lista) {
  tablaBody.innerHTML = "";

  if (lista.length === 0) {
    const filaVacia = document.createElement("tr");
    const tdVacio = document.createElement("td");
    tdVacio.colSpan = 3;
    tdVacio.textContent = "No se encontraron herramientas.";
    filaVacia.appendChild(tdVacio);
    tablaBody.appendChild(filaVacia);
    return;
  }

  lista.forEach((item) => {
    const fila = document.createElement("tr");

    const tdCategoria = document.createElement("td");
    tdCategoria.textContent = item.categoria;

    const tdNombre = document.createElement("td");
    tdNombre.textContent = item.nombre;

    const tdNivel = document.createElement("td");
    tdNivel.textContent = item.nivel;

    fila.appendChild(tdCategoria);
    fila.appendChild(tdNombre);
    fila.appendChild(tdNivel);

    fila.addEventListener("mouseover", () => {
      fila.style.backgroundColor = "#cdeaff";
    });
    fila.addEventListener("mouseout", () => {
      fila.style.backgroundColor = "";
    });

    tablaBody.appendChild(fila);
  });
}


function filtrarHerramientas() {
  const nivelSeleccionado = filtroNivel.value;
  const textoBuscado = buscarInput.value.trim().toLowerCase();

  const resultado = herramientas.filter((item) => {
    const coincideNivel = nivelSeleccionado === "todos" || item.nivel === nivelSeleccionado;
    const coincideTexto =
      item.nombre.toLowerCase().includes(textoBuscado) ||
      item.categoria.toLowerCase().includes(textoBuscado);
    return coincideNivel && coincideTexto;
  });

  renderHerramientas(resultado);
}


filtroNivel.addEventListener("change", filtrarHerramientas);
buscarInput.addEventListener("input", filtrarHerramientas);


function agregarHerramienta(evento) {
  evento.preventDefault();

  const categoriaInput = document.getElementById("nueva-categoria");
  const nombreInput = document.getElementById("nueva-herramienta");
  const nivelInput = document.getElementById("nuevo-nivel");

  try {
    if (categoriaInput.value.trim() === "" || nombreInput.value.trim() === "") {
      throw new Error("Completá la categoría y el nombre de la herramienta.");
    }

    herramientas.push({
      categoria: categoriaInput.value.trim(),
      nombre: nombreInput.value.trim(),
      nivel: nivelInput.value,
    });

    filtrarHerramientas(); 

    mensajeAgregar.textContent = "Herramienta agregada correctamente.";
    mensajeAgregar.classList.remove("mensaje-error");
    mensajeAgregar.classList.add("mensaje-exito");

    formAgregar.reset();
  } catch (error) {
    mensajeAgregar.textContent = error.message;
    mensajeAgregar.classList.remove("mensaje-exito");
    mensajeAgregar.classList.add("mensaje-error");
  }
}

formAgregar.addEventListener("submit", agregarHerramienta);


function mostrarDatoCurioso() {
  const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
  datoCuriosoTexto.textContent = datosCuriosos[indiceAleatorio];
}

btnDatoCurioso.addEventListener("click", mostrarDatoCurioso);


function mostrarError(idSpan, mensaje) {
  const span = document.getElementById(idSpan);
  span.textContent = mensaje;
}

function limpiarErrores() {
  ["error-fname", "error-gmail", "error-comentario"].forEach((id) =>
    mostrarError(id, "")
  );
}

function validarFormularioConsulta(evento) {
  evento.preventDefault();
  limpiarErrores();

  const nombre = document.getElementById("fname");
  const gmail = document.getElementById("gmail");
  const comentario = document.getElementById("comentario");

  let formularioValido = true;

  if (nombre.value.trim() === "") {
    mostrarError("error-fname", "El nombre es obligatorio.");
    formularioValido = false;
  }

  if (comentario.value.trim() === "") {
    mostrarError("error-comentario", "Contanos tu consulta antes de enviar.");
    formularioValido = false;
  }

  try {
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail.value.trim());
    if (!emailValido) {
      throw new Error("Ingresá un email válido.");
    }
  } catch (error) {
    mostrarError("error-gmail", error.message);
    formularioValido = false;
  }

  if (formularioValido) {
    mensajeFormulario.textContent = `¡Gracias ${nombre.value}! Tu consulta fue enviada correctamente.`;
    mensajeFormulario.classList.remove("mensaje-error");
    mensajeFormulario.classList.add("mensaje-exito");
    formConsulta.reset();
  } else {
    mensajeFormulario.textContent = "Revisá los campos marcados antes de enviar.";
    mensajeFormulario.classList.remove("mensaje-exito");
    mensajeFormulario.classList.add("mensaje-error");
  }
}

formConsulta.addEventListener("submit", validarFormularioConsulta);


renderHerramientas(herramientas);

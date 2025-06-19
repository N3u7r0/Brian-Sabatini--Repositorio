//guardo las rutas de las imagenes en una variable.
let skillHtml =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/html-5.png?raw=true";
let skillCss =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/css.png?raw=true";
let skillJavaScript =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/js.png?raw=true";
let skillSass =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/Sass.png?raw=true";
let skillReact =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/React.png?raw=true";
let skillBootstrap =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/Bootstrap.png?raw=true";
let skillChackra =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/chakraUI.png?raw=true";
let skillFirebase =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/firesbase.png?raw=true";
let skillGitHub =
  "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/github.png?raw=true";
let skillnone = null;

//construtor porfolio.
class Porfolio {
  constructor(
    titulo,
    descripcion,
    imagen,
    linkRepo,
    linkApp,
    skillA,
    skillB,
    skillC,
    skillD
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.linkRepo = linkRepo;
    this.linkApp = linkApp;
    this.skillA = skillA;
    this.skillB = skillB;
    this.skillC = skillC;
    this.skillD = skillD;
  }
}

//creo un array de objetos para recorre los porfolios.
let proyectos = [
  new Porfolio(
    "8-Bits",
    "App destinada a guardar o eliminar Roms y emuladores de consolas retro.estilos css propios ",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/8bits.jpg?raw=true",
    "https://github.com/N3u7r0/8beats-reactJS",
    "https://8bitsroms.web.app/",
    skillReact,
    skillJavaScript,
    skillSass,
    skillFirebase
  ),
  new Porfolio(
    "Guitar-on",
    "E-comerce de react de instuementos musicales con un carrito de compras.",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/Guitar-on.jpg?raw=true",
    "https://github.com/N3u7r0/guitarOn",
    "https://guitaron-95a31.web.app/",
    skillReact,
    skillChackra,
    skillJavaScript,

    skillFirebase
  ),
  new Porfolio(
    "ToDo-List",
    "Un todo list full responsive que guarda las tareas en el storage y contiene una calculadora. ",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/to-DoList.jpg?raw=true",
    "https://github.com/N3u7r0/8beats-reactJS",
    "https://todolist-brian.web.app/",
    skillHtml,
    skillCss,
    skillReact
  ),
  new Porfolio(
    "checkIn Js",
    "app de javascript vanila para guardar datos en el local storage.",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/checkIn-Js.jpg?raw=true",
    "https://github.com/N3u7r0/MarketJs",
    "link 1",
    skillHtml,
    skillBootstrap,
    skillJavaScript,
    skillnone
  ),
  new Porfolio(
    "Curriculum Vitae",
    "mi curriculum vitae echo con estilos propios",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/cv.jpg?raw=true",
    "https://github.com/N3u7r0/CurriculumVitae",
    "https://n3u7r0.github.io/CurriculumVitae",
    skillHtml,
    skillCss,
    skillJavaScript,
    skillnone
  ),
  new Porfolio(
    "Repositorio",
    "Portfolio con estilos propios, entra al repo para ver su estructura!",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/Porfolio.jpg?raw=true",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio",
    "https://n3u7r0.github.io/Brian-Sabatini--Repositorio/",
    skillHtml,
    skillCss,
    skillJavaScript,
    skillnone
  ),
];

//imprimo los porfolios con un .map
proyectos.map((proyecto) => {
  document.getElementsByClassName("contenedorPorfolio")[0].innerHTML += `

  <div class="porfolioCard">
  <div class="linksCard">
        <a class="linkApp" href="${proyecto.linkApp}">
        </a>
        <a  class="linkRepo" href="${proyecto.linkRepo}">
        </a>
  </div>
      <img  src="${proyecto.imagen}" alt="${proyecto.titulo}">
      <h3>${proyecto.titulo}</h3>
      <p>${proyecto.descripcion}</p>

      <div class="skills">
        ${
          proyecto.skillA
            ? `<img src="${proyecto.skillA}" alt="Skill ICONO ">`
            : `<span></span>`
        }
        ${
          proyecto.skillB
            ? `<img src="${proyecto.skillB}" alt="Skill ICONO ">`
            : `<span></span>`
        }
        ${
          proyecto.skillC
            ? `<img src="${proyecto.skillC}" alt="Skill ICONO ">`
            : `<span></span>`
        }
        ${
          proyecto.skillD
            ? `<img src="${proyecto.skillD}" alt="Skill ICONO ">`
            : `<span></span>`
        }
      </div>
       
  </div>
  `;
});

class Skills {
  constructor(titulo, imagen, habilidades) {
    this.titulo = titulo;
    this.imagen = imagen;
    this.habilidades = habilidades; // Array con habilidades específicas
  }
}

let conjuntoSkills = [
  new Skills("Html-5", skillHtml, ["Etiquetas", "Semántica", "Accesibilidad"]),
  new Skills("Css", skillCss, [
    "Flexbox",
    "Grid",
    "Animaciones",
    " responsive",
  ]),
  new Skills("JavaScript", skillJavaScript, ["ES6+", "DOM", "Promesas"]),
  new Skills("Sass", skillSass, ["Variables", "Mixins", "Anidamiento"]),
  new Skills("React js", skillReact, [
    "Componentes",
    "Hooks",
    "Estados, customHooks",
  ]),
  new Skills("Bootstrap", skillBootstrap, [
    "Grid",
    "Utilidades",
    "Componentes",
  ]),
  new Skills("ChakraUI", skillChackra, [
    "Tematización",
    "Componentes",
    "Accesibilidad",
  ]),
  new Skills("Firebase", skillFirebase, ["dataBase", "storage", "Hosting"]),
  new Skills("Github", skillGitHub, ["Repositorios", "github-pages"]),
];

conjuntoSkills.map((skill) => {
  let habilidadesHTML = skill.habilidades
    .map((habilidad) => `<li class="liSkillsHover">${habilidad}</li>`)
    .join(""); // Genera los <li> para cada habilidad del skills

  document.getElementsByClassName("contenedorSkills")[0].innerHTML += `
    <li>
      <img src="${skill.imagen}" alt="${skill.titulo}">
      <ul class="ulSkillsHover">
        ${habilidadesHTML} <!-- inprime las habilidades dinamicamente -->
      </ul>
      <p>${skill.titulo}</p>
    </li>
  `;
});

// Seleccionar todos los elementos con la clase "btnTelefono"
let botonesTelefono = document.getElementsByClassName("btnTelefono");

// Iterar sobre cada botón y agregar un event listener
Array.from(botonesTelefono).forEach((btn) => {
  btn.addEventListener("click", function () {
    const numeroCelular = "+541125315506"; // constante que guarda el telefono para el btn.

    // Copiar el número al portapapeles
    navigator.clipboard
      .writeText(numeroCelular)
      .then(() => {
        console.log("Número copiado al portapapeles:", numeroCelular);

        // Llamar al número usando el esquema tel
        window.location.href = `tel:${numeroCelular}`;
      })
      .catch((err) => {
        console.error("Error al copiar el número:", err);
      });
  });
});

// Ir al formulario (scroll hasta el final del contenedor con clase "contenedorPrincipal") (fgentileza de copilot)
document.getElementById("btnMailID").addEventListener("click", function () {
  let contenedor = document.querySelector(".contenedorPrincipal"); // Seleccionar el contenedor con la clase "contenedorPrincipal"
  if (contenedor) {
    contenedor.scrollTo({
      top: contenedor.scrollHeight, // Altura total del contenedor
      behavior: "smooth", // Desplazamiento suave
    });
  } else {
    console.error(
      "El contenedor con la clase 'contenedorPrincipal' no existe."
    );
  }
});

// Obtener el elemento input oculto
let hiddenInput = document.getElementById("hiddenInput");

// Establecer su valor al URL actual
if (hiddenInput) {
  hiddenInput.value = window.location.href;
  console.info("URL actual:", hiddenInput.value);
} else {
  console.error("El elemento con ID 'hiddenInput' no existe.");
}

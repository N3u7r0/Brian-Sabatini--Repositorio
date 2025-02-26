//guardo las rutas de las imagenes en una variable.
let skillHtml = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/html-5.png?raw=true";
let skillCss = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/css.png?raw=true";
let skillJavaScript = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/js.png?raw=true";
let skillSass = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/Sass.png?raw=true";
let skillReact = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/React.png?raw=true";
let skillBootstrap = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/Bootstrap.png?raw=true";
let skillChackra = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/chakraUI.png?raw=true";
let skillFirebase = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/firesbase.png?raw=true";
let skillGitHub = "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/iconos/github.png?raw=true";
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
    "App react destinada a guardar Roms y emuladores de video juegos",
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
    "E- comerce de react de instuementos musicales",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/Guitar-on.jpg?raw=true",
    "https://github.com/N3u7r0/guitarOn",
    "https://guitaron-95a31.web.app/",
    skillReact,
    skillChackra,
    skillJavaScript,
    skillnone
  ),
  new Porfolio(
    "checkIn Js",
    "app de javascript vanila",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/checkIn-Js.jpg?raw=true",
    "https://github.com/N3u7r0/MarketJs",
    "link 1",
    skillHtml,
    skillBootstrap,
    skillJavaScript,
    skillnone
  ),
  new Porfolio(
    "calculadora",
    "Simple calculadora de javascript",
    "https://github.com/N3u7r0/Brian-Sabatini--Repositorio/blob/master/images/calculadora.jpg?raw=true",
    "https://github.com/N3u7r0/calculadora",
    "https://n3u7r0.github.io/calculadora/",
    skillHtml,
    skillCss,
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
    "Este portfolio echo con estilos propios, entra al repo para ver su estructura!",
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

  <div class="proyecto">
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

//constructor skills.
class Skills {
  constructor(titulo, imagen) {
    this.titulo = titulo;
    this.imagen = imagen;
  }
}

let conjuntoSkills = [
  new Skills("Html-5", skillHtml),
  new Skills("Css", skillCss),
  new Skills("JavaScript", skillJavaScript),
  new Skills("Sass", skillSass),
  new Skills("React js", skillReact),
  new Skills("Bootstrap", skillBootstrap),
  new Skills("ChakraUI", skillChackra),
  new Skills("Firebase", skillFirebase),
  new Skills("Github", skillGitHub),
];

conjuntoSkills.map((skill) => {
  document.getElementsByClassName("contenedorSkills")[0].innerHTML += `
  <li>
    <img src="${skill.imagen}" alt="${skill.titulo} ">
    <ul class="ulSkillsHover" >
      <li class="liSkillsHover">asdad</li>
      <li class="liSkillsHover">tester</li>
      <li class="liSkillsHover">lorem</li>
      <li class="liSkillsHover">esas</li>
    </ul>
     <p>${skill.titulo}</p>
  </li>
  `;
});

//llamar al telefono celular.
document.getElementsByClassName("btnTelefono").addEventListener("click", function () {
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
// ir al formulario
document.getElementsByClassID("btnMailID").addEventListener("click", function () {
  window.scrollTo({ buttom: document.body.scrollHeight, behavior: "smooth" });
});


// Obtener el elemento input oculto
let hiddenInput = document.getElementById("hiddenInput");

// Establecer su valor al URL actual
hiddenInput.value = window.location.href;

console.info("URL actual:", hiddenInput.value);
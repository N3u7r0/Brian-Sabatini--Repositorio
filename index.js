class Porfolio {
  constructor(
    titulo,
    descripcion,
    imagen,
    linkRepo,
    linkApp,
    skillA,
    skillB,
    skillC
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.linkRepo = linkRepo;
    this.linkApp = linkApp;
    this.skillA = skillA;
    this.skillB = skillB;
    this.skillC = skillC;
  }
}

let skillHtml = "./iconos/html-5.png";
let skillCss = "./iconos/css.png";
let skillJavaScript = "./iconos/js.png";
let skillSass = "./iconos/sass.png";
let skillReact = "./iconos/react.png";
let skillBootstrap = "./iconos/Bootstrap.png";
let skillChackra = "./iconos/chakraUI.png";

let proyectos = [
  new Porfolio(
    "8-Bits",
    "App react destinada a guardar Roms y emuladores de video juegos",
    "./images/8bits.jpg",
    "https://github.com/N3u7r0/8bits-reactJs",
    "link 1",
    skillReact,
    skillJavaScript,
    skillSass
  ),
  new Porfolio(
    "Guitar-on",
    "E- comerce de react de instuementos musicales",
    "./images/Guitar-on.jpg",
    "https://github.com/N3u7r0/guitarOn",
    "link 1",
    skillReact,
    skillChackra,
    skillJavaScript
  ),
  new Porfolio(
    "checkIn Js",
    "app de javascript vanila",
    "./images/checkin-js.jpg",
    "https://github.com/N3u7r0/MarketJs",
    "link 1",
    skillHtml,
    skillCss,
    skillJavaScript
  ),
  new Porfolio(
    "calculadora",
    "Simple calculadora de javascript",
    "./images/calculadora.jpg",
    "https://github.com/N3u7r0/calculadora",
    "link 1",
    skillHtml,
    skillCss,
    skillJavaScript
  ),
  new Porfolio(
    "Curriculum Vitae",
    "mi curriculum vitae echo con estilos propios",
    "./images/cv.jpg",
    "https://github.com/N3u7r0/CurriculumVitae",
    "link 1",
    skillHtml,
    skillCss,
    skillJavaScript
  ),
];

proyectos.forEach((proyecto) => {
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
            <img  src="${proyecto.skillA}">
           <img  src="${proyecto.skillB}">
           <img  src="${proyecto.skillC}">
        </div>
         
    </div>
    `;
});

//llamar al telefono
document.getElementById("callButton").addEventListener("click", function () {
  const phoneNumber = "+541125315506"; // Número de teléfono que quieres copiar

  // Copiar el número al portapapeles
  navigator.clipboard
    .writeText(phoneNumber)
    .then(() => {
      console.log("Número copiado al portapapeles:", phoneNumber);

      // Llamar al número usando el esquema "tel:"
      window.location.href = `tel:${phoneNumber}`;
    })
    .catch((err) => {
      console.error("Error al copiar el número:", err);
    });
});
// ir al formulario
document.getElementById("scrollButton").addEventListener("click", function () {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

// Obtener el elemento input oculto
let hiddenInput = document.getElementById('hiddenInput');

// Establecer su valor al URL actual
hiddenInput.value = window.location.href;


console.log(hiddenInput);

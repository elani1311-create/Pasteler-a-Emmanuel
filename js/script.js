let lastScroll = 0;
const navbar = document.getElementById("navbar");
const menuElement = document.getElementById("menu");

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    if (currentScroll > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (currentScroll > lastScroll && currentScroll > 120) {
        navbar.classList.add("hidden");
    } else if (currentScroll < lastScroll - 5) {
        navbar.classList.remove("hidden");
    }

    lastScroll = currentScroll;
});

document.querySelectorAll('.dropdown-toggle').forEach(function (el) {
    el.addEventListener('click', function (e) {
        if (this.classList.contains('show')) {
            window.location = this.getAttribute('href');
        }
    });
});

document.querySelectorAll('.dropdown-item').forEach(function (link) {
    link.addEventListener('click', function () {
        const bsCollapse = bootstrap.Collapse.getInstance(menuElement);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});


// DETALLE DE LOS PRODUCTOS
if(document.getElementById('titulo')){

  const params = new URLSearchParams(window.location.search);
  const producto = params.get('producto');

  const data = {
    chocolate: {
      titulo: "Torta de Chocolate",
      precio: "Bs. 120",
      descripcion: "Torta cubierta de chocolate con crema suave y decorada con cerezas.",
      porciones: "15 porciones",
      imagen: "img_PWIA/1.png"
    },
    durazno: {
      titulo: "Tarta de durazno con gelatina",
      precio: "Bs. 110",
      descripcion: "Un tipo de pastel de forma redonda compuesta por una capa de masa dulce cocida al horno, rellenadas y decoradas con crema pastelera, fruta (durazno) y gelatina.",
      porciones: "15 porciones",
      imagen: "img_PWIA/2.png"
    },
    frutilla: {
      titulo: "Torta de Frutilla",
      precio: "Bs. 100",
      descripcion: "Torta con sabor a vainilla y frutilla, relleno con gelatina, crema y trozos de durazno, esta cubierta con crema de merengue y frutilla con chispas de chocolate.",
      porciones: "15 porciones",
      imagen: "img_PWIA/3.png"
    },
    dona: {
      titulo: "Dona",
      precio: "Bs. 5",
      descripcion: "Pieza esponjosa de repostería en forma de rosca , frita y cubierta de chocolate con coco rallado.",
      porciones: "1 porción",
      imagen: "img_PWIA/4.png"
    },
    alfajorchocolate: {
      titulo: "Alfajor de Chocolate",
      precio: "Bs. 6",
      descripcion: "Un tipo de postre de pastel de chocolate, viene en una porción redonda de 6 pulgadas de ancho e incluye coco alrededor del borde.",
      porciones: "1 porción",
      imagen: "img_PWIA/5.png"
    },
    alfajor: {
      titulo: "Alfajor",
      precio: "Bs. 4",
      descripcion: "Tipo de postre de pastel de vainilla, viene en una porción redonda que incluye coco alrededor del borde.",
      porciones: "1 porción",
      imagen: "img_PWIA/6.png"
    },
    rollo: {
      titulo: "Rollo de Queso",
      precio: "Bs. 4",
      descripcion: "Una rebanada de pan con un relleno de queso rallado.",
      porciones: "1 porción",
      imagen: "img_PWIA/7.png"
    },
    vaso: {
      titulo: "Pastel en Vaso",
      precio: "Bs. 3",
      descripcion: "Postre en vaso mediano con gelatina, bizcocho, crema chantilly y chispas dulces.",
      porciones: "1 porción",
      imagen: "img_PWIA/8.png"
    },
    tartaleta: {
      titulo: "Tartaleta de Crema",
      precio: "Bs. 1",
      descripcion: "Tartaleta que no empalaga, es muy fresca y liviana, rellena de crema pastelera de diferentes sabores.",
      porciones: "1 porción",
      imagen: "img_PWIA/9.png"
    },
    cupcake: {
      titulo: "Cupcake",
      precio: "Bs. 2,50",
      descripcion: "Pieza esponjosa de repostería, de sabor dulce a chocolate, relleno con manjar de fresa y crema pastelera de chocolate con chispas te chocolate y trozos de galleta oreo.",
      porciones: "1 porción",
      imagen: "img_PWIA/10.png"
    },
    brownie: {
      titulo: "Brownie",
      precio: "Bs. 2",
      descripcion: "Bizcocho de chocolate pequeño, de color marrón oscuro, cubierto con jarabe espeso de chocolate y crema pastelera.",
      porciones: "1 porción",
      imagen: "img_PWIA/11.png"
    },
    brazo: {
      titulo: "Brazo Gitano con Dulce de Leche",
      precio: "Bs. 4",
      descripcion: "Postre en forma de cilindro, con  relleno de dulce de leche y decorado con azúcar impalpable.",
      porciones: "1 porción",
      imagen: "img_PWIA/12.png"
    },
    pay: {
      titulo: "Pay o Pie de Manzana",
      precio: "Bs. 6",
      descripcion: " Tipo de pastel redondo con pasas en su interior, que lleva arriba unas tiras enlazadas de masa con sabor a manzana.",
      porciones: "1 porción",
      imagen: "img_PWIA/13.png"
    },
    volteado: {
      titulo: "Volteado de Piña",
      precio: "Bs. 7",
      descripcion: "Pastel invertido bastante húmedo y jugoso que se baña en un caramelo con sabor a piña, decorado con cerezas.",
      porciones: "1 porción",
      imagen: "img_PWIA/14.png"
    },
    mini: {
      titulo: "Mini Pastel",
      precio: "Bs. 1",
      descripcion: "Postre mediano en forma cuadra, bañado  en 3 leches con majar en el fondo, cubierto con merengue, chispas de chocolate y jalea roja.",
      porciones: "1 porción",
      imagen: "img_PWIA/15.png"
    },
  };

  const p = data[producto];

  if(p){
    document.getElementById('titulo').textContent = p.titulo;
    document.getElementById('precio').textContent = p.precio;
    document.getElementById('descripcion').textContent = p.descripcion;
    document.getElementById('porciones').textContent = p.porciones;
    document.getElementById('imagen').src = p.imagen;

    document.getElementById('whatsapp').href =
      "https://wa.me/59167097369?text=" + 
      encodeURIComponent("Hola, me interesa la " + p.titulo + " (" + p.porciones + "). ¿Está disponible?");
  }

}
/* =========================================
   ESCALIOTECH V2
   CONFIGURACIÓN
   ========================================= */


/*
   ================================
   DATOS DE ESCALIOTECH
   ================================
*/

const CONFIG = {

  /*
    WhatsApp de EscalioTech.

    Formato:
    52 + número

    SIN:
    +
    espacios
    guiones
  */

  whatsapp: "523319057803",


  /*
    Redes sociales
  */

  instagram:
    "https://instagram.com/escaliotech",

  facebook:
    "https://facebook.com/escaliotech",

  tiktok:
    "https://tiktok.com/@escaliotech"

};


/*
   =========================================
   MENSAJES PERSONALIZADOS DE WHATSAPP
   =========================================
*/

const WHATSAPP_MESSAGES = {

  general:
    "Hola EscalioTech 👋 Me interesa conocer sus soluciones digitales para mi negocio.",

  nfc:
    "Hola EscalioTech 👋 Me interesa conocer las tarjetas NFC para mi negocio. ¿Me pueden compartir información sobre los paquetes disponibles?",

  web:
    "Hola EscalioTech 👋 Me interesa una página web para mi negocio. Me gustaría conocer sus opciones y paquetes.",

  automation:
    "Hola EscalioTech 👋 Me interesa conocer sus soluciones de automatización para mi negocio. ¿Podrían orientarme?",

  custom:
    "Hola EscalioTech 👋 Tengo una idea/proyecto y me gustaría conocer si pueden desarrollar una solución tecnológica personalizada para mi negocio.",

  package:
    "Hola EscalioTech 👋 Me interesa conocer sus paquetes de soluciones digitales. ¿Me pueden compartir las opciones disponibles?"
};


/*
   =========================================
   CREAR ENLACES DE WHATSAPP
   =========================================
*/

document
  .querySelectorAll("[data-whatsapp]")
  .forEach((link) => {

    const number =
      CONFIG.whatsapp.replace(/\D/g, "");

    const service =
      link.dataset.whatsapp || "general";

    const message =
      WHATSAPP_MESSAGES[service] ||
      WHATSAPP_MESSAGES.general;

    if (number) {

      link.href =
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

      link.target = "_blank";

      link.rel = "noopener noreferrer";

    }

  });


/*
   =========================================
   REDES SOCIALES
   =========================================
*/

document
  .querySelectorAll("[data-instagram]")
  .forEach((link) => {

    link.href =
      CONFIG.instagram;

    link.target = "_blank";

    link.rel =
      "noopener noreferrer";

  });


document
  .querySelectorAll("[data-facebook]")
  .forEach((link) => {

    link.href =
      CONFIG.facebook;

    link.target = "_blank";

    link.rel =
      "noopener noreferrer";

  });


document
  .querySelectorAll("[data-tiktok]")
  .forEach((link) => {

    link.href =
      CONFIG.tiktok;

    link.target = "_blank";

    link.rel =
      "noopener noreferrer";

  });


/*
   =========================================
   AÑO AUTOMÁTICO
   =========================================
*/

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/*
   =========================================
   MENÚ MÓVIL
   =========================================
*/

const menuToggle =
  document.querySelector(".menu-toggle");

const nav =
  document.querySelector(".nav");


menuToggle?.addEventListener(
  "click",
  () => {

    const isOpen =
      nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuToggle.textContent =
      isOpen ? "✕" : "☰";

  }
);


/*
   Cerrar menú al tocar un enlace
*/

document
  .querySelectorAll(".nav a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove("open");

        menuToggle?.setAttribute(
          "aria-expanded",
          "false"
        );

        if (menuToggle) {
          menuToggle.textContent = "☰";
        }

      }
    );

  });


/*
   =========================================
   ANIMACIONES AL HACER SCROLL
   =========================================
*/

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });


/*
   =========================================
   EVITAR PARPADEO DE ENLACES VACÍOS
   =========================================
*/

document
  .querySelectorAll('a[href="#"]')
  .forEach((link) => {

    link.addEventListener(
      "click",
      (event) => {

        if (
          link.hasAttribute("data-whatsapp")
        ) {
          return;
        }

        event.preventDefault();

      }
    );

  });

/* =====================================================
   ESCALIOTECH V4
   JavaScript
===================================================== */


/* =====================================================
   CONFIGURACIÓN
===================================================== */

const CONFIG = {

  whatsapp: "523319057803",

  instagram:
    "https://instagram.com/escaliotech",

  facebook:
    "https://facebook.com/escaliotech"

};


/* =====================================================
   MENSAJES DE WHATSAPP
===================================================== */

const whatsappMessages = {

  general:
    "Hola, EscalioTech. Me interesa conocer sus soluciones tecnológicas para mi negocio.",

  nfc:
    "Hola, EscalioTech. Me interesa conocer los paquetes y opciones de sus placas NFC + QR para mi negocio.",

  personalizada:
    "Hola, EscalioTech. Me interesa una placa NFC personalizada con el logo y la identidad de mi negocio.",

  web:
    "Hola, EscalioTech. Me interesa crear una página web profesional para mi negocio.",

  automatizacion:
    "Hola, EscalioTech. Me interesa conocer las soluciones de automatización que pueden implementar en mi negocio."

};


/* =====================================================
   CREAR LINK WHATSAPP
===================================================== */

function createWhatsAppLink(type = "general") {

  const message =
    whatsappMessages[type] ||
    whatsappMessages.general;

  return (
    "https://wa.me/" +
    CONFIG.whatsapp +
    "?text=" +
    encodeURIComponent(message)
  );

}


/* =====================================================
   ASIGNAR WHATSAPP A BOTONES
===================================================== */

document
  .querySelectorAll("[data-whatsapp]")
  .forEach(button => {

    const type =
      button.dataset.whatsapp ||
      "general";

    button.href =
      createWhatsAppLink(type);

    button.target =
      "_blank";

    button.rel =
      "noopener";

  });


/* =====================================================
   MENÚ MÓVIL
===================================================== */

const menuToggle =
  document.querySelector(".menu-toggle");

const navigation =
  document.querySelector(".navigation");


if (menuToggle && navigation) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        navigation.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

    }
  );


  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          navigation.classList.remove(
            "open"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


/* =====================================================
   GALERÍA DE PRODUCTO
===================================================== */

const mainProductImage =
  document.querySelector(
    "#mainProductImage"
  );

const thumbnails =
  document.querySelectorAll(
    ".thumbnail"
  );


thumbnails.forEach(thumbnail => {

  thumbnail.addEventListener(
    "click",
    () => {

      const image =
        thumbnail.dataset.image;

      const alt =
        thumbnail.dataset.alt ||
        "Producto NFC EscalioTech";


      if (mainProductImage) {

        mainProductImage.src =
          image;

        mainProductImage.alt =
          alt;

      }


      thumbnails.forEach(item => {

        item.classList.remove(
          "active"
        );

      });


      thumbnail.classList.add(
        "active"
      );

    }
  );

});


/* =====================================================
   MODAL DE IMÁGENES
===================================================== */

const imageModal =
  document.querySelector(
    "#imageModal"
  );

const modalImage =
  document.querySelector(
    "#modalImage"
  );

const modalClose =
  document.querySelector(
    "#modalClose"
  );

const expandImage =
  document.querySelector(
    "#expandImage"
  );


function openImageModal() {

  if (!imageModal || !modalImage) {
    return;
  }


  modalImage.src =
    mainProductImage.src;

  modalImage.alt =
    mainProductImage.alt;


  imageModal.classList.add(
    "open"
  );

  imageModal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


function closeImageModal() {

  if (!imageModal) {
    return;
  }


  imageModal.classList.remove(
    "open"
  );

  imageModal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


if (expandImage) {

  expandImage.addEventListener(
    "click",
    openImageModal
  );

}


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closeImageModal
  );

}


if (imageModal) {

  imageModal.addEventListener(
    "click",
    event => {

      if (
        event.target === imageModal
      ) {

        closeImageModal();

      }

    }
  );

}


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeImageModal();

    }

  }
);


/* =====================================================
   FAQ
===================================================== */

const faqItems =
  document.querySelectorAll(
    ".faq-item"
  );


faqItems.forEach(item => {

  const question =
    item.querySelector(
      ".faq-question"
    );

  const answer =
    item.querySelector(
      ".faq-answer"
    );


  question.addEventListener(
    "click",
    () => {

      const alreadyOpen =
        item.classList.contains(
          "open"
        );


      faqItems.forEach(other => {

        other.classList.remove(
          "open"
        );

        const otherAnswer =
          other.querySelector(
            ".faq-answer"
          );

        if (otherAnswer) {

          otherAnswer.style.maxHeight =
            null;

        }

      });


      if (!alreadyOpen) {

        item.classList.add(
          "open"
        );

        answer.style.maxHeight =
          answer.scrollHeight +
          "px";

      }

    }
  );

});


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (
          entry.isIntersecting
        ) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: .12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(
    element
  );

});


/* =====================================================
   AÑO AUTOMÁTICO
===================================================== */

const yearElement =
  document.querySelector(
    "#year"
  );


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =====================================================
   LINKS DE REDES
===================================================== */

document
  .querySelectorAll(
    "[data-instagram]"
  )
  .forEach(link => {

    link.href =
      CONFIG.instagram;

    link.target =
      "_blank";

    link.rel =
      "noopener";

  });


document
  .querySelectorAll(
    "[data-facebook]"
  )
  .forEach(link => {

    link.href =
      CONFIG.facebook;

    link.target =
      "_blank";

    link.rel =
      "noopener";

  });


/* =====================================================
   HEADER AL HACER SCROLL
===================================================== */

const header =
  document.querySelector(
    ".header"
  );


window.addEventListener(
  "scroll",
  () => {

    if (!header) {
      return;
    }


    if (
      window.scrollY > 30
    ) {

      header.style.background =
        "rgba(5,11,20,.94)";

    } else {

      header.style.background =
        "rgba(5,11,20,.82)";

    }

  },
  {
    passive: true
  }
);


/* =====================================================
   PREVENIR ERRORES DE IMÁGENES
===================================================== */

document
  .querySelectorAll("img")
  .forEach(image => {

    image.addEventListener(
      "error",
      () => {

        image.classList.add(
          "image-error"
        );

      }
    );

  });


/* =====================================================
   FIN
===================================================== */

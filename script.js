/* =====================================================
   ESCALIOTECH V3
   JAVASCRIPT
   ===================================================== */


/* =========================
   CONFIGURACIÓN
========================= */

/*
   IMPORTANTE:

   Cambia este número por tu WhatsApp.

   Formato:

   México:
   52 + número de 10 dígitos

   Ejemplo:
   523312345678

   SIN:
   +
   espacios
   guiones
*/

const WHATSAPP_NUMBER = "523312345678";


/* =========================
   MENÚ MÓVIL
========================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileMenu.classList.toggle("active");

            mobileMenu.style.display =
                isOpen ? "block" : "none";

        }
    );


    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "active"
                );

                mobileMenu.style.display =
                    "none";

            }
        );

    });

}


/* =========================
   GALERÍA
========================= */

const mainProductImage =
    document.getElementById(
        "mainProductImage"
    );

const galleryCaption =
    document.getElementById(
        "galleryCaption"
    );

const galleryButtons =
    document.querySelectorAll(
        ".gallery-thumb"
    );


galleryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const image =
                button.dataset.image;

            const title =
                button.dataset.title;


            if (!mainProductImage) return;


            mainProductImage.style.opacity =
                "0";


            setTimeout(() => {

                mainProductImage.src =
                    image;

                mainProductImage.style.opacity =
                    "1";

            }, 150);


            if (galleryCaption) {

                galleryCaption.textContent =
                    title;

            }


            galleryButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );

        }
    );

});


/* =========================
   WHATSAPP
========================= */


/*
   Mensajes personalizados
   según el servicio.
*/

const whatsappMessages = {

    nfc:
        "Hola EscalioTech, me interesa conocer las placas NFC + QR para mi negocio. ¿Me pueden compartir información y opciones?",

    personalizada:
        "Hola EscalioTech, me interesa una placa NFC personalizada con el logo y estilo de mi negocio. ¿Me pueden compartir información y opciones?",

    web:
        "Hola EscalioTech, me interesa conocer sus servicios de páginas web para mi negocio. ¿Me pueden compartir información?",

    automatizacion:
        "Hola EscalioTech, me interesa conocer sus servicios de automatización para mi negocio. ¿Me pueden compartir información?",

    solucion:
        "Hola EscalioTech, quiero conocer las soluciones tecnológicas que pueden ofrecer para mi negocio. ¿Me pueden orientar?",

    general:
        "Hola EscalioTech, me interesa conocer sus productos y servicios para mi negocio. ¿Me pueden compartir información sobre precios y paquetes?"

};


/* Crear URL */

function createWhatsAppURL(service = "general") {

    const message =
        whatsappMessages[service] ||
        whatsappMessages.general;


    return (
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message)
    );

}


/* Botón principal */

const whatsappMain =
    document.getElementById(
        "whatsappMain"
    );


if (whatsappMain) {

    whatsappMain.href =
        createWhatsAppURL(
            "general"
        );

}


/* Botón flotante */

const whatsappFloat =
    document.getElementById(
        "whatsappFloat"
    );


if (whatsappFloat) {

    whatsappFloat.href =
        createWhatsAppURL(
            "general"
        );

}


/* Botones de servicios */

const serviceButtons =
    document.querySelectorAll(
        "[data-service]"
    );


serviceButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const service =
                button.dataset.service;


            /*
               El enlace principal de contacto
               recibe temporalmente el mensaje
               correspondiente.
            */

            if (whatsappMain) {

                whatsappMain.href =
                    createWhatsAppURL(
                        service
                    );

            }

        }
    );

});


/* =========================
   HEADER AL HACER SCROLL
========================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (!header) return;


        if (window.scrollY > 30) {

            header.style.background =
                "rgba(5,7,13,.92)";

        } else {

            header.style.background =
                "rgba(5,7,13,.78)";

        }

    }
);


/* =========================
   ANIMACIONES AL APARECER
========================= */

const animatedElements =
    document.querySelectorAll(
        ".benefit-card, .service-card, .package-card, .step"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach(
    element => {

        observer.observe(element);

    }
);


/* =========================
   AÑO AUTOMÁTICO
========================= */

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute(
                    "href"
                );


            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) return;


            event.preventDefault();


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect()
                    .top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top:
                    targetPosition,

                behavior:
                    "smooth"

            });

        }
    );

});


/* =========================
   MENSAJE EN CONSOLA
========================= */

console.log(
    "EscalioTech V3 cargada correctamente."
);

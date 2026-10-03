// =============================
// CONFIGURA AQUÍ TUS DATOS
// =============================
const CONFIG = {
  // Escribe tu número con código de país, sin +, espacios ni guiones.
  // Ejemplo México: 523312345678
  whatsapp: "52XXXXXXXXXX",

  instagram: "https://instagram.com/TU_USUARIO",
  facebook: "https://facebook.com/TU_USUARIO",
  tiktok: "https://tiktok.com/@TU_USUARIO",

  whatsappMessage: "Hola EscalioTech, me gustaría conocer sus servicios."
};

// Genera automáticamente los enlaces de WhatsApp.
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const number = CONFIG.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(CONFIG.whatsappMessage);
  link.href = number && !number.includes("XXXXXXXX")
    ? `https://wa.me/${number}?text=${message}`
    : "#";
});

document.querySelector("[data-instagram]")?.setAttribute("href", CONFIG.instagram);
document.querySelector("[data-facebook]")?.setAttribute("href", CONFIG.facebook);
document.querySelector("[data-tiktok]")?.setAttribute("href", CONFIG.tiktok);

document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach((a) => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Animaciones al entrar en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

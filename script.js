// CONFIGURE AQUI: informe o WhatsApp com código do país + DDD + número, somente dígitos.
// Exemplo de formato: 55 + DDD + número. Não inclua espaços, parênteses ou sinais.
const WHATSAPP_NUMBER = "55DDNUMERO";
const WHATSAPP_MESSAGE = "Olá, Flávio! Gostaria de saber mais sobre seus serviços e agendar uma avaliação.";

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  const configured = /^\d{12,13}$/.test(WHATSAPP_NUMBER);
  if (configured) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contato";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Configure o número de WhatsApp no arquivo script.js para ativar este botão.");
    });
  }
});

// Menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});
mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Scroll reveal com fallback para navegadores sem IntersectionObserver
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();

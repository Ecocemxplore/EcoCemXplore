// ===== Menú móvil =====
const navToggle = document.querySelector(".nav-toggle");
const mainNav  = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al hacer click en un enlace
  mainNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Link activo al hacer scroll =====
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav__link");

const activateLink = () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY + 140; // offset por header
    const start = sec.offsetTop;
    const end = sec.offsetTop + sec.offsetHeight;
    if (top >= start && top < end) current = sec.id;
  });

  links.forEach(link => {
    const sec = link.getAttribute("href")?.slice(1);
    link.classList.toggle("active", sec === current);
  });
};
window.addEventListener("scroll", activateLink);
window.addEventListener("load", activateLink);

// ===== Scroll suave extra (para navegadores sin soporte nativo) =====
links.forEach(link => {
  link.addEventListener("click", (e) => {
    const hash = link.getAttribute("href");
    if (hash?.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (!target) return;

      const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: prefersReduced ? "auto" : "smooth"
      });
      history.pushState(null, "", hash);
    }
  });
});

// ===== Validación simple del formulario =====
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function setError(inputEl, msg){
  const p = inputEl.parentElement.querySelector(".field__error");
  if (p) p.textContent = msg || "";
}

function validateEmail(value){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!statusEl) return;

  statusEl.textContent = "";

  const firstName = form.firstName.value.trim();
  const email     = form.email.value.trim();
  const subject   = form.subject.value.trim();
  const message   = form.message.value.trim();

  // Reset errores
  form.querySelectorAll(".field__error").forEach(p => p.textContent = "");

  let ok = true;
  if (!firstName){
    setError(form.firstName, "Please enter your name");
    ok = false;
  }
  if (!email || !validateEmail(email)){
    setError(form.email, "Enter a valid email");
    ok = false;
  }
  if (message.length < 5){
    setError(form.message, "Write a longer message");
    ok = false;
  }

  if (!ok) return;

  // Simulación de envío (sustituir por EmailJS/Formspree/backend)
  statusEl.textContent = "Sending...";
  statusEl.style.color = "#555";

  await new Promise(r => setTimeout(r, 700)); // simulación
  statusEl.textContent = "Message sent. Thank you!";
  statusEl.style.color = "green";
  form.reset();
});
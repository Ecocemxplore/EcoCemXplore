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

// ===== SPA Router por hash =====
const VALID_ROUTES = new Set(["about", "members", "news", "contact"]);
const routesEls = document.querySelectorAll(".route");
const navLinks  = document.querySelectorAll(".nav__link");

function setActiveRoute(route) {
  // Mostrar/ocultar vistas
  routesEls.forEach(sec => {
    const isActive = sec.dataset.route === route;
    sec.classList.toggle("active", isActive);
    sec.hidden = !isActive;
  });

  // Marcar enlace activo y aria-current
  navLinks.forEach(link => {
    const r = link.getAttribute("href")?.replace("#/", "");
    const isActive = r === route;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  // Título del documento
  const titleCase = route.charAt(0).toUpperCase() + route.slice(1);
  document.title = `EcoCemXplore – ${titleCase}`;
}

function getRouteFromHash() {
  const hash = window.location.hash || "#/about";
  const route = hash.replace("#/", "").toLowerCase();
  return VALID_ROUTES.has(route) ? route : "about";
}

function handleRouteChange() {
  const route = getRouteFromHash();
  setActiveRoute(route);

  // Enfocar el encabezado de la vista para accesibilidad
  const header = document.querySelector(`.route[data-route="${route}"] .route__title`);
  header?.setAttribute("tabindex", "-1");
  header?.focus({ preventScroll: true });
}

window.addEventListener("hashchange", handleRouteChange);
window.addEventListener("DOMContentLoaded", () => {
  // Estado inicial
  if (!window.location.hash) window.location.hash = "#/about";
  handleRouteChange();
});

// ===== Validación simple del formulario =====
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function setError(inputEl, msg){
  const p = inputEl?.parentElement?.querySelector(".field__error");
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
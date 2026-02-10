// Seleccionamos todos los elementos que tengan data-section
const navLinksAndButtons = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll(".section-page");

// Función para cambiar secciones
navLinksAndButtons.forEach(el => {
  el.addEventListener("click", () => {
    const target = el.getAttribute("data-section"); // sección objetivo

    // Ocultar todas las secciones
    sections.forEach(section => section.classList.remove("active"));

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(target);
    if (activeSection) activeSection.classList.add("active");
  });
});

// Seleccionamos enlaces del menú y secciones
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section-page");

// Navegación por menú
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-section");

    // Ocultar todas las secciones
    sections.forEach(section => {
      section.classList.remove("active");
    });

    // Mostrar la sección seleccionada
    document.getElementById(target).classList.add("active");
  });
});

// Botón "Discover More"
const discoverBtn = document.getElementById("btn");

if (discoverBtn) {
  discoverBtn.addEventListener("click", () => {
    sections.forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById("about-project").classList.add("active");
  });
}

// Seleccionamos los enlaces del menú y las secciones
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section-page");

// Función para cambiar secciones
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.getAttribute("data-section"); // sección objetivo

    // Ocultar todas las secciones
    sections.forEach(section => section.classList.remove("active"));

    // Mostrar la sección seleccionada
    document.getElementById(target).classList.add("active");
  });
});

// Botón "Discover More" que muestra la sección About Project
const discoverBtn = document.getElementById("btn");
if (discoverBtn) {
  discoverBtn.addEventListener("click", () => {
    sections.forEach(section => section.classList.remove("active"));
    document.getElementById("about-project").classList.add("active");
  });
}

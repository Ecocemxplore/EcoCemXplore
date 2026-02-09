// Selecciona todos los enlaces del menú
const navLinks = document.querySelectorAll('nav a');

// Selecciona todas las secciones principales
const sections = document.querySelectorAll('.section-page');

// Función que muestra solo la sección seleccionada
function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const targetSection = document.querySelector(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

// Click en los enlaces del menú
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // evita el salto de ancla
    const sectionId = link.getAttribute('href');
    showSection(sectionId);
  });
});

// Botón "Discover More"
const discoverBtn = document.getElementById('btn');
if (discoverBtn) {
  discoverBtn.addEventListener('click', () => {
    showSection('#about-project');
  });
}

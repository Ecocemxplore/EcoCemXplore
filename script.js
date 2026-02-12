// Sistema de Tabs
const buttons = document.querySelectorAll("#tabs button");
const sections = document.querySelectorAll(".tab-section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Quitar activo
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Activar botón
    btn.classList.add("active");

    // Activar sección correspondiente
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");

  });
});
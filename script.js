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
    // dentro del listener de navLinks
navLinks.forEach(a => a.classList.remove('active'));
el.classList.add('active');
  });
});
// ===== Validación y envío del formulario de contacto =====
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');

  function setError(input, msg) {
    const field = input.closest('.field');
    const errorEl = field?.querySelector('.field__error');
    if (errorEl) errorEl.textContent = msg || '';
  }

  function validateEmail(value) {
    // validación simple
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = '';
    let ok = true;

    const firstName = form.firstName;
    const lastName  = form.lastName;
    const email     = form.email;
    const subject   = form.subject;
    const message   = form.message;

    // Limpia errores
    [firstName, lastName, email, subject, message].forEach(i => setError(i, ''));

    // Reglas mínimas
    if (!firstName.value.trim()) { setError(firstName, 'Please enter your name'); ok = false; }
    if (!email.value.trim() || !validateEmail(email.value)) { setError(email, 'Please enter a valid email'); ok = false; }

    if (!ok) return;

    // Envío por mailto (rápido, sin backend)
    const to = 'smsp20@bath.ac.uk';
    const subjectText = subject.value ? subject.value : 'EcoCemXplore – Contact form';
    const body = [
      `Name: ${firstName.value} ${lastName.value || ''}`,
      `Email: ${email.value}`,
      '',
      'Message:',
      message.value || '(no message)',
    ].join('%0D%0A');

    const mailtoURL = `mailto:${to}?subject=${encodeURIComponent(subjectText)}&body=${body}`;
    window.location.href = mailtoURL;

    statusEl.textContent = 'Opening your email client...';
  });
})();
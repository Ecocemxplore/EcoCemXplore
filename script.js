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

document.getElementById("Logo").addEventListener("click", () => {
   const sections = document.querySelectorAll(".tab-section");
  sections.forEach(s => s.classList.remove("active"));
   const buttons = document.querySelectorAll("#tabs button");
  buttons.forEach(b => b.classList.remove("active"));
  
});
const logo = document.getElementById("Logo");
logo.addEventListener("click", (e) => {
  e.preventDefault(); // evita comportamiento por defecto del <a>
  const hero = document.querySelector(".hero-section img");
  hero.scrollIntoView({ behavior: "smooth" });
});

function toggleInfo(img) {
  const item = img.parentElement;
  const info = item.querySelector(".info");

  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    emailjs.sendForm(
      "Ek-voagZkTzMY9wh-",
      "template_ke7tspk",
      this
    )
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Error sending message");
      console.log(error);
    });

});
// Seleccionamos la imagen
const img = document.querySelector("img");

// Efecto al pasar el cursor: aumenta un poco el tamaño
img.addEventListener("mouseover", () => {
  img.style.transform = "scale(1.05)";
  img.style.transition = "transform 0.3s"; // animación suave
});

// Efecto al quitar el cursor: vuelve al tamaño original
img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)";
});

// Efecto al hacer clic: por ejemplo, cambiar borde y sombra
img.addEventListener("click", () => {
  img.style.border = "3px solid #007BFF";
  img.style.boxShadow = "0 6px 12px rgba(0,0,0,0.4)";
});

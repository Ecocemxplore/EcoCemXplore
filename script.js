// Seleccionamos la imagen
const img = document.querySelector("img");

// Efecto hover: zoom al pasar el cursor
img.addEventListener("mouseover", () => {
  img.style.transform = "scale(1.05)";
  img.style.boxShadow = "0 8px 16px rgba(0,0,0,0.4)";
});

// Volver al estado normal al quitar el cursor
img.addEventListener("mouseout", () => {
  img.style.transform = "scale(1)";
  img.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
});

// Efecto click: cambia el borde y sombra
img.addEventListener("click", () => {
  img.style.border = "3px solid #007BFF";
  img.style.boxShadow = "0 6px 12px rgba(0,0,0,0.5)";
});

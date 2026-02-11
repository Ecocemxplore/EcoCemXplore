// Seleccionamos la imagen
const img = document.querySelector("img");

// Al hacer clic en la imagen, cambia a otra
img.addEventListener("click", () => {
  img.src = "https://picsum.photos/300?random=" + Math.floor(Math.random() * 1000);
});

// Al pasar el mouse, mostramos un mensaje en la consola
img.addEventListener("mouseover", () => {
  console.log("¡Hola! Estás pasando el cursor sobre la imagen.");
});

// Al salir el cursor, vuelve a la imagen original
img.addEventListener("mouseout", () => {
  img.src = "https://placehold.co/300";
});

const ESCENAS_CON_OPCIONES = [2, 3, 4, 6, 7, 9, 12, 15, 17, 20];

const TEXTOS_DE_OPCIONES = [
    ["No aceptar el duelo", "Aceptar el duelo"],          // Índice 0 (Escena 2)
    ["No saben jugar", "Saben jugar"],                    // Índice 1 (Escena 3)
    ["Aceptan", "No aceptan"],                            // Índice 2 (Escena 4)
    ["Seguir el juego", "Rendirse"],                      // Índice 3 (Escena 6)
    ["Seguir jugando", "Abandonar"],                      // Índice 4 (Escena 7)
    ["Aceptar decir unas palabras", "No decir nada"],     // Índice 5 (Escena 9)
    ["Elegir a Mandy", "Elegir a Billy"],                 // Índice 6 (Escena 12)
    ["Utilizar Magia", "Rendirse"],                       // Índice 7 (Escena 15)
    ["Punto fijo", "Ahuyentar luces"],                    // Índice 8 (Escena 17)
    ["Abandonar", "Seguir con el ultimo reto"]            // Índice 9 (Escena 20)
];
    
// Arreglo 1: Contiene SOLO los IDs de los finales (necesario para la función pantallaFinal)
const FINAL_IDS = [
    100, // Índice 0
    101, // Índice 1
    102  // Índice 2
];

// Arreglo 2: Contiene SOLO los nombres de archivo de las imágenes
const FINAL_IMAGENES_NOMBRES = [
    "data/final1.jpeg", // Índice 0
    "data/final2.jpg",  // Índice 1
    "data/final3.jpeg"  // Índice 2
];

// Arreglo 3: Contiene SOLO los textos de detalle (descripciones)
const FINAL_DETALLES = [
    "Huesos se lleva al hámster y lo pierden para siempre. ¡Mala elección!", // Índice 0
    "Billy y Mandy quedan atrapados en el plano oscuro de Huesos. Game Over.",  // Índice 1
    "Huesos queda derrotado y condenado a ser su amigo en la Tierra. ¡Lo lograron!" // Índice 2
];

function esBifurcacion(n) {
  return [2, 3, 4, 6, 7, 9, 12, 15, 17, 20].includes(n);
}

function tieneFlecha(n) {
  return [0, 1, 5, 8, 10, 11, 13, 14, 16, 18, 19, 21, 22].includes(n);
}

function siguientePantalla(n) {
  if (n === 0) return 1;
  else if (n === 1) return 2;
  else if (n === 5) return 6;
  else if (n === 8) return 9;
  else if (n === 10) return 11;
  else if (n === 11) return 102; // FINAL 3
  else if (n === 13) return 15;
  else if (n === 14) return 17;
  else if (n === 16) return 18; 
  else if (n === 18) return 20;
  else if (n === 19) return 101; // FINAL 2
  else if (n === 21) return 22;
  else if (n === 22) return 102; // FINAL 3
  else return n + 1;
}

function destinoA(n) {
  if (n === 2) return 100; // FINAL 1
  else if (n === 3) return 4;
  else if (n === 4) return 7;
  else if (n === 6) return 12;
  else if (n === 7) return 8;
  else if (n === 9) return 10;
  else if (n === 12) return 13;
  else if (n === 15) return 16;
  else if (n === 17) return 18;
  else if (n === 20) return 101; // FINAL 2
  return n;
}

function destinoB(n) {
  if (n === 2) return 3;
  else if (n === 3) return 5;
  else if (n === 4) return 100; // FINAL 1
  else if (n === 6) return 101; // FINAL 2
  else if (n === 7) return 101; // FINAL 2
  else if (n === 9) return 101; // FINAL 2
  else if (n === 12) return 14;
  else if (n === 15) return 102; // FINAL 3
  else if (n === 17) return 19;
  else if (n === 20) return 21;
  return n;
}

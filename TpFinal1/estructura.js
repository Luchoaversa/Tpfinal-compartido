function esBifurcacion(n) {
  // Pantallas que tienen dos opciones (Opción A y B)
  return [2, 3, 4, 6, 7, 9, 12, 15, 17, 20].includes(n);
}

function tieneFlecha(n) {
  // Pantallas que tienen avance lineal (un solo botón de flecha)
  return [0, 1, 5, 8, 10, 11, 13, 14, 18, 19, 21, 22].includes(n);
}

function siguientePantalla(n) {
  // Define el destino de la flecha de avance lineal
  if (n === 0) return 1;
  else if (n === 1) return 2;
  else if (n === 5) return 6;
  else if (n === 8) return 9;
  else if (n === 10) return 11;
  else if (n === 11) return 102; // FINAL 3
  else if (n === 13) return 15;
  else if (n === 14) return 17;
  else if (n === 18) return 20;
  else if (n === 19) return 101; // FINAL 2
  else if (n === 21) return 22;
  else if (n === 22) return 102; // FINAL 3
  else return n + 1;
}

function destinoA(n) {
  // Define el destino al elegir la Opción A en una bifurcación
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
  // Define el destino al elegir la Opción B en una bifurcación
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

let imgInicio;
let images = [];
let totalImages = 23;
let escena = -1; // -1 = inicio
let WIDTH = 640;
let HEIGHT = 480;
let BUTTON_W = 250;
let BUTTON_H = 40;

function preload() {
 imgInicio = loadImage(`data/inicio.png`);
  for (let i = 1; i <= totalImages; i++) {
    images[i - 1] = loadImage(`data/pantalla${i}.png`);
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  rectMode(CORNER);
}

function draw() {
  background(0);
  cursor(ARROW);
  // Dibujo de Pantallas
  if (escena === -1) pantallaInicio();
  else if (escena === 99) pantallaCreditos();
  else if (escena >= 0 && escena < totalImages) {
    // Dibuja la imagen de la pantalla numerada
    if (images[escena] && images[escena].width > 0) image(images[escena], 0, 0, width, height); 
    else {
      // Fondo de seguridad si la imagen de pantalla no cargó
      background(30, 30, 30);
      fill(255);
      textSize(36);
      push();
      textAlign(CENTER, CENTER);
      text("Pantalla N° " + (escena + 1) + " (IMAGEN NO CARGADA)", width / 2, height / 2);
      pop();
    }
    // Dibuja la interfaz de navegación (flecha o bifurcación)
    if (esBifurcacion(escena)) dibujarOpciones();
    else if (tieneFlecha(escena)) dibujarFlecha();
  }
  else if (escena >= 100 && escena <= 102) pantallaFinal(escena);
  // Cambia el cursor si está sobre un botón
  if (hayBotonHover()) cursor(HAND);
}

function mousePressed() {
  // INICIO
  if (escena === -1) {
    if (mouseDentro(width/2 - 125, height/2 - 20, 150, 40)) escena = 0; // VA A PANTALLA 1 (índice 0)
    else if (mouseDentro(width/2 - 125, height/2 + 40, 150, 40)) escena = 99; // VA A CRÉDITOS
  }
  // Créditos/Finales
  else if (escena === 99 || (escena >= 100 && escena <= 102)) {
    if (mouseDentro(width/2 - 125, height - 80, 150, 40)) escena = -1; // VA A INICIO
  }
  // Pantallas de juego
  else if (escena >= 0 && escena < totalImages) {
    if (esBifurcacion(escena)) {
      if (mouseDentro(width/2 - 125, 300, 150, 40)) escena = destinoA(escena);
      else if (mouseDentro(width/2 - 125, 360, 150, 40)) escena = destinoB(escena);
    }
    else if (tieneFlecha(escena)) {
      if (mouseDentro(width - 60, height - 60, 50, 50)) escena = siguientePantalla(escena);
    }
  }
}

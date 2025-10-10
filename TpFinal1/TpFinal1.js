let imgInicio;
let images = [];
let totalImages = 23;
let escena = -1; // -1 = inicio
let x = 0; 
let y = 0;
let WIDTH = 640;
let HEIGHT = 480;
let BUTTON_W = 250;
let BUTTON_H = 40;
let creditos; 
let textos; 
let sound;
let finalImagenes = []; // Array para almacenar las imágenes de final (se carga en preload)

function preload() {
  sound = loadSound('data/intro.mp3');
  creditos = loadImage('data/creditos.jpeg');
  imgInicio = loadImage('data/inicio.jpg');
  textos = loadStrings("data/dialogos.txt"); 
  for (let i = 1; i <= totalImages; i++) {
    images[i - 1] = loadImage(`data/pantalla${i}.jpg`);
  }
  // 💾 Carga dinámica de las imágenes de final usando los datos de finalDatos (Pestaña 3)
  for (let i = 0; i < finalDatos.length; i++) {
    let dato = finalDatos[i];
    // Almacena la imagen en el array usando el ID (100, 101, 102) como clave
    finalImagenes[dato.id] = loadImage(dato.imagenNombre); 
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  rectMode(CORNER);
  //getAudioContext();
  sound.setLoop(true);
  print(textos[0]); 
}

function draw() {
  background(0);
  cursor(ARROW);
  // Dibujo de Pantallas
  if (escena === -1) pantallaInicio();
  else if (escena === 99) pantallaCreditos();
  else if (escena >= 0 && escena < totalImages) { // Rango de escenas de juego (0 a 22)
    // Dibuja la imagen de la pantalla numerada
    if (images[escena] && images[escena].width > 0) image(images[escena], 0, 0, width, height); 
    // Solo dibuja el diálogo para las escenas de juego, usando escena como índice
    dibujarDialogo(escena);
    // Dibuja la interfaz de navegación (flecha o bifurcación)
    if (esBifurcacion(escena)) dibujarOpciones();
    else if (tieneFlecha(escena)) dibujarFlecha();
  }
  else if (escena >= 100 && escena <= 102) pantallaFinal(escena); // Rango de finales
  // Cambia el cursor si está sobre un botón
  if (hayBotonHover()) cursor(HAND);
}

function mousePressed() {
  if (escena === -1) {
    // Botón "INICIAR"
    if (mouseDentro(width / 2 - 75, height / 2 - 20, 150, 40)) {
      escena = 0;
      if (!sound.isPlaying()) {
        sound.loop();
      }
    }
    // Botón "CRÉDITOS"
    else if (mouseDentro(width / 2 - 75, height / 2 + 40, 150, 40)) {
      escena = 99;
    }
  }
  else if (escena === 99 || (escena >= 100 && escena <= 102)) {
    // Botón "VOLVER"
    if (mouseDentro(width / 2 - 75, height - 80, 150, 40)) {
      escena = -1; // Vuelve al inicio
      if (sound && sound.isPlaying()) {
        sound.stop();
      }
    }
  }
  else if (escena >= 0 && escena < totalImages) {
    if (esBifurcacion(escena)) {
      if (mouseDentro(width / 2 - 125, 300, BUTTON_W, BUTTON_H)) escena = destinoA(escena);
      else if (mouseDentro(width / 2 - 125, 360, BUTTON_W, BUTTON_H)) escena = destinoB(escena);
    } 
    else if (tieneFlecha(escena)) {
      if (mouseDentro(width - 60, height - 60, 50, 50)) escena = siguientePantalla(escena);
    }
  }
}

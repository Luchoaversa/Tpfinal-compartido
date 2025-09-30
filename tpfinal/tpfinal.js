let images = [];
let totalImages = 23;
let escena = 0; // escena actual

function preload() {
  for (let i = 1; i <= totalImages; i++) {
    images[i - 1] = loadImage(`data/pantalla${i}.png`);
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
  if (escena >= 0 && escena <= 22) {
    image(images[escena], 0, 0, width, height);
  } else if (escena === 99) {
    Creditos();
  } else {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    text("Escena no definida", width / 2, height / 2);
  }
}

// Función para avanzar de escena
function siguienteEscena() {
  if (escena < 22) {
    escena++;
  } else {
    escena = 99; // va a créditos
  }
}

// Avanzar al hacer clic
function mousePressed() {
  if (escena !== 99) { // solo avanza si no estamos en créditos
    siguienteEscena();
  }
}

// Créditos
function Creditos() {
  background(50);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER); // primero alineación
  text("Créditos", width / 2, height / 2); // coma entre texto y coordenadas
}

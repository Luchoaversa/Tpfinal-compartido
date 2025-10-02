function dibujarBoton(x, y, w, h, texto) {
  let isHover = mouseDentro(x, y, w, h);
  fill(isHover ? color(128, 0, 100) : color(128, 0, 32));
  rect(x, y, w, h, 8);
  push();
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  pop();
}

function pantallaInicio() {
  if (imgInicio && imgInicio.width > 0) {
      // Dibuja la imagen, cubriendo todo el canvas
      image(imgInicio, 0, 0, width, height); 
}
  fill(255);
  push();
  textAlign(CENTER, CENTER);
  textSize(25);
  fill(255,255,255);
  stroke(0);
  strokeWeight(3);
  text("LAS SOMBRÍAS AVENTURAS DE BILLY Y MANDY", width / 2, height / 4);
  dibujarBoton(width/2 - 75, height/2 - 20, 150, 40, "INICIAR");
  dibujarBoton(width/2 - 75, height/2 + 40, 150, 40, "CRÉDITOS");
}

function pantallaCreditos() {
  background(20, 80, 30);
  fill(255);
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  text("CRÉDITOS", width/2, height/4);
  textSize(20);
  text("Juego creado por Luciano y Valeria ", width/2, height/2);
  pop();
  
  dibujarBoton(width/2 - 75, height - 80, 150, 40, "Volver al inicio");
}

function pantallaFinal(n) {
  background(100, 20, 20);
  fill(255);
  push();
  textAlign(CENTER, CENTER);
  textSize(48);
  if (n === 100) text("FINAL 1: ¡FIN!", width/2, height/2);
  else if (n === 101) text("FINAL 2: ¡FIN!", width/2, height/2);
  else if (n === 102) text("FINAL 3: ¡FIN!", width/2, height/2);
  pop();
  
  dibujarBoton(width/2 - 75, height - 80, 150, 40, "Volver al inicio");
}

function dibujarOpciones() {
  dibujarBoton(width/2 - 75, 300, BUTTON_W, BUTTON_H, "Opción A");
  dibujarBoton(width/2 - 75, 360, BUTTON_W, BUTTON_H, "Opción B");
}

function dibujarFlecha() {
  let x = width - 60;
  let y = height - 60;
  let w = 50;
  let h = 50;
  dibujarBoton(x, y, w, h, "→");
}

function mouseDentro(x, y, w, h) {
  // Verifica si el mouse está dentro de un área rectangular
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function hayBotonHover() {
  // Verifica si el mouse está sobre cualquier botón interactivo
  if (escena === -1) {
    return mouseDentro(width/2 - 75, height/2 - 20, 150, 40) || mouseDentro(width/2 - 75, height/2 + 40, 150, 40);
  } else if (escena === 99 || (escena >= 100 && escena <= 102)) {
    return mouseDentro(width/2 - 75, height - 80, 150, 40);
  }
  else if (escena >= 0 && escena < totalImages) {
    if (esBifurcacion(escena)) {
      return mouseDentro(width/2 - 75, 300, 150, 40) || mouseDentro(width/2 - 75, 360, 150, 40);
    } else if (tieneFlecha(escena)) {
      return mouseDentro(width - 60, height - 60, 50, 50);
    }
  }
  return false;
}

let menu;
let juego;
let sonidoJuego, sonidoGolpe, sonidoGanaste;  
let imagenmenu;

function preload() {
  imagenmenu = loadImage('data/menu.jpg');
}

function setup() {
  createCanvas(640, 480);
  menu = new Menu(); 
  background(imagenmenu);
}

function draw() {
  if (!juego) {
    menu.mostrar();  
  } else {
    juego.actualizar(); 
    juego.mostrar();
  }
}

class Menu {
  constructor() {
    this.botonJugar = createButton('Jugar');
    this.botonCreditos = createButton('Créditos');
    this.botonInstrucciones = createButton('Instrucciones');
    this.botonJugar.position(width / 2 - 50, height / 2 - 40);
    this.botonCreditos.position(width / 2 - 50, height / 2);
    this.botonInstrucciones.position(width / 2 - 50, height / 2 + 40);

    this.botonJugar.size(100, 40);
    this.botonCreditos.size(100, 40);
    this.botonInstrucciones.size(100, 40);

    this.botonJugar.mousePressed(() => this.iniciarJuego());
    this.botonCreditos.mousePressed(() => this.mostrarCreditos());
    this.botonInstrucciones.mousePressed(() => this.mostrarInstrucciones());


    this.botonVolver = createButton('Volver al Menú');
    this.botonVolver.position(width / 2 - 50, height / 2 + 100);
    this.botonVolver.size(100, 40);
    this.botonVolver.mousePressed(() => this.volverAlMenu());
    this.botonVolver.hide(); 


    this.mostrandoCreditos = false;
    this.mostrandoInstrucciones = false;

    // Carga de sonidos
    sonidoJuego = loadSound('data/SONIDAZO.mp3');
    sonidoGolpe = loadSound('data/PERDISTE.mp3');
    sonidoGanaste = loadSound('data/GANASTE.mp3');

    sonidoJuego.setVolume(0.1);  
  }

  mostrar() {
    if (this.mostrandoCreditos || this.mostrandoInstrucciones) {
      return;
    }

    fill(255, 255, 255);  
    textSize(32); 
    textAlign(CENTER, CENTER);
    text("Hamster: Escape del Caos", width / 2, height / 2 - 100); // Título actualizado

    this.botonJugar.show();
    this.botonCreditos.show();
    this.botonInstrucciones.show();
  }

  ocultar() {
    this.botonJugar.hide();
    this.botonCreditos.hide();
    this.botonInstrucciones.hide();
  }
  iniciarJuego() {
    if (!sonidoJuego.isPlaying()) {
      sonidoJuego.play(); 
    }

    this.ocultar();
    juego = new Juego();  
  }
  mostrarCreditos() {
    this.ocultar(); 
    fill(255, 255, 255);  
    textSize(20); 
    textAlign(CENTER, CENTER);
    text("Luciano Aversa y Valeria Rocchio", width / 2, height / 2);
    this.botonVolver.show();
    this.mostrandoCreditos = true; 
  }

  mostrarInstrucciones() {
    this.ocultar();  
    fill(255, 255, 255);  
    textSize(15);  
    textAlign(CENTER, TOP);
    text("Movete con las flechas, esquivá los portales y \nllegá a la meta púrpura para escapar! \n(Los portales aumentan su velocidad por nivel)", width / 2, height / 2); // Instrucciones actualizadas

    this.botonVolver.show();
    this.mostrandoInstrucciones = true; 
  }

  volverAlMenu() {
    this.mostrandoCreditos = false;
    this.mostrandoInstrucciones = false;

    background(imagenmenu);
    this.mostrar();
    sonidoGanaste.stop();
    this.botonVolver.hide();
  }
}

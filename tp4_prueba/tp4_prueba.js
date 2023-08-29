//30 segundos, 3 vidas, 5 puntos por invasor eliminado

//
let imagenes = ['data/fondo.jpg', 'data/invasor.PNG', 'data/nave.PNG'];
let fondo;
let imgInvasor;
let imgNave;
let page;
//
let posXnave;
let posYnave = 345;
let balaPosX;
let balaPosY;
let baladisparada = false;
let disparos = [];
let arrayInv = [];


function preload() {
  fondo = loadImage(imagenes[0]);
  imgInvasor = loadImage(imagenes[1]);
  imgNave=  loadImage(imagenes[2]);
}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.center()
    posXnave = (width/2)-25;
  //color de fondo de la pagina
  page=select("body");
  page.style("background-color", color(16, 13, 139));

  //array 2d de invasores
  for (let cols = 0; cols < 4; cols++) {
    arrayInv[cols] = [];
    for (let filas = 0; filas < 6; filas++) {
      arrayInv[cols][filas] = imgInvasor;
    }
  }
}


function draw() {
  image(fondo, 0, 0, 600, 400);

  
    nave(posXnave, posYnave)
    movXnave()
    //dibujarBala(baladisparada, balaPosX)
    dibujarInvaders()
    
}

function keyPressed() {
  if (key === " ") {
    baladisparada = true;
  }
}

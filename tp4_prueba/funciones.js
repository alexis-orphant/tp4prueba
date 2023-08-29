function nave(posXnave, posYnave) {
  image(imgNave, posXnave, posYnave, 50, 50)
    dibujarBala(baladisparada, balaPosX)
}

function movXnave() {
  if (keyIsDown(RIGHT_ARROW)&& (posXnave +50) < 600) {
    posXnave+=3;
  } else if (keyIsDown(LEFT_ARROW) && posXnave > 0) {
    posXnave-=3;
  }
}

function dibujarInvaders() {
  for (let filas =0; filas<4; filas++) {
    for (let cols=0; cols<6; cols++) {
      image(arrayInv[filas][cols], 70 * cols + 100, 35 * filas + 35, 50, 50)
    }
  }
}

function dibujarBala(baladisparada, balaPosX, posXnave) {
  fill(247, 240, 102);
  ellipse(balaPosX, balaPosY, 5, 20);
  balaPosY-=5;
  disparo(balaPosX, posXnave)
}

function disparo() {
  if (!baladisparada) {
    //bala(baladisparada, balaPosX)
    /*if (balaPosY < 0) {
     baladisparada = false;
     balaPosY =350;
     }*/
    balaPosX = posXnave + 25;
    balaPosY = posYnave +20;
  }
  if (balaPosY < 0) {
    baladisparada = false;
  }
}

const puntos = document.querySelectorAll(".punto");
let contador = 0;
puntos[0].style.border = "7px solid rgba(0,0,0,0.25)";

const intervalId = setInterval(() => {
  // puntos[contador].style.background = "red";
  puntos[contador].style.border = "7px solid rgba(0,0,0,0.25)";
  document.querySelector(".swiper").style.transform = "translateX(-"+33.3*contador+"%)"
  puntos.forEach((e, i) => {
    if (puntos[i] != puntos[contador]) {
      puntos[i].style.border = "none";
    }
  });
  contador++;

  if (contador === puntos.length) {
    contador = 0;
  }
}, 3000);

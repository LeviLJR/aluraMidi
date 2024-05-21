//seletores dos id's
const listaDeTeclas = document.querySelectorAll(".tecla");
// const listaDeSons = document.querySelectorAll("audio");

function tocaSom(index) {
  // const instrumento = '#som_' + listaDeTeclas[index].classList[1];
  // document.querySelector(instrumento).play();

  // document.querySelector(`#som_${listaDeTeclas[index].classList[1]}`).play();

  const elemento = document.querySelectorAll("audio")[index];
  if (elemento) {
    elemento.play();
    console.log(elemento)
  }
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  // listaDeTeclas[contador].onclick = function () {
  //   tocaSom(contador);
  // };
  const tecla = listaDeTeclas[contador];
  tecla.addEventListener("click", () => {
    tocaSom(contador);
  });
  tecla.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Tab") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function (event) {
    if (event.code === "Space" || event.code === "Tab") {
      tecla.classList.remove("ativa");
    }
  };
}

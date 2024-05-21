const listaDeTeclas = document.querySelectorAll("button");
let contador = 0;

function incremento() {
  contador++;
  console.log("Contador: " + contador);
}

// for (let index = 0; index < listaDeTeclas.length; index++) {
//   listaDeTeclas[index].addEventListener("click", incremento);
// }

let index = 0;

while (index < listaDeTeclas.length) {
  // listaDeTeclas[index].addEventListener("click", incremento);
  listaDeTeclas[index].onclick = incremento;
  index++;
}

// listaDeTeclas[3].addEventListener("click", () => {
//   console.log(contador);
// });


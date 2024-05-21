const listaDeBotoes = document.querySelectorAll("input");

for (let index = 1; index < listaDeBotoes.length; index++) {
  const botao = listaDeBotoes[index];
  if (botao != null) {
    botao.onkeydown = function (event) {
      if (event.code === "Space") {
        botao.classList.add("ativa");
      }
    };
    botao.onkeyup = (event) => {
      botao.classList.remove("ativa");
    };
  }
}

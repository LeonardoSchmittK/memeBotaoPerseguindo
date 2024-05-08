const noBtn = document.querySelector(".nao");
const yesBtn = document.querySelector(".sim");

const quotes = [
  "Vai, aperta o botão",
  "Por favorzinho...",
  "Confia, a gente combina",
  "Acredite em nós!",
  "Doeu? Quando caiu do céu, meu anjo?",
  "Eu compro flores, acredita?",
];

// pegar as dimensoes da tela
let x = window.innerWidth;
let y = window.innerHeight;

let jaclicou = false;

// botao nao é clicado
function handleClick() {
  printRandomQuote();
  jaclicou = true;

  // randomizar onde o botao nao aparecerá
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);

  // Definindo os limites para garantir que o botão esteja dentro da visualização
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  // Verificar se a posição aleatória fica fora da tela
  if (randomX + buttonWidth > x) {
    randomX = x - buttonWidth;
  }
  if (randomY + buttonHeight > y) {
    randomY = y - buttonHeight;
  }

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// sortear frase

function printRandomQuote() {
  const randomNum = Math.floor(Math.random() * quotes.length);
  document.querySelector(".title").innerText = quotes[randomNum];
}

// botao sim é clicado
function handleYes() {
  // criar video e botar no body
  const video = document.createElement("video");
  video.src = "./meme.mp4";
  video.autoplay = true; // comeca sozinho
  video.loop = true;
  document.body.appendChild(video);

  // deixa so o video na tela
  document.querySelector(".container").style.display = "none";
  document.body.style.background = "black";

  // loop a cada 4s
  setInterval(() => {
    handleYes();
    document.body.removeChild(document.querySelector("video"));
  }, 4000);
}

// quando a tela muda da tamanho, pegue as dimensões de novo
window.onresize = () => {
  if (jaclicou) {
    handleClick();

    x = window.innerWidth;
    y = window.innerHeight;
  }
};

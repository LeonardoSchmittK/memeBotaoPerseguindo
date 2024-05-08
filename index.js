const noBtn = document.querySelector(".nao");
const yesBtn = document.querySelector(".sim");
let sizeWidthSim = Number.parseInt(
  window.getComputedStyle(document.querySelector(".sim")).width
);
let sizeHeightSim = Number.parseInt(
  window.getComputedStyle(document.querySelector(".sim")).height
);
let sizeFontSim = Number.parseInt(
  window.getComputedStyle(document.querySelector(".sim")).fontSize
);

function handleClick() {
  sizeHeightSim += 210;
  sizeWidthSim += 220;
  sizeFontSim += 120;

  const randomX = Math.floor(Math.random() * window.screen.availWidth);
  const randomY = Math.floor(Math.random() * window.screen.availHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  console.log(randomX);
  console.log(randomY);

  yesBtn.style.width = `${sizeWidthSim}px`;
  yesBtn.style.height = `${sizeHeightSim}px`;
  yesBtn.style.fontSize = `${sizeFontSim}px`;
}

function handleYes() {
  const video = document.createElement("video");
  video.src = "./meme.mp4";
  video.autoplay = true;
  video.loop = true;
  document.body.appendChild(video);
  document.querySelector(".container").style.display = "none";
  document.body.style.background = "black";

  setInterval(() => {
    handleYes();
    document.body.removeChild(document.querySelector("video"));
  }, 4000);
}

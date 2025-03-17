const form = document.querySelector("#form");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const imc = document.getElementById("imcText");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (event.key === "ENTER") {
    event.preventDefault();
}

  let imcValue = peso.value / ((altura.value / 100) * (altura.value / 100));
  imcValue = imcValue.toFixed(2);
  const imcLabel = document.querySelector('#imc');

  let imcText = selectImcText(imcValue);
  document.querySelector('#imc').style.display = "flex";
  document.querySelector('#button').style.display = "none";
  moverSeta(imcValue);

  imc.textContent = imcText;
});

function selectImcText(imcValue) {
  let imcText = `Seu IMC é de ${imcValue} Kg/m2. Você está `;

  if (imcValue < 18.50) {
    imcText += "abaixo do peso!";

  } else if (imcValue < 25) {
    imcText += "com o peso ideal!";

  } else if (imcValue < 30) {
    imcText += "com sobrepeso!";

  } else if (imcValue < 35) {
    imcText += "com obesidade grau I!";

  } else if (imcValue < 40) {
    imcText += "com obesidade grau II!";

  } else {
    imcText += "com obesidade grau III!";

  }

  return imcText;
}

function moverSeta(imcValue) {
  
  imcValue = (imcValue > 50) ? 49 : imcValue;
  imcValue = (imcValue < 1) ? 0 : imcValue;
  const larguraBarra = document.querySelector('.barra').offsetWidth;
  const posicao = (imcValue - 1) * (larguraBarra / 50);
  document.querySelector('.seta').style.left = `${posicao-5}px`;
}

function closeImc(){
  document.querySelector('#imc').style.display = "none";
  document.querySelector('#button').style.display = "flex";
  peso.value = "";
  altura.value = "";
}
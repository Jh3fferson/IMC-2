const form = document.querySelector("#form");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const imc = document.getElementById("imcText");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  let imcValue = peso.value / ((altura.value / 100) * (altura.value / 100));
  const imcLabel = document.querySelector('#imc');

  let imcText = selectImcText(imcValue);
  document.querySelector('#imc').style.display = "flex";
  document.querySelector('#button').style.display = "none";
  moverSeta(imcValue);

  imc.textContent = imcText;
});

function selectImcText(imcValue) {
  let imcText;

  if (imcValue < 18.5) {
    imcText = (`Seu IMC é de ${imcValue.toFixed(2)} Kg/m2. Você está abaixo do peso!`);

  } else if (imcValue < 25) {
    imcText = (`Seu IMC é de ${imcValue.toFixed(2)} Kg/m2. Você está com o peso ideal!`);

  } else if (imcValue < 30) {
    imcText = (`Seu IMC é de ${imcValue.toFixed(2)} Kg/m2. Você está com sobrepeso!`);

  } else if (imcValue < 35) {
    imcText = (`Seu IMC é de ${imcValue.toFixed(2)} Kg/m2. Você está com obesidade grau I!`);

  } else if (imcValue < 40) {
    imcText = (`Seu IMC é de ${imcValue.toFixed(2)} Kg/m2. Você está com obesidade grau II!`);

  } else {
    imcText = (`Seu IMC é de ${imcValue.toFixed(2)} Kg/m2. Você está com obesidade grau III!`);

  }

  return imcText;
}


function moverSeta(imcValue) {

  imcValue = (imcValue > 50) ? 50 : imcValue;
  imcValue = (imcValue < 1) ? 1 : imcValue;
  const larguraBarra = document.querySelector('.barra').offsetWidth;
  const posicao = (imcValue - 1) * (larguraBarra / 50);
  document.querySelector('.seta').style.left = `${posicao}px`;
}

function closeImc(){
  document.querySelector('#imc').style.display = "none";
  document.querySelector('#button').style.display = "flex";
  peso.value = "";
  altura.value = "";
}

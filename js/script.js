const form = document.querySelector("#form");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const imc = document.getElementById("imc");


form.addEventListener("submit", function (event) {
event.preventDefault();

  let imc = peso.value / ((altura.value/100) * (altura.value/100));
  const imcLabel = document.querySelector('#imc');
  let imcText;
  let color;

  if (imc < 18.5) {
    imcText = (`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está abaixo do peso!`);

  } else if (imc < 25) {
    imcText = (`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está com o peso ideal!`);
    
  } else if (imc < 30) {
    imcText = (`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está com sobrepeso!`);
    
  } else if (imc < 35) {
    imcText = (`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está com obesidade grau I!`);
    
  } else if (imc < 40) {
    imcText = (`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está com obesidade grau II!`);

  } else {
    imcText = (`Seu IMC é de ${imc.toFixed(2)} Kg/m2. Você está com obesidade grau III!`);
    
  }
  document.querySelector('#imc-div').style.display="flex";
  document.querySelector('#imc-div').style.backgroundColor=color;

  moverSeta(imc);

  imcLabel.textContent = imcText;
});


function moverSeta(imc) {

    document.querySelector('.barra').style.display = "block";
   
    imc = (imc > 50) ? 50 : imc;
    imc = (imc < 1) ? 1 : imc;
    const larguraBarra = document.querySelector('.barra').offsetWidth;
    const posicao = (imc-1) * (larguraBarra/50);
    document.querySelector('.seta').style.left = `${posicao}px`;
}

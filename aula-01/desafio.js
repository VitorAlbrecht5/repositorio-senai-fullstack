// Vitor

let nome = "Vitor";
let peso = 62;
let altura = 1.83;
let imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("Nome: ", nome);
console.log("IMC: ", imc.toFixed(2));
console.log("Classificação: ", classificacao);
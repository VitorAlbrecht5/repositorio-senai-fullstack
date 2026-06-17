let nome = "Vitor";
let nota1 = 9;
let nota2 = 9;
let frequencia = 78;
let atividadesEntregues = true;
let estaBloqueado = false;

let media = (nota1 + nota2) / 2;


console.log("Aluno:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Atividades entregues:", atividadesEntregues);


if (media >= 6 && frequencia >= 75 && atividadesEntregues === true && !estaBloqueado) {
    console.log("Situação final: Aprovado");
} else if (media >= 9 && frequencia >= 60 && !estaBloqueado ) {
    console.log("Situação final: Aprovado por destaque");
} else {
    console.log("Situação final: Reprovado");
}
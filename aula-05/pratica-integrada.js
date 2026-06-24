let nomes = ["Vitor", "Cibely", "Julia", "Lucas", "Gabriel"];
let notas = [8, 9, 7, 6, 10];
let frequencias = [90, 80, 70, 60, 80];

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;


// DADOS DOS ALUNOS
console.log(`\n======= Dados dos Alunos =======`);

for (let i = 0; i < nomes.length; i++) {
  console.log(
    `Posicao: ${i}, Nome: ${nomes[i]}, Nota: ${notas[i]}, Frequencia: ${frequencias[i]}%`,
  );
}


// MEDIA DAS NOTAS
let totalNotas = 0;

for (let i = 0; i < notas.length; i++) {
  totalNotas = totalNotas + notas[i];
}

let mediaNotas = totalNotas / notas.length;

console.log(`\n======= Media das Notas =======`);
console.log(`Media das notas: ${mediaNotas}`);


// SITUAÇÃO DOS ALUNOS
console.log(`\n======= Situacao dos Alunos =======`);
for (let i = 0; i < nomes.length; i++) {
  if (notas[i] >= 7 && frequencias[i] >= 75) {
    console.log(`${nomes[i]}: APROVADO`);
    aprovados++;
  } else if (notas[i] >= 5 && notas[i] < 7 && frequencias[i] >= 75) {
    console.log(`${nomes[i]}: RECUPERAÇÃO`);
    recuperacao++;
  } else {
    console.log(`${nomes[i]}: REPROVADO`);
    reprovados++;
  }
}


// MENU
console.log(`\n======= Menu =======`);
let opcao = 1;
switch (opcao) {
  case 1:
    console.log("--- Lista de Alunos ---");
    for (let i = 0; i < nomes.length; i++) {
      console.log(nomes[i]);
    }
    break;

  case 2:
    console.log("--- Media das Notas ---");
    console.log(`A media geral da turma é : ${mediaNotas}`);
    break;

  case 3:
    console.log(`--- Situacao dos Alunos ---`);
    for (let i = 0; i < nomes.length; i++) {
      if (notas[i] >= 7 && frequencias[i] >= 75) {
        console.log(`${nomes[i]}: APROVADO`);
      } else if (notas[i] >= 5 && notas[i] < 7 && frequencias[i] >= 75) {
        console.log(`${nomes[i]}: RECUPERAÇÃO`);
      } else {
        console.log(`${nomes[i]}: REPROVADO`);
      }
    }

    break;

  case 4:
    console.log(`--- Resumo da Turma ---`);
    console.log("Total de alunos:", nomes.length);
    console.log("Aprovados:", aprovados);
    console.log("Recuperação:", recuperacao);
    console.log("Reprovados:", reprovados);
    console.log("Média da turma:", mediaNotas);
    break;

  default:
    console.log("Opção invalida");
    break;
}

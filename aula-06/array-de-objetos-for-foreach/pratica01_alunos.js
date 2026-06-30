// Array de Alunos
let alunos = [
  { nome: "Vitor", idade: 18, curso: "Full Stack" },
  { nome: "Cibely", idade: 17, curso: "Full Stack" },
  { nome: "Maria", idade: 20, curso: "Full Stack" },
];

// Percorre o array de alunos com FOR
console.log("\n=== LISTA COM FOR ===");
for (let i = 0; i < alunos.length; i++) {
  console.log(`Aluno: ${alunos[i].nome} | Idade: ${alunos[i].idade}`);
}

// Percorre o array de alunos com FOREACH
console.log("\n=== LISTA COM FOREACH ===");
alunos.forEach((aluno) => {
  console.log(
    `Aluno: ${aluno.nome} | Idade: ${aluno.idade} | Curso: ${aluno.curso}`
  );
});


// Alterando a idade do aluno
alunos[1].idade = 23;

console.log("\n=== APÓS ALTERAÇÃO ===");
console.log(`${alunos[1].nome} agora tem ${alunos[1].idade} anos.`);




// 1. O que o array alunos guarda?
// O array alunos guarda uma lista de objetos.

// 2. Para que serve o alunos[1]?
// alunos[1] acessa o segundo aluno do array.

// 3. Qual a diferença entre for e forEach neste exercício?
// O for percorre o array usando índices. Já o forEach percorre os elementos automaticamente, deixando o código mais simples.
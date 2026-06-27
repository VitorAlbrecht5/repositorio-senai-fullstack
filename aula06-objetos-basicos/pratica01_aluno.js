// Criando um objeto 
let aluno = { 
 nome: "Rafael",
 idade: 33,
 curso: "mecanicaautomotiva",
 matriculado: true,
 notaFinal: 8.5
}; 

// Acessando propriedades 

console.log("Dados do aluno: ");
console.log(aluno.nome); 
console.log(aluno.idade);

// Alterando propriedades
console.log("Dados do aluno atualizados: ");

aluno.idade = 19; 
aluno.matriculado = false; 
console.log(aluno);

// Criando um objeto 
let produto = {
 nome: "Notebook", 
 categoria: "Eletrônicos",
 preco: 3500,
 desconto: 0.2,
 emEstoque: 22
}; 

// Acessando propriedades 

console.log(produto.nome); 
console.log(produto.preco); 

// Alterando propriedades 
console.log("Dados do produto atualizados: ");

produto.preco = 3000; 
produto.emEstoque = 0; 
console.log(produto);

// 1) nome: “Notebook”,
// 2) desconto: 0.2,
// 3) coconsole.log("Dados do produto atualizados: ");
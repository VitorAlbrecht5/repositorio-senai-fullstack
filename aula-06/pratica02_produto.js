let produto = {
  nome: "Teclado",
  preco: 120,
  estoque: 10,
  disponivel: true,
  categoria: "Periféricos",
};

console.log("=== PRODUTO ANTES DA VENDA ===");
console.log(`Produto: ${produto.nome}`);
console.log(`Preço: R$ ${produto.preco}`);
console.log(`Estoque: ${produto.estoque}`);
console.log(`Disponível: ${produto.disponivel}`);

// Alterações
produto.preco = 99.9;
produto.estoque = 9;

console.log("\n=== PRODUTO APÓS ALTERAÇÃO ===");
console.log(`Produto: ${produto.nome}`);
console.log(`Novo preço: R$ ${produto.preco}`);
console.log(`Novo estoque: ${produto.estoque}`);
console.log(`Disponível: ${produto.disponivel}`);

// Respostas:
// 1) A propriedade nome.
// 2) A propriedade preco
// 3) A propriedade estoque.
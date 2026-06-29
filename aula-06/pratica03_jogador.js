let jogador = {
  nickname: "Bielzera",
  nivel: 1,
  moedas: 100,
  energia: 50,
  premium: false,
};

console.log("=== STATUS INICIAL ===");
console.log(`Jogador: ${jogador.nickname}`);
console.log(`Nível: ${jogador.nivel}`);
console.log(`Moedas: ${jogador.moedas}`);
console.log(`Energia: ${jogador.energia}`);
console.log(`Premium: ${jogador.premium}`);

// Alterações
jogador.nivel = 2;
jogador.moedas = 70;
jogador.energia = 35;
jogador.premium = true;

console.log("\n=== STATUS FINAL ===");
console.log(`Jogador: ${jogador.nickname}`);
console.log(`Nível: ${jogador.nivel}`);
console.log(`Moedas: ${jogador.moedas}`);
console.log(`Energia: ${jogador.energia}`);
console.log(`Premium: ${jogador.premium}`);
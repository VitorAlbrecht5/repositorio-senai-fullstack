
function verificarMaioridade(idade: number): string {
    if (idade >= 18 ) {
       return "Maior de idade!"
    } else {
        return "Menor de idade!"
    }
}

console.log(verificarMaioridade(20));
console.log(verificarMaioridade(15));

function calcularDesconto (preco: number, porcentual: number): number {
    
    return preco - (preco * porcentual / 100)
}

console.log(calcularDesconto(100, 10));
console.log(calcularDesconto(250, 20));
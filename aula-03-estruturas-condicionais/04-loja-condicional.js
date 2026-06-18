let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix";
let descontoAplicado = 0;
let valorFinal = valorCompra;

if (temCupom || ehAlunoSENAI) {
    descontoAplicado = valorCompra * 0.10;
    valorFinal = valorCompra - descontoAplicado;
}

switch (formaPagamento) {
    case "pix":
        let descontoPix = valorFinal * 0.05;
        valorFinal = valorFinal - descontoPix;
        descontoAplicado = descontoPix + descontoAplicado;

        break;

    case "boleto":
        let descontoBoleto = valorFinal * 0.02;
        valorFinal = valorFinal - descontoBoleto;
        descontoAplicado = descontoBoleto + descontoAplicado;
        break;

    case "credito":
        break;

    default:
        console.log("Forma de pagamento inválida.")
}

let frete = 0;

if (valorFinal >= 200) {
    frete = 0;
} else {
    frete = 20;
}

let totalPagar = valorFinal + frete;

console.log("Valor original: R$", valorCompra);
console.log("Desconto aplicado: R$", descontoAplicado);
console.log("Frete: R$", frete);
console.log("Total a pagar: R$", totalPagar);



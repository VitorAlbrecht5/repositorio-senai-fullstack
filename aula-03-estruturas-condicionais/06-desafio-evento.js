let idade = 16;
let temIngresso = true;
let ehAlunoSENAI = true;
let horaChegada = 19;
let vagasDisponiveis = 5;
let codigoIngresso = "PADRAO"; // VIP, PADRAO, CONVIDADO

let decisao = "";
let tipoIngresso = "";

if (idade < 14) {
    decisao = "Entrada negada"
} else if (!temIngresso) {
     decisao = "Precisa comprar o ingresso"
} else if (vagasDisponiveis === 0) {
    decisao = "O evento esta lotado"
} else if (horaChegada > 20) {
    decisao = "Entrada encerrada";
} else {
    decisao = "Entrada liberada"
}

switch (codigoIngresso) {
    case "VIP":
        tipoIngresso = "VIP"
        break;

    case "PADRAO":
         tipoIngresso = "Padrão"
        
        break;

    case "CONVIDADO":
        tipoIngresso = "Convidado"
        break;

    default:
        tipoIngresso = "Inválido"
}

console.log("Idade", idade)
console.log("Tipo de Ingresso:", tipoIngresso)

if (ehAlunoSENAI === true && codigoIngresso === "PADRAO") {
   console.log("Ganhou desconto de estudante")
} else {
    console.log("Não ganhou desconto de estudante")
}

console.log("Decisão Final:", decisao)
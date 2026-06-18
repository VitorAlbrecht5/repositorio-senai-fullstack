let prioridade = 2; // 1 baixa, 2 média, 3 alta
let sistemaForaDoAr = false;
let tempoEsperaMin = 12;
let categoria = "login"; // login, internet, computador, outro

let classificacao = "";

if (sistemaForaDoAr === true || prioridade === 3) {
    classificacao = "CRÍTICO";
} else if (tempoEsperaMin > 30 && prioridade === 2) {
    classificacao = "ALTO";
} else if (prioridade === 1) {
    classificacao = "NORMAL";
} else {
    classificacao = "EM ANÁLISE";
}

console.log("Classificação: ", classificacao)

switch (categoria) {
    case "login":
        console.log("Redefinir senha e validar usuário");
        break;

    case "internet":
        console.log("Verificar cabo, Wi-Fi e roteador");
        break;

    case "computador":
        console.log("Reiniciar máquina e verificar atualizações");
        break;

    case "outro":
        console.log("Coletar mais informações");
        break;

    default:
        console.log("Categoria inválida");
        break;
}

function calcularMedia (nota1: number, nota2: number, nota3: number): number {
    return (nota1 + nota2 + nota3) / 3;
}

let media = calcularMedia(8, 7, 6);

function verificarSituacao(media: number): string {
    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperacao"
    } else {
        return "Reprovado"
    }
}

let situacao = verificarSituacao(media);

function exibirBoletim (nome: string, media: number, situacao: string) {
    return `Nome: ${nome}, Media: ${media}, Situacao: ${situacao}`
}

console.log(exibirBoletim("Vitor", media, situacao));
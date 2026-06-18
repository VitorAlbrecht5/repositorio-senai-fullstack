<!-- CIBELY -->

## 1. Qual é a diferença entre condição e decisão?

Condição: É a regra ou o teste lógico.

Decisão:  É o caminho ou ação que o programa toma

## 2. Por que a ordem dos else if pode mudar o resultado?

Porque a estrutura de controle avalia as condições sequencialmente

## 3. Quando é melhor usar switch em vez de else if?

Quando é  preciso comparar uma única variável contra múltiplos valores fixos e discretos.

## 4. O que acontece se esquecer o break dentro do switch?

Continua executando os próximos casos.

## 5. Qual foi o erro mais comum que a dupla encontrou durante a prática? Como corrigiu?

O erro mais comum foi que o else não precisa de uma condição.

## Bug 1
A ordem do if e do else if está incorreta porque o 9 já é maior que 6, então, else nunca será executado.

Código corrigido:
let nota = 9;
if (nota >= 9) {
   console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprovado");
}

## Bug 2
Falta do break no final de cada case.

Código corrigido:
let dia = 2;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    default:
        console.log("Inválido");
}

## Bug 3
O sinal "=" está incorreto, pois ele atribui valor. O correto seria: == ou ===.

Código corrigido:
let idade = 18;
if (idade == 18) {
    console.log("Tem 18 anos");
}
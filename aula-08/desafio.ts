class Aluno {
  nome: string;
  nota1: number;
  nota2: number;

  constructor(nome: string, nota1: number, nota2: number) {
    this.nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  calcularMedia(): number {
    return (this.nota1 + this.nota2) / 2;
  }

  verificarSituacao(): string {
    if (this.calcularMedia() >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }

  exibirInformacoes(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Média: ${this.calcularMedia()}`);
    console.log(`Situação: ${this.verificarSituacao()}`);
  }
}


let aluno1 = new Aluno("Vitor", 6, 6);
let aluno2 = new Aluno("Cibely", 5, 4);
let aluno3 = new Aluno("Lucas", 10, 9);

aluno1.exibirInformacoes();
aluno2.exibirInformacoes();
aluno3.exibirInformacoes();
const nomeAluno: string = "João";
const nota1: number = 8;
const nota2: number = 6;
const nota3: number = 7;
const frequencia: number = 80;
const media: number = (nota1 + nota2 + nota3) / 3;

const resultadoFinal: string =
  frequencia < 75
    ? "Reprovado por falta"
    : media >= 7
    ? "Aprovado"
    : media >= 5
    ? "Recuperação"
    : "Reprovado por nota";

console.log(
  `O aluno ${nomeAluno} está ${resultadoFinal}. Média: ${media.toFixed(
    2
  )}, Frequência: ${frequencia}%`
);

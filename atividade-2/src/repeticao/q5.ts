function verificarAprovacao(alunos: { nome: string; notas: number[] }[]): void {
  alunos.forEach((aluno) => {
    const media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length;
    const resultado = media >= 7 ? "Aprovado" : "Reprovado";

    console.log(
      `${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${resultado}`
    );
  });
}

const alunos = [
  { nome: "João", notas: [8, 7, 9] },
  { nome: "Maria", notas: [6, 5, 7] },
  { nome: "Pedro", notas: [10, 9, 8] },
];

verificarAprovacao(alunos);

// 15. Crie um array de objetos `alunos` com 3 elementos (baseado na interface do exercício 8). Percorra esse array e imprima o nome dos alunos ativos (`ativo === true`).

interface Aluno {
  nome: string;
  matricula: number;
  ativo: boolean;
}

const alunos: Aluno[] = [
  { nome: "Thiago", matricula: 123456, ativo: true },
  { nome: "Geisa", matricula: 654321, ativo: false },
  { nome: "João Vicente", matricula: 789012, ativo: true },
];

alunos.forEach((aluno) => {
  aluno.ativo && console.log(aluno.nome);
});

type Aluno = {
  nome: string;
  idade: number;
  curso: string;
};

const aluno: Aluno = {
  nome: "Maria",
  idade: 21,
  curso: "Análise e Desenvolvimento de Sistemas",
};

for (const propriedade in aluno) {
  const key = propriedade as keyof Aluno;
  console.log(`${propriedade}: ${aluno[key]}`);
}

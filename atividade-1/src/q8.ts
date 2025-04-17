// Crie uma interface Aluno com as propriedades: nome (string), matricula (number), ativo (boolean). Crie um objeto baseado nessa interface.

interface Aluno {
  nome: string;
  matricula: number;
  ativo: boolean;
}

const aluno: Aluno = {
  nome: "Thiago",
  matricula: 123456,
  ativo: true,
};

console.log(aluno);

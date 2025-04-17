// 14. Crie uma função `descreverPessoa` que receba um objeto com `nome`, `idade` e `profissao`, e retorne uma frase descritiva.

type Pessoa = {
  nome: string;
  idade: number;
  profissao: string;
};

function descreverPessoa(pessoa: Pessoa) {
  return `${pessoa.nome} tem ${pessoa.idade} anos e é ${pessoa.profissao}.`;
}

const pessoa: Pessoa = {
  nome: "Thiago",
  idade: 20,
  profissao: "Desenvolvedor",
};

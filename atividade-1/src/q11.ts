// Crie um enum chamado DiaSemana com os dias: SEGUNDA, TERÇA, QUARTA, QUINTA, SEXTA. Crie uma variável que recebe DiaSemana.QUARTA e imprima no console.

enum DiaSemana {
  SEGUNDA = "Segunda Feira",
  TERCA = "Terca feira",
  QUARTA = "Quarta feira",
  QUINTA = "Quinta feira",
  SEXTA = "Sexta feira",
}

const dia: DiaSemana = DiaSemana.QUARTA;
console.log(dia);

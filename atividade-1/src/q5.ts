// Crie um array chamado notas com 4 números e imprima a média deles.

const notas: number[] = [65, 87, 95, 100];

const soma = notas.reduce((prev, acc) => {
  return prev + acc;
}, 0);

console.log(soma / 4);

// Crie uma função que receba um parâmetro do tipo string | number. Use typeof para identificar o tipo e imprimir uma mensagem adequada.

function tipoDeParametro(parametro: string | number) {
  if (typeof parametro === "string") {
    console.log("O parâmetro é uma string");
  } else if (typeof parametro === "number") {
    console.log("O parâmetro é um número");
  }
}

console.log(tipoDeParametro("Thiago"));
console.log(tipoDeParametro(10));

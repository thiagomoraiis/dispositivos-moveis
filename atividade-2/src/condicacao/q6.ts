const nota: number = 6;
const resultadoNota: string =
  nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";

console.log(`A nota é: ${resultadoNota}.`);

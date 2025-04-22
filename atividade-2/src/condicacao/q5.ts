const idadePessoa: number = 18;
if (idadePessoa < 16) {
  console.log("Não vota");
} else if ((idadePessoa >= 16 && idadePessoa < 18) || idadePessoa > 70) {
  console.log("Voto facultativo");
} else {
  console.log("Voto obrigatório");
}

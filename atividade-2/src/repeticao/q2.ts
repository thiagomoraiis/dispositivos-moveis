while (true) {
  let soma: number = 0;
  let i: number = 1;

  while (i <= 20) {
    if (i % 2 === 0) {
      soma += i;
    }
    i++;
  }

  console.log(`A soma dos números pares entre 1 e 20 é: ${soma}.`);
  break;
}

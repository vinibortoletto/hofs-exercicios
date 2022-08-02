const numeros = [5, 2, 7, 8, 22, 14, 51, 32];
// Retorno esperado: [2, 8, 22, 14, 32]

const pegaNumerosPares = (arrayDeNumeros) => {
  const pares = [];

  arrayDeNumeros.forEach((numero) => {
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  });

  return pares;
};

console.log(pegaNumerosPares(numeros));
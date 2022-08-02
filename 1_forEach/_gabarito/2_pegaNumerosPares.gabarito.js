const numeros = [5, 2, 7, 8, 22, 14, 51, 32];
// Retorno esperado: [2, 8, 22, 14, 32]

const pegaNumerosPares = (arrayDeNumeros) => {
  // Array vazio onde números pares serão guardados
  const pares = [];

  // Passa por cada número do array
  arrayDeNumeros.forEach((numero) => {
    // Se for divisível por 2
    if (numero % 2 === 0) {
      // Adiciona número dentro do array "pares"
      pares.push(numero);
    }
  });

  // Retorna array com números pares
  return pares;
};

console.log(pegaNumerosPares(numeros));

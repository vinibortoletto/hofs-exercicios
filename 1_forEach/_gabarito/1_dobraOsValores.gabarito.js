const numeros = [2, 4, 17, 31, 5, 111, 13];
// Retorno esperado: [4, 8, 34, 62, 10, 222, 26]

const dobraOsValores = (arrayDeNumeros) => {
  // Novo array para salvar números dobrados
  const novoArrayDeNumeros = [];

  // Passa por cada item do array
  arrayDeNumeros.forEach((numero) => {
    // Adiciona o número multiplicado por 2 para dentro do novo array
    novoArrayDeNumeros.push(numero * 2);
  });

  // Retorna o novo array com os números dobrados
  return novoArrayDeNumeros;
};

console.log(dobraOsValores(numeros));

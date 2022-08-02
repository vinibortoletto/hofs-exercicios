const numeros = [2, 15, 78, 19, 4, 20];
// Retorno esperado: false

const verificaNumerosImpares = (array) => {
  // Verifica se todos os números NÃO são divisíveis por 2
  return array.every((numero) => numero % 2 !== 0);
};

console.log(verificaNumerosImpares(numeros));

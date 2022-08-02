const numerosPares = [2, 4, 6, 8, 10, 12, 14];
const numerosImpares = [1, 3, 5, 7, 9, 11, 13];

const dobraOsValores = (arrayDeNumeros) => {
  const novoArrayDeNumeros = [];

  arrayDeNumeros.forEach((numero) => {
    novoArrayDeNumeros.push(numero * 2);
  });

  return novoArrayDeNumeros;
};

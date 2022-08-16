const numeros = ['1', '2', '3', '4', '5', '6'];
/* 
  Retorno esperado:
  [ 2, 4, 6, 8, 10, 12 ]
*/

const duplicaNumeros = (array) => {
  // Mapeia o array, retornando novo array com números multiplicados
  return array.map((numero) => Number(numero) * 2);
};

console.log(duplicaNumeros(numeros));

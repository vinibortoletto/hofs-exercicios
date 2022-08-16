const animais = [
  { nome: 'pipoca', especie: 'cachorro' },
  { nome: 'lilo', especie: 'gato' },
  { nome: 'zizo', especie: 'calopsita' },
  { nome: 'caramelo', especie: 'cachorro' },
  { nome: 'mel', especie: 'cachorro' },
];

/* 
  Retorno esperado:
  [ 'pipoca', 'lilo', 'zizo', 'caramelo', 'mel' ]
*/

const pegaNomesDosAnimais = (array) => {
  // Mapeia o array, retornando novo array com nomes dos animais
  return array.map((animal) => animal.nome);
};

console.log(pegaNomesDosAnimais(animais));

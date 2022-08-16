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
  return array.reduce((acc, { nome }) => {
    acc.push(nome);
    return acc;
  }, []);
};

console.log(pegaNomesDosAnimais(animais));

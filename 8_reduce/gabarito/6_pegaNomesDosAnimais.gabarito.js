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
  // Se nome/materia for igual info, retorna professor
  return array.reduce((acc, { nome }) => {
    // Adiciona nome no acumulador
    acc.push(nome);
    return acc;
  }, []);
};

console.log(pegaNomesDosAnimais(animais));

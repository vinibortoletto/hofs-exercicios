const animais = [
  { nome: 'pipoca', especie: 'cachorro' },
  { nome: 'lilo', especie: 'gato' },
  { nome: 'zizo', especie: 'calopsita' },
  { nome: 'caramelo', especie: 'cachorro' },
  { nome: 'mel', especie: 'cachorro' },
];
/* 
  Retorno esperado:
  [
    { nome: 'pipoca', especie: 'cachorro' },
    { nome: 'caramelo', especie: 'cachorro' },
    { nome: 'mel', especie: 'cachorro' }
  ] 
*/

const filtraAnimais = (array) => {
  // Se nome/materia for igual info, retorna professor
  return array.reduce((acc, animal) => {
    // Se especie === 'cachorro', adiciona animal para dentro do acumulador
    if (animal.especie === 'cachorro') acc.push(animal);
    return acc;
  }, []);
};

console.log(filtraAnimais(animais));

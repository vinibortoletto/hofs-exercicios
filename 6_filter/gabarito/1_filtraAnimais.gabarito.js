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

const filtraCachorro = (array) => {
  return array.filter((animal) => animal.especie === 'cachorro');
};

console.log(filtraCachorro(animais));

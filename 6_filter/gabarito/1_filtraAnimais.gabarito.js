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
  // Retorna e filtra os animais comparando se espécie é igual "cachorro"
  return array.filter((animal) => animal.especie === 'cachorro');
};

console.log(filtraCachorro(animais));

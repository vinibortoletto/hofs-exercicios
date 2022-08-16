const infos = [
  'Carlos',
  40,
  ['Manaus, Amazonas'],
  { pais: 'Brasil' },
  'Alberto',
];
/* 
  Retorno esperado:
  [ 'Carlos', 'Alberto' ]
*/

const filtraStrings = (array) => {
  // Retorna e filtra apenas as info que são do tipo "string"
  return array.filter((info) => typeof info === 'string');
};

console.log(filtraStrings(infos));

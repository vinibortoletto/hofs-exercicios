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
  return array.filter((info) => typeof info === 'string');
};

console.log(filtraStrings(infos));

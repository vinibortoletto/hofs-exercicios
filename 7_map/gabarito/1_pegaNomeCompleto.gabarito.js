const pessoas = [
  { nome: 'jerry', sobrenome: 'seinfeld' },
  { nome: 'george', sobrenome: 'constanza' },
  { nome: 'elaine', sobrenome: 'benes' },
  { nome: 'cosmo', sobrenome: 'kramer' },
];
/* 
  Retorno esperado:
  [
   'jerry seinfeld',
   'george constanza',
   'elaine benes',
   'cosmo kramer'
  ]
*/

const pegaNomeCompleto = (array) => {
  // Mapeia o array, retornando novo array de strings
  return array.map(({ nome, sobrenome }) => `${nome} ${sobrenome}`);
};

console.log(pegaNomeCompleto(pessoas));

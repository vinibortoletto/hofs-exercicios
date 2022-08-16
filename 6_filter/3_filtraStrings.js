/* 
  Documentação sobre filter(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  Dicas:
    1. filter() pega todos os items que satisfazem um condição;
    2. filter() sempre retorna um array;
    3. se filter() não encontrar nenhum item que satisfaz sua condição, retorna um array vazio;

  Usando filter():
    1. Crie uma função chamada filtraStrings;
    2. Essa função recebe um parâmetro:
      - array de vários tipos;
    3. A função então retorna um array contendo os itens do tipo string;
*/

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

// Crie sua função aqui

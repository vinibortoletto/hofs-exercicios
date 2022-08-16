/* 
  Documentação sobre map(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

  Dicas:
    1. map() passa por todos os itens de um array;
    2. map() sempre retorna um novo;
    3. esse novo array é do mesmo tamanho do array mapeado;
    4. Deixe sua função genérica para que ela aceite qualquer array;

  Usando map():
    1. Crie uma função chamada pegaNomeCompleto;
    2. Essa função recebe um parâmetro:
      - array de objetos;
    3. A função então retorna um array contendo apenas nome e sobrenome em uma string;
*/

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

// Crie sua função aqui

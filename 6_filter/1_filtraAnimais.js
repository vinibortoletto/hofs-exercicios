/* 
  Documentação sobre filter(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  Dicas:
    1. filter() pega todos os items que satisfazem um condição;
    2. filter() sempre retorna um array;
    3. se filter() não encontrar nenhum item que satisfaz sua condição, retorna um array vazio;
    4. Deixe sua função genérica para que ela aceite qualquer array;

  Usando filter():
    1. Crie uma função chamada filtraCachorro;
    2. Essa função recebe um parâmetro:
      - array de objetos;
    3. A função então retorna um array contendo apenas cachorros;
*/

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

// Crie sua função aqui

/* 
  Documentação sobre map(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

  Dicas:
    1. map() passa por todos os itens de um array;
    2. map() sempre retorna um novo;
    3. esse novo array é do mesmo tamanho do array mapeado;
    4. Deixe sua função genérica para que ela aceite qualquer array;

  Usando map():
    1. Crie uma função chamada pegaNomesDosAnimais;
    2. Essa função recebe um parâmetro:
      - array de objetos;
    3. A função então retorna um array contendo apenas os nomes dos animais;
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
  [ 'pipoca', 'lilo', 'zizo', 'caramelo', 'mel' ]
*/

// Crie sua função aqui

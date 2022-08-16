/* 
  Documentação sobre reduce(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  Dicas:
    1. reduce() é capaz de fazer tudo o que as outras hofs fazem;
    2. reduce() retorna o que você especificar;
    3. se não especificar seu retorno, nada será retornado;

  Usando reduce():
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

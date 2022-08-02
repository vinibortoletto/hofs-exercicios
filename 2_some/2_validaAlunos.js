/* 
  Documentação sobre some(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

  Dicas:
    1. some() para passa por todos os itens de um array até encontrar algum que satisfaça sua condição;
    2. some() sempre retorna um booleano:
      a. true: se encontrar um elemento que satisfaça sua condição;
      b. false: se não encontrar nenhum elemento que satisfaça sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array;

  Usando some():
    1. Crie uma função chamada validaAlunes;
    2. Essa função recebe um array de objetos como parâmetro;
    3. A função então retorna:
      a. Se algum alune possui nota menor que 5, "Nem todos os alunes foram aprovados"
      b. Se todos os alunes possuem nota maior que 5, "Todos os alunes foram aprovados"
*/

const alunes = [
  {
    nome: 'Chaves',
    nota: 8,
  },

  {
    nome: 'Chiquinha',
    nota: 9,
  },

  {
    nome: 'Kiko',
    nota: 7,
  },

  {
    nome: 'Nhonho',
    nota: 7,
  },
];
// Retorno esperado: 'Todos os alunes foram aprovados'

// Crie sua função aqui

/*
  Documentação sobre find():
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  Dicas: 
    1. find() para passa por todos os itens até satisfazer sua condição;
    2. find() sempre retorna um ELEMENTO ou UNDEFINED:
      - elemento: retorna o primeiro item que satisfazer sua condição;
      - undefined: se nenhum item satisfazer sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array; 

  Usando find(): 
    1. Crie uma função chamada encontreCapital; 
    2. Essa função recebe dois parâmetros:
      - array de objetos
      - string com o nome da capital
    3. A função então retorna:
      - O objeto do país selecionado
      - Caso país não seja encontrado: 'País não encontrado'
*/

const paises = [
  {
    nome: 'Brasil',
    capital: 'Brasilia',
    moeda: 'Real',
    populacao: 214047375,
  },
  {
    nome: 'Argentina',
    capital: 'Buenos Aires',
    moeda: 'Peso Argentino',
    populacao: 47327407,
  },
  {
    nome: 'Tailândia',
    capital: 'Banguecoque',
    moeda: 'Bate',
    populacao: 68863514,
  },
];
/* 
  Retorno esperado: {
    nome: 'Brasil',
    capital: 'Brasilia',
    moeda: 'Real',
    populacao: 214047375
  } 
*/

// Crie sua função aqui

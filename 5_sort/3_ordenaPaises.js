/* 
  Documentação sobre sort(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  Dicas:
    1. sort() compara todos os items do array, de dois em dois;
    2. sort() ordena os items baseado em sua condição;
    3. Por padrão, sort() ordena alfabeticamente; 
    4. sort() sempre retorna um array 
    5. Deixe sua função genérica para que ela aceite qualquer array;

  Usando sort():
    1. Crie uma função chamada ordenaPaises;
    2. Essa função recebe dois parâmetros:
      - array de objetos;
      - string com ordem "crescente" ou "decrescente";
    3. A função então retorna o array ordenado baseado na ordem;
*/

const paises = [
  { nome: 'Brasil' },
  { nome: 'Angola' },
  { nome: 'Canadá' },
  { nome: 'Austrália' },
  { nome: 'França' },
];

/* 
  Retorno esperado "crescente":
  [
    { nome: 'Angola' },
    { nome: 'Austrália' },
    { nome: 'Brasil' },
    { nome: 'Canadá' },
    { nome: 'França' }
  ]
  
  Retorno esperado "decrescente":
  [
    { nome: 'França' },
    { nome: 'Canadá' },
    { nome: 'Brasil' },
    { nome: 'Austrália' },
    { nome: 'Angola' }
  ]
*/

// Crie sua função aqui

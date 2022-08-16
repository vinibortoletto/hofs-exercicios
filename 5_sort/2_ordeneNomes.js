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
    1. Crie uma função chamada ordeneNomes;
    2. Essa função recebe dois parâmetros:
      - array de strings;
      - string com ordem "crescente" ou "decrescente";
    3. A função então retorna o array ordenado baseado na ordem;
*/

const nomes = ['Mía', 'Miguel', 'Roberta', 'Giovanni', 'Diego', 'Lupita'];
// Retorno esperado:
// Crescente: ['Diego', 'Giovanni', 'Lupita', 'Miguel', 'Mía', 'Roberta']
// Decrescente: ['Roberta', 'Mía', 'Miguel', 'Lupita', 'Giovanni', 'Diego']

// Crie sua função aqui

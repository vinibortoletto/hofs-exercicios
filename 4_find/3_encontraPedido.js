/*
  Documentação sobre find():
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  Dicas: 
    1. find() para passa por todos os itens até satisfazer sua condição;
    2. find() sempre retorna um ELEMENTO ou UNDEFINED:
      a. elemento: retorna o primeiro item que satisfazer sua condição;
      b. undefined: se nenhum item satisfazer sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array;

  Usando find(): 
    1. Crie uma função chamada encontraPedido; 
    2. Essa função recebe dois parâmetros:
      - array de objetos (pedidos)
      - número de id do produto
    3. A função então retorna:
      - A string no formato: O pedido de número 123 possui os produtos: Chocolate, Ovos, Trigo.
*/

const pedidos = [
  {
    id: 098,
    produtos: ['Shampoo', 'Leite', 'Pão'],
  },
  {
    id: 123,
    produtos: ['Chocolate', 'Ovos', 'Trigo'],
  },
  {
    id: 765,
    produtos: ['Arroz', 'Feijão', 'Carne'],
  },
];
// Retorno esperado caso o id passado como parâmetro seja 123:
// O pedido de número 123 possui os produtos: Chocolate, Ovos, Trigo.

// Crie sua função aqui

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

const encontraPedido = (array, id) => {
  // Encontra pedido baseado no id
  const pedidoSelecionado = array.find((pedido) => pedido.id === id);

  // Salva a mensagem em uma variável usando template literals
  const mensagem = `O pedido de número ${
    pedidoSelecionado.id
  } possui os produtos: ${pedidoSelecionado.produtos.join(', ')}.`;

  // Retorna a mensagem
  return mensagem;
};

console.log(encontraPedido(pedidos, 123));

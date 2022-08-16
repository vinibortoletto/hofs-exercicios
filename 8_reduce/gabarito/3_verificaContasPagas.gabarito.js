const contas = [
  {
    tipo: 'Luz',
    valor: 120,
    pago: true,
  },

  {
    tipo: 'Internet',
    valor: 150,
    pago: true,
  },

  {
    tipo: 'Telefone',
    valor: 150,
    pago: true,
  },
];
// Retorno esperado: 'Todas as contas estão pagas'

const verificaContasPagas = (array) => {
  return array.reduce((acc, conta) => {
    if (conta.pago) return 'Todas as contas estão pagas';
    return 'Algumas contas não foram pagas';
  }, '');
};

console.log(verificaContasPagas(contas));

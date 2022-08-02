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
  // Verifica se todas as contas estão pagas
  if (array.every((conta) => conta.pago)) {
    return 'Todas as contas estão pagas';
  }

  // Caso uma ou mais contas não estejam pagas:
  return 'Algumas contas não foram pagas';
};

console.log(verificaContasPagas(contas));

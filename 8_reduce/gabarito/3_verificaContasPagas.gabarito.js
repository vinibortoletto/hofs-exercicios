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
  // Retorna o resultado do reduce
  return array.reduce((acc, conta) => {
    // Se alguma conta não estive paga, sempre retorna:
    if (acc === 'Algumas contas não foram pagas') return acc;

    // Se conta estiver paga, retorna:
    if (conta.pago) return 'Todas as contas estão pagas';

    // Caso contrário, retorna:
    return 'Algumas contas não foram pagas';
  }, '');
};

console.log(verificaContasPagas(contas));

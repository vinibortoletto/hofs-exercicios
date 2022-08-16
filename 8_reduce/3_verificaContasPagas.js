/* 
  Documentação sobre reduce(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  Dicas:
    1. reduce() é capaz de fazer tudo o que as outras hofs fazem;
    2. reduce() retorna o que você especificar;
    3. se não especificar seu retorno, nada será retornado;

  Usando reduce():
    1. Crie uma função chamada verificaContasPagas; 
    2. Essa função recebe um array de objetos como parâmetro; 
    3. A função então retorna:
      - Se todas as contas estiverem pagas: 'Todas as contas estão pagas'
      - Se pelo menos 1 conta não estiver paga: 'Algumas contas não foram pagas'
*/

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

// Crie sua função aqui

/*
  Documentação sobre every():
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  Dicas: 
  1. every() para passa por todos os itens até satisfazer sua condição;
  2. every() sempre retorna um booleano:
    a. true: se todos os itens do array satisfazer sua condição;
    b. false: se 1 ou mais itens do array não satisfazer sua condição;
  3. Deixe sua função genérica para que ela aceite qualquer array; 

  Usando every(): 
    1. Crie uma função chamada verificaContasPagas; 
    2. Essa função recebe um array de objetos como parâmetro; 
    3. A função então retorna:
      a. Se todas as contas estiver pagas: 'Todas as contas estão pagas'
      b. Se pelo menos 1 conta não estiver paga: 'Algumas contas não foram pagas'
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

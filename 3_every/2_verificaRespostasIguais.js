/*
  Documentação sobre every():
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  Usando every(): 
    1. Crie uma função chamada verificaRespostasIguais; 
    2. Essa função recebe um array de objetos como parâmetro; 
    3. A função então retorna:
      a. Se todas as respostas forem iguais: true
      b. Se pelo menos 1 resposta for diferente: false

  Dicas: 
    1. every() para passa por todos os itens até satisfazer sua condição;
    2. every() sempre retorna um booleano:
      a. true: se todos os itens do array satisfazer sua condição;
      b. false: se 1 ou mais itens do array não satisfazer sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array; 
*/

const pessoas = [
  { nome: 'Steve', resposta: 'Sim' },
  { nome: 'Jessica', resposta: 'Não' },
  { nome: 'Peter', resposta: 'Sim' },
  { nome: 'Elaine', resposta: 'Não' },
];
// Retorno esperado: 'Todas as contas estão pagas'

// Crie sua função aqui

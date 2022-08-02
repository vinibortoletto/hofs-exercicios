/*
  Documentação sobre every():
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

  Usando every(): 
    1. Crie uma função chamada verificaNumerosImpares; 
    2. Essa função recebe um array de números como parâmetro; 
    3. A função então retorna:
      a. Se todos os números forem ímpares: true
      b. Se pelo menos 1 número for par: false

  Dicas: 
    1. every() para passa por todos os itens até satisfazer sua condição;
    2. every() sempre retorna um booleano:
      a. true: se todos os itens do array satisfazer sua condição;
      b. false: se 1 ou mais itens do array não satisfazer sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array; 
*/

const numeros = [2, 15, 78, 19, 4, 20];
// Retorno esperado: false

// Crie sua função aqui
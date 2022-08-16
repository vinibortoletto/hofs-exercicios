/* 
  Documentação sobre some(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

  Dicas:
    1. some() para passa por todos os itens de um array até encontrar algum que satisfaça sua condição;
    2. some() sempre retorna um booleano:
      - true: se encontrar um elemento que satisfaça sua condição;
      - false: se não encontrar nenhum elemento que satisfaça sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array;

  Usando some():
    1. Crie uma função chamada validaIdades;
    2. Essa função recebe um array de idades como parâmetro;
    3. A função então retorna:
      - Se alguma idade for menor que 18, "Nem todos são maiores de idade"
      - Se todas idades forem maior que 18, "Todos são maiores de idade"
*/

const idades = [2, 4, 17, 31, 5, 111, 13];
// Retorno esperado: 'Nem todos são maiores de idade'

// Crie sua função aqui

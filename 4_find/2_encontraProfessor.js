/*
  Documentação sobre find():
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

  Dicas: 
    1. find() para passa por todos os itens até satisfazer sua condição;
    2. find() sempre retorna um ELEMENTO ou UNDEFINED:
      elemento: retorna o primeiro item que satisfazer sua condição;
      undefined: se nenhum item satisfazer sua condição;
    3. Deixe sua função genérica para que ela aceite qualquer array; 

  Usando find(): 
    1. Crie uma função chamada encontraProfessor; 
    2. Essa função recebe dois parâmetros:
      - array de objetos (professores)
      - string, que pode ser o nome do professor ou matéria
    3. A função então retorna o objeto do professor;
*/

const professores = [
  {
    nome: 'Carlos',
    materia: 'Matemática',
  },
  {
    nome: 'Bárbara',
    materia: 'Português',
  },
  {
    nome: 'Vanessa',
    materia: 'Física',
  },
  {
    nome: 'Fábio',
    materia: 'Literatura',
  },
];
//Retorno esperado caso parâmetro seja "Vanessa" ou "Física": {nome: Vanessa, materia: Física}

// Crie sua função aqui

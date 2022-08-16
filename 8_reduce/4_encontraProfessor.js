/* 
  Documentação sobre reduce(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

  Dicas:
    1. reduce() é capaz de fazer tudo o que as outras hofs fazem;
    2. reduce() retorna o que você especificar;
    3. se não especificar seu retorno, nada será retornado;

  Usando reduce():
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

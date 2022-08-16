/* 
  Documentação sobre filter(): 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

  Dicas:
    1. filter() pega todos os items que satisfazem um condição;
    2. filter() sempre retorna um array;
    3. se filter() não encontrar nenhum item que satisfaz sua condição, retorna um array vazio;

  Usando filter():
    1. Crie uma função chamada filtraTechsAprendidas;
    2. Essa função recebe um parâmetro:
      - array de objetos;
    3. A função então retorna um array contendo apenas as tecnologias já aprendidas;
*/

const techs = [
  { nome: 'html', aprendeu: true },
  { nome: 'react', aprendeu: false },
  { nome: 'javascript', aprendeu: true },
  { nome: 'typescript', aprendeu: false },
  { nome: 'jest', aprendeu: true },
  { nome: 'phyton', aprendeu: false },
  { nome: 'css', aprendeu: true },
];
/* 
  Retorno esperado:
  [
    { nome: 'html', aprendeu: true },
    { nome: 'javascript', aprendeu: true },
    { nome: 'jest', aprendeu: true },
    { nome: 'css', aprendeu: true }
  ]
*/

// Crie sua função aqui

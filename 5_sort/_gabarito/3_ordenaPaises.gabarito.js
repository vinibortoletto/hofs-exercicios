const paises = [
  { nome: 'Brasil' },
  { nome: 'Angola' },
  { nome: 'Canadá' },
  { nome: 'Austrália' },
  { nome: 'França' },
];

/* 
  Retorno esperado "crescente":
  [
    { nome: 'Angola' },
    { nome: 'Austrália' },
    { nome: 'Brasil' },
    { nome: 'Canadá' },
    { nome: 'França' }
  ]
  
  Retorno esperado "decrescente":
  [
    { nome: 'França' },
    { nome: 'Canadá' },
    { nome: 'Brasil' },
    { nome: 'Austrália' },
    { nome: 'Angola' }
  ]
*/

const ordenaPaises = (array, ordem) => {
  // Guarda array atual em uma nova variável
  const paisesOrdenados = array;

  // Se ordem é crescente:
  if (ordem === 'crescente') {
    paisesOrdenados.sort((a, b) => {
      if (a.nome > b.nome) return 1;
      if (a.nome < b.nome) return -1;
      return 0;
    });
  }

  // Se ordem é decrescente:
  if (ordem === 'decrescente') {
    paisesOrdenados.sort((a, b) => {
      if (b.nome > a.nome) return 1;
      if (b.nome < a.nome) return -1;
      return 0;
    });
  }

  // Retorna países ordenados
  return paisesOrdenados;
};

console.log(ordenaPaises(paises, 'crescente'));

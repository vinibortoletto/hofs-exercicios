const nomes = ['Mía', 'Miguel', 'Roberta', 'Giovanni', 'Diego', 'Lupita'];
// Retorno esperado:
// Crescente: ['Diego', 'Giovanni', 'Lupita', 'Miguel', 'Mía', 'Roberta']
// Decrescente: ['Roberta', 'Mía', 'Miguel', 'Lupita', 'Giovanni', 'Diego']

const ordeneNomes = (array, ordem) => {
  // Guarda array atual em um novo array
  const nomesOrdenados = array;

  // Se ordem é crescente:
  if (ordem === 'crescente') {
    nomesOrdenados.sort();
  }

  // Se ordem é decrescente:
  if (ordem === 'decrescente') {
    nomesOrdenados.sort().reverse();
  }

  // Retorna nomes ordenados
  return nomesOrdenados;
};

console.log(ordeneNomes(nomes, 'crescente'));

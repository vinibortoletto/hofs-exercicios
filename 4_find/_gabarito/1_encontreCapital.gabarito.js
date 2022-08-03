const paises = [
  {
    nome: 'Brasil',
    capital: 'Brasilia',
    moeda: 'Real',
    populacao: 214047375,
  },
  {
    nome: 'Argentina',
    capital: 'Buenos Aires',
    moeda: 'Peso Argentino',
    populacao: 47327407,
  },
  {
    nome: 'Tailândia',
    capital: 'Banguecoque',
    moeda: 'Bate',
    populacao: 68863514,
  },
];

const encontreCapital = (array, capital) => {
  // Encontra país com base na capital passa como parâmetro
  const paisSelecionado = array.find((pais) => pais.capital === capital);

  // Se paisSelecionado não for "undefined", retorna pais
  if (paisSelecionado) {
    return paisSelecionado;
  }

  // Se paisSelecionado for "undefined"
  return 'País não encontrado';
};

console.log(encontreCapital(paises, 'Brasilia'));


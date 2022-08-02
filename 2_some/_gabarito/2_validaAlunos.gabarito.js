const alunes = [
  {
    nome: 'Chaves',
    nota: 8,
  },

  {
    nome: 'Chiquinha',
    nota: 9,
  },

  {
    nome: 'Kiko',
    nota: 7,
  },

  {
    nome: 'Nhonho',
    nota: 7,
  },
];
// Retorno esperado: 'Todos os alunes foram aprovados'

const validaAlunes = (array) => {
  // Verifica se algum alune possui nota menor que 5
  if (array.some((alune) => alune.nota < 5)) {
    return 'Nem todos os alunes foram aprovados';
  }

  // Caso todos os alunes possuam notas maiores que 5:
  return 'Todos os alunes foram aprovados';
};

console.log(validaAlunes(alunes));

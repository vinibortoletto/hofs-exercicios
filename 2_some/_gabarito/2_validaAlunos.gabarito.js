const alunos = [
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
// Retorno esperado: 'Todos os alunos foram aprovados'

const validaAlunos = (array) => {
  // Verifica se algum aluno possui nota menor que 5
  if (array.some((aluno) => aluno.nota < 5)) {
    return 'Nem todos os alunos foram aprovados';
  }

  // Caso todos os alunos possuam notas maiores que 5:
  return 'Todos os alunos foram aprovados';
};

console.log(validaAlunos(alunos));

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

const encontraProfessor = (array, info) => {
  // Procura professor baseado na matéria
  const encontraPorMateria = array.find(
    (professor) => professor.materia === info
  );

  // Procura professor baseado no nome
  const encontraPorNome = array.find((professor) => professor.nome === info);

  // Se encontraPorMateria não for "undefined", pesquisa foi feita pela matéria, então retorna:
  if (encontraPorMateria) {
    return encontraPorMateria;
  }

  // Caso contrário a pesquisa foi feita pelo nome, então retorna:
  return encontraPorNome;
};

console.log(encontraProfessor(professores, 'Vanessa'));
console.log(encontraProfessor(professores, 'Física'));

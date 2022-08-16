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
  return array.reduce((acc, professor) => {
    if (professor.nome === info || professor.materia === info) return professor;
    return acc;
  }, {});
};

console.log(encontraProfessor(professores, 'Vanessa'));

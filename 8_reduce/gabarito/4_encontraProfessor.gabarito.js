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
  // Retorna o resultado do reduce
  return array.reduce((acc, professor) => {
    // Se nome/materia for igual info, retorna professor
    if (professor.nome === info || professor.materia === info) return professor;

    // Sempre retorna acc para evitar UNDEFINED quando passar por outros objetos
    return acc;
  }, {});
};

console.log(encontraProfessor(professores, 'Vanessa'));

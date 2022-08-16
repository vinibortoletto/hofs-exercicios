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

const filtraTechsAprendidas = (array) => {
  // Retorna e filtra apenas as techs que aprendeu
  return array.filter((tech) => tech.aprendeu);
};

console.log(filtraTechsAprendidas(techs));

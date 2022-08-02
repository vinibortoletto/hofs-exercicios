const pessoas = [
  { nome: 'Steve', resposta: 'Sim' },
  { nome: 'Jessica', resposta: 'Não' },
  { nome: 'Peter', resposta: 'Sim' },
  { nome: 'Elaine', resposta: 'Não' },
];
// Retorno esperado: false

const verificaRespostasIguais = (array) => {
  // Salva retorno em uma variável
  const resultado = array.every((pessoa, index) => {
    // Se for o primeiro item do array, retorna true
    if (index === 0) return true;

    // Verifica se resposta atual é igual à resposta anterior
    return pessoa.resposta === array[index - 1].resposta;
  });

  // Retorna resultado com true/false
  return resultado;
};

console.log(verificaRespostasIguais(pessoas));

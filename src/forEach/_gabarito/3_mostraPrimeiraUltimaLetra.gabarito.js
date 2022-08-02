const nomes = ['Lineuzinho', 'Dona Nenê', 'Tuco', 'Bebel', 'Agostinho'];
// Retorno esperado: ['Lo', 'Dê', 'To', 'Bl', 'Ao'];

const mostraPrimeiraUltimaLetra = (arrayDeNomes) => {
  const novoArray = [];

  arrayDeNomes.forEach((nome) => {
    novoArray.push(nome[0] + nome[nome.length - 1]);
  });

  return novoArray;
};

console.log(mostraPrimeiraUltimaLetra(nomes));
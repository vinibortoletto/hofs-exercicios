const nomes = ['Lineuzinho', 'Dona Nenê', 'Tuco', 'Bebel', 'Agostinho'];
// Retorno esperado: ['Lo', 'Dê', 'To', 'Bl', 'Ao'];

const mostraPrimeiraUltimaLetra = (array) => {
  return array.reduce((acc, nome) => {
    acc.push(nome[0] + nome[nome.length - 1]);
    return acc;
  }, []);
};

console.log(mostraPrimeiraUltimaLetra(nomes));

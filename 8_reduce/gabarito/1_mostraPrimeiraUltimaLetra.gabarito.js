const nomes = ['Lineuzinho', 'Dona Nenê', 'Tuco', 'Bebel', 'Agostinho'];
// Retorno esperado: ['Lo', 'Dê', 'To', 'Bl', 'Ao'];

const mostraPrimeiraUltimaLetra = (array) => {
  // Retorna o resultado de reduce
  return array.reduce((acc, nome) => {
    // Adiciona primeira e última letra ao acumulador
    acc.push(nome[0] + nome[nome.length - 1]);

    // Retorna acumulador
    return acc;
  }, []);
};

console.log(mostraPrimeiraUltimaLetra(nomes));

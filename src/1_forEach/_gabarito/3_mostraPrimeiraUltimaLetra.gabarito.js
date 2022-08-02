const nomes = ['Lineuzinho', 'Dona Nenê', 'Tuco', 'Bebel', 'Agostinho'];
// Retorno esperado: ['Lo', 'Dê', 'To', 'Bl', 'Ao'];

const mostraPrimeiraUltimaLetra = (arrayDeNomes) => {
  // Array vazio onde letras serão guardadas
  const novoArray = [];

  arrayDeNomes.forEach((nome) => {
    // Adiciona para "novoArray" a primeira e última letra de "nome"
    novoArray.push(nome[0] + nome[nome.length - 1]);
  });

  // Retorna array com primeira e última letra
  return novoArray;
};

console.log(mostraPrimeiraUltimaLetra(nomes));

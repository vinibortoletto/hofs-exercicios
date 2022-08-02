const carros = ['Celta', 'Gol', 'Chevette', 'Uno', 'Palio'];
// Retorno 'O melhor carro de todos está na lista'

const verificaCarro = (array) => {
  // Verifica se "Uno" está na lista de carros
  if (array.some((carro) => carro === 'Uno')) {
    return 'O melhor carro de todos está na lista';
  }

  // Caso "Uno" não seja encontrado na lista:
  return 'O melhor carro de todos NÃO está lista';
};

console.log(verificaCarro(carros));

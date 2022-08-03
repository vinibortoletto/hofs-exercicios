const numeros = [34, 3, 67, 19, 70, 21, 100];
// Retorno esperado:
// Crescente: [3, 19, 21, 34, 67, 70, 100]
// Decrescente: [100, 70, 67, 34, 21, 19, 3]

const ordeneNumeros = (array, ordem) => {
  // Salva números ordenados em uma variável
  const numerosOrdenados = array.sort((a, b) => {
    // Caso parâmetro ordem seja "crescente"
    if (ordem === 'crescente') {
      return a - b;
    }

    // Caso parâmetro ordem seja "decrescente"
    if (ordem === 'decrescente') {
      return b - a;
    }
  });

  // Retorna numeros ordenados
  return numerosOrdenados;
};

console.log(ordeneNumeros(numeros, 'crescente'));

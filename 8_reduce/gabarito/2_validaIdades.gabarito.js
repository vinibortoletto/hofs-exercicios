const idades = [2, 4, 17, 31, 5, 111, 13];
// Retorno esperado: 'Nem todos são maiores de idade'

const validaIdades = (array) => {
  // Retorna o resultado do reduce
  return array.reduce((acc, idade) => {
    // Se alguma idade for menor que 18, sempre retorna:
    if (acc === 'Nem todos são maiores de idade') return acc;

    // Se idade for maior que 18, retorna:
    if (idade >= 18) return 'Todos são maiores de idade';

    // Caso contrário, retorna:
    return 'Nem todos são maiores de idade';
  }, '');
};

console.log(validaIdades(idades));

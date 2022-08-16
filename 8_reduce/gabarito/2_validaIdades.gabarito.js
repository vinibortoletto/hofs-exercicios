const idades = [2, 4, 17, 31, 5, 111, 13];
// Retorno esperado: 'Nem todes são maiores de idade'

const validaIdades = (array) => {
  return array.reduce((acc, idade) => {
    if (idade > 18) return 'Todes são maiores de idade';
    return 'Nem todes são maiores de idade';
  }, '');
};

console.log(validaIdades(idades));

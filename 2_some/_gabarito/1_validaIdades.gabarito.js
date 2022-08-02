const idades = [2, 4, 17, 31, 5, 111, 13];
// Retorno esperado: 'Nem todos são maiores de idade'

const validaIdades = (array) => {
  // Verifica se exite alguma idade menor que 18
  if (array.some((idade) => idade < 18)) {
    return 'Nem todos são maiores de idade';
  }

  // Caso todas idades dentro do array seja maior que 18:
  return 'Todos são maiores de idade';
};

console.log(validaIdades(idades));

const dobraOsValores = require('./dobraOsValores');

describe('dobraOsValores', () => {
  it('1. deve ser uma função', () => {
    expect(typeof dobraOsValores).toBe('function');
  });

  it('2. deve retornar um array com os números dobrados corretamente', () => {
    const numerosPares = [2, 4, 6, 8, 10, 12, 14];
    const numerosParesDobrados = [4, 8, 12, 16, 20, 24, 28];

    const numerosImpares = [1, 3, 5, 7, 9, 11, 13];
    const numerosImparesDobrados = [2, 6, 10, 14, 18, 22, 26];

    expect(dobraOsValores(numerosPares)).toEqual(numerosParesDobrados);
    expect(dobraOsValores(numerosImpares)).toEqual(numerosImparesDobrados);
  });
});

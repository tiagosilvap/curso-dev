const calculadora = require('../models/calculadora.js');

test('Soma entre 5 + 2 deve retornar 7', () => {
  const resultado = calculadora.somar(5, 2);
  expect(resultado).toBe(7);
})
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Alcool gel', 'Mascara'))).toBe(true); // Obrigado Geovani Moura pelo Array.isArray()
    expect(productDetails('Alcool gel', 'Mascara').length).toBe(2);
    expect(typeof productDetails('Alcool gel', 'Mascara')[0] && typeof productDetails('Alcool gel', 'Mascara')[1]).toBe('object');
    expect(productDetails('Alcool gel', 'Mascara')[0] !== productDetails('Alcool gel', 'Mascara')[1]).toBe(true);
  });
});

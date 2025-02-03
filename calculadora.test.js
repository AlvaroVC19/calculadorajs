const { suma, resta, multi, divide } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(resta(5, 3)).toBe(2);
});

test('Multiplicacion 2 * 3 y devuelve 6', () => {
    expect(multi(2, 3)).toBe(6);
});

test('Divide 6 entre 3 y devuelve 2', () => {
    expect(divide(6, 3)).toBe(2);
});
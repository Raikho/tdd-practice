import calculator from '../functions/calculator.js'

test('add test, basic', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('add test, large numbers', () => {
    expect(calculator.add(240, 480)).toBe(720);
});

test('add test, negatives', () => {
    expect(calculator.add(24, -48)).toBe(-24);
});

test('add test, decimals', () => {
    expect(calculator.add(4.2, 2.8)).toBeCloseTo(7);
});

test('subtract test, basic', () => {
    expect(calculator.subtract(4, 1)).toBe(3);
});

test('subtract test, negatives', () => {
    expect(calculator.subtract(-20, 40)).toBe(-60);
});

test('subtract test, decimals', () => {
    expect(calculator.subtract(1.2, -2.4)).toBeCloseTo(3.6);
});

test('divide test, basic', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});

test('divide test, negatives', () => {
    expect(calculator.divide(40, -20)).toBe(-2);
});

test('divide test, decimals', () => {
    expect(calculator.divide(5, -2)).toBeCloseTo(-2.5);
});

test('multiply test, basic', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

test('multiply test, negatives', () => {
    expect(calculator.multiply(4, -20)).toBe(-80);
});

test('multiply test, decimals', () => {
    expect(calculator.multiply(1.1, 1.1)).toBeCloseTo(1.21);
});

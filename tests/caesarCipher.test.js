import caesarCipher from '../functions/caesarCipher.js'

test('single letter, no shift', () => {
    expect(caesarCipher('a', 0)).toBe('a');
});

test('single letter', () => {
    expect(caesarCipher('a', 1)).toBe('b');
});

test('wrap', () => {
    expect(caesarCipher('z', 1)).toBe('a');
});

test('negative wrap', () => {
    expect(caesarCipher('A', -1)).toBe('Z');
});

test('single word', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('some upper case letters', () => {
    expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
});

test('ignore whitespace', () => {
    expect(caesarCipher('Hello world', 1)).toBe('Ifmmp xpsme');
});

test('ignore whitespace', () => {
    expect(caesarCipher('Hello world', 1)).toBe('Ifmmp xpsme');
});

test('ignore punctuation', () => {
    expect(caesarCipher('Hello, world!', 1)).toBe('Ifmmp, xpsme!');
});

test('punctuation, wrapping', () => {
    expect(caesarCipher('Hello, world!', -27)).toBe('Gdkkn, vnqkc!');
});

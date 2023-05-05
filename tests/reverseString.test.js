import reverseString from '../functions/reverseString.js'

test('single letter', () => {
    expect(reverseString('A')).toBe('A');
});

test('single word', () => {
    expect(reverseString('Hello')).toBe('olleH');
});

test('multiple words', () => {
    expect(reverseString('Hello world')).toBe('dlrow olleH');
});

test('punctuation', () => {
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
});

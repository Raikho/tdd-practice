import capitalize from '../functions/capitalize.js'


test('capitalize: already capital', () => {
    expect(capitalize('H')).toBe('H');
});

test('capitalize: single letter', () => {
    expect(capitalize('h')).toBe('H');
});

test('capitalize: single word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize: multiple words', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('capitalize: punctuation', () => {
    expect(capitalize('hello, world!')).toBe('Hello, world!');
});

import capitalize from '../functions/capitalize.js'

test('capitalize: single letter', () => {
    expect(capitalize('h')).toBe('H');
});
import analyzeArray from '../functions/analyzeArray.js'

test('single value', () => {
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1,
    });
});

test('multiple of same value', () => {
    expect(analyzeArray([1,1,1,1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 4,
    });
});

test('different values', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('nevatives', () => {
    expect(analyzeArray([24,38,12,-12,15,100])).toEqual({
        average: 29.5,
        min: -12,
        max: 100,
        length: 6,
    });
});

test('decimals', () => {
    const object = analyzeArray([8.4,4.3,-1.1,2.2,10,42]);
    expect(object).toEqual(expect.objectContaining({
        //average: 10.967,
        min: -1.1,
        max: 42,
        length: 6,
    }));
    expect(object.average).toBeCloseTo(10.967);
});


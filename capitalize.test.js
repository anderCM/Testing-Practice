const Capitalize = require('./capitalize');

describe('Capitalize String', () => {
    test('Send uppercase string', () => {
        //arrange
        const word = 'HELLO WORLD';
        //act
        const result = Capitalize(word);
        //assert
        expect(result).toBe('Hello world');
    });

    test('Send lowercase string', () => {
        //arrange
        const word = 'hello world';
        //act
        const result = Capitalize(word);
        //assert
        expect(result).toBe('Hello world');
    });

    test('Send camelcase string', () => {
        //arrange
        const word = 'hello World';
        //act
        const result = Capitalize(word);
        //assert
        expect(result).toBe('Hello world');
    });
});
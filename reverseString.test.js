const ReverseString = require('./reverseString');

describe('Reverse string', () => {
    test('User provide any word', () => {
         //arrange
    const word = 'Hello World!';
    //act
    const result = ReverseString(word);
    //assert
    expect(result).toBe('!dlroW olleH');
    });
});
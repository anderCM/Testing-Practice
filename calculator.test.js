const Calculator = require('./calculator');

describe('Add Operations with calculator', () => {
    test('Add 2 positives numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.add(2, 5);
        //assert
        expect(result).toBe(7)
    });

    test('Add 1 positive and 1 negative', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.add(-2, 5);
        //assert
        expect(result).toBe(3)
    });

    test('Add 2 negative numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.add(-2, -5);
        //assert
        expect(result).toBe(-7)
    });
});


describe('Subtract Operations with calculator', () => {
    test('Subtract 2 positives numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.subtract(2, 5);
        //assert
        expect(result).toBe(-3)
    });

    test('Subtract 1 positive and 1 negative', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.subtract(-2, 5);
        //assert
        expect(result).toBe(-7)
    });

    test('Subtract 2 negative numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.subtract(-2, -5);
        //assert
        expect(result).toBe(3)
    });
});

describe('Divide Operations with calculator', () => {
    test('Divide 2 positives numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.divide(2, 5);
        //assert
        expect(result).toBe(0.4)
    });

    test('Divide 1 positive and 1 negative', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.divide(-2, 5);
        //assert
        expect(result).toBe(-0.4)
    });

    test('Divide 2 negative numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.divide(-2, -5);
        //assert
        expect(result).toBe(0.4)
    });
});

describe('Multiply Operations with calculator', () => {
    test('Multiply 2 positives numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.multiply(2, 5);
        //assert
        expect(result).toBe(10)
    });

    test('Multiply 1 positive and 1 negative', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.multiply(-2, 5);
        //assert
        expect(result).toBe(-10)
    });

    test('Multiply 2 negative numbers', () => {
        //arrange
        const calculator = new Calculator();
        //act
        const result = calculator.multiply(-2, -5);
        //assert
        expect(result).toBe(10)
    });
});
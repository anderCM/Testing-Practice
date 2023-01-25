const StringLength = require("./stringLength");

describe("Count lenght string", () => {

  test("More than 10 characters", () => {
    //arrange
    const word = 'Hello World!';
    //act
    const result = StringLength(word);
    //assert
    expect(result).toBe(false);
  });

  test("Exactly 10 characters", () => {
    //Arrange
    const word = 'Bye World!';
    //act
    const result = StringLength(word);
    //assert
    expect(result).toBe(10);
  });

  test("Less than 2 characters", () => {
    //Arrange
    const word = 'A';
    //act
    const result = StringLength(word);
    //assert
    expect(result).toBe(1);
  });

  test("0 characters", () => {
    //Arrange
    const word = '';
    //act
    const result = StringLength(word);
    //assert
    expect(result).toBe(false);
  });
});

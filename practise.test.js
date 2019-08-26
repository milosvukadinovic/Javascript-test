const practice = require('./practice.js');
const calculator = practice.calculator;
const capitalize = practice.capitalize;
const reverseString = practice.reverseString;
const arrayAnalysis = practice.arrayAnalysis;
const chiper = practice.caesarCipher;
const decipher = practice.caesarDecipher;

test('Capitalize first letter of a word.', () => {
  expect(capitalize('string')).toBe('String');
});

test('Capitalize first letter of a sentence.', () => {
  expect(capitalize('string test two')).toBe('String test two');
});

test('Reverse a string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('Reverse sentence', () => {
  expect(reverseString('string test')).toBe('tset gnirts');
});

test('Two plus Five to equal Seven', () => {
  expect(calculator.add(2, 5)).toBe(7);
});

test('Ten minus Four to equal Six', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('Four times Five to be equal to Twenty', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

test('Divide Fifteen with Five to equal Three', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});

test('abc with key 2 equal to cde', () => {
  expect(chiper('abc', 2)).toBe('cde');
});
test('cde with key 2 equal to abc', () => {
  expect(decipher('cde', 2)).toBe('abc');
});

test('Given an array of numbers, should return 3,0,6,7', () => {
  expect(arrayAnalysis([0, 1, 2, 3, 4, 5, 6])).toMatchObject({
    average: 3,
    min: 0,
    max: 6,
    length: 7,
  });
});

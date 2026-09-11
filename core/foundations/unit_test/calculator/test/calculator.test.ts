import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  describe('addition', () => {
    test('adds two numbers', () => {
      expect(Calculator.addition(2, 3)).toBe(5);
    });
  });

  describe('subtraction', () => {
    test('subtracts two numbers', () => {
      expect(Calculator.subtraction(5, 2)).toBe(3);
    });
  });

  describe('multiplication', () => {
    test('multiplies through repeated addition', () => {
      expect(Calculator.multiplication(3, 4)).toBe(12);
    });
  });

  describe('division', () => {
    test('divides through repeated subtraction', () => {
      expect(Calculator.division(10, 3)).toBe(3);
    });
  });

  describe('modulus', () => {
    test('reuses division and multiplication', () => {
      expect(Calculator.modulus(10, 3)).toBe(1);
    });
  });
});

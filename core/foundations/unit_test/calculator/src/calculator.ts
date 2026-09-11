export class Calculator {
  static addition(a: number, b: number): number {
    return a + b;
  }

  static subtraction(a: number, b: number): number {
    return a - b;
  }

  static multiplication(a: number, b: number): number {
    if (b < 0) {
      throw new RangeError('The multiplier must be non-negative');
    }

    let result = 0;
    let count = 0;
    while (count < b) {
      result = Calculator.addition(result, a);
      count += 1;
    }
    return result;
  }

  static division(a: number, b: number): number {
    if (b <= 0) {
      throw new RangeError('The divisor must be positive');
    }

    let dividend = a;
    let quotient = 0;
    while (dividend >= b) {
      dividend = Calculator.subtraction(dividend, b);
      quotient += 1;
    }
    return quotient;
  }

  static modulus(a: number, b: number): number {
    if (b <= 0) {
      throw new RangeError('The divisor must be positive');
    }

    const quotient = Calculator.division(a, b);
    const product = Calculator.multiplication(quotient, b);
    return Calculator.subtraction(a, product);
  }
}

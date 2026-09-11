import { Numbers } from '../src/numbers';

describe('Numbers recursive', () => {
  test('sum_of_first_n_rec', () => {
    expect(Numbers.sum_of_first_n_rec(0)).toBe(0);
    expect(Numbers.sum_of_first_n_rec(3)).toBe(6);
  });

  test('factorial_rec', () => {
    expect(Numbers.factorial_rec(0)).toBe(1);
    expect(Numbers.factorial_rec(4)).toBe(24);
  });

  test('fibonacci_rec', () => {
    expect(Numbers.fibonacci_rec(0)).toBe(0);
    expect(Numbers.fibonacci_rec(1)).toBe(1);
    expect(Numbers.fibonacci_rec(6)).toBe(8);
  });

  test('greatest_common_divisor_rec', () => {
    expect(Numbers.greatest_common_divisor_rec(12, 8)).toBe(4);
    expect(Numbers.greatest_common_divisor_rec(7, 5)).toBe(1);
  });

  test('least_common_multiple_rec', () => {
    expect(Numbers.least_common_multiple_rec(4, 6)).toBe(12);
    expect(Numbers.least_common_multiple_rec(6, 8)).toBe(24);
  });
});

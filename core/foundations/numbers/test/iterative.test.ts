import { Numbers } from '../src/numbers';

describe('Numbers iterative', () => {
  test('sum_of_first_n_ite', () => {
    expect(Numbers.sum_of_first_n_ite(0)).toBe(0);
    expect(Numbers.sum_of_first_n_ite(3)).toBe(6);
  });

  test('factorial_ite', () => {
    expect(Numbers.factorial_ite(0)).toBe(1);
    expect(Numbers.factorial_ite(4)).toBe(24);
  });

  test('fibonacci_ite', () => {
    expect(Numbers.fibonacci_ite(0)).toBe(0);
    expect(Numbers.fibonacci_ite(1)).toBe(1);
    expect(Numbers.fibonacci_ite(6)).toBe(8);
  });

  test('greatest_common_divisor_ite', () => {
    expect(Numbers.greatest_common_divisor_ite(12, 8)).toBe(4);
    expect(Numbers.greatest_common_divisor_ite(7, 5)).toBe(1);
  });

  test('least_common_multiple_ite', () => {
    expect(Numbers.least_common_multiple_ite(4, 6)).toBe(12);
    expect(Numbers.least_common_multiple_ite(6, 8)).toBe(24);
  });
});

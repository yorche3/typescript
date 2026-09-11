export class Numbers {
  static sum_of_first_n_rec(n: number): number {
    if (n <= 0) {
      return 0;
    }
    return n + Numbers.sum_of_first_n_rec(n - 1);
  }

  static factorial_rec(n: number): number {
    if (n <= 1) {
      return 1;
    }
    return n * Numbers.factorial_rec(n - 1);
  }

  static fibonacci_rec(n: number): number {
    if (n <= 1) {
      return n;
    }
    return Numbers.fibonacci_rec(n - 1) + Numbers.fibonacci_rec(n - 2);
  }

  static greatest_common_divisor_rec(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return Numbers.greatest_common_divisor_rec(b, a % b);
  }

  static least_common_multiple_rec(a: number, b: number): number {
    if (a === 0 || b === 0) {
      return 0;
    }
    return (a / Numbers.greatest_common_divisor_rec(a, b)) * b;
  }

  static sum_of_first_n_acc(n: number): number {
    function helper(current: number, accumulator: number): number {
      if (current <= 0) {
        return accumulator;
      }
      return helper(current - 1, current + accumulator);
    }
    return helper(n, 0);
  }

  static factorial_acc(n: number): number {
    function helper(current: number, accumulator: number): number {
      if (current <= 1) {
        return accumulator;
      }
      return helper(current - 1, current * accumulator);
    }
    return helper(n, 1);
  }

  static fibonacci_acc(n: number): number {
    function helper(position: number, previous: number, current: number): number {
      if (position <= 0) {
        return previous;
      }
      if (position === 1) {
        return current;
      }
      return helper(position - 1, current, previous + current);
    }
    return helper(n, 0, 1);
  }

  static greatest_common_divisor_acc(a: number, b: number): number {
    function helper(x: number, y: number): number {
      if (y === 0) {
        return x;
      }
      return helper(y, x % y);
    }
    return helper(a, b);
  }

  static least_common_multiple_acc(a: number, b: number): number {
    if (a === 0 || b === 0) {
      return 0;
    }
    return (a / Numbers.greatest_common_divisor_acc(a, b)) * b;
  }

  static sum_of_first_n_ite(n: number): number {
    let result = 0;
    for (let current = 1; current <= n; current += 1) {
      result += current;
    }
    return result;
  }

  static factorial_ite(n: number): number {
    let result = 1;
    for (let current = 2; current <= n; current += 1) {
      result *= current;
    }
    return result;
  }

  static fibonacci_ite(n: number): number {
    if (n <= 1) {
      return n;
    }

    let previous = 0;
    let current = 1;
    for (let position = 2; position <= n; position += 1) {
      const next = previous + current;
      previous = current;
      current = next;
    }
    return current;
  }

  static greatest_common_divisor_ite(a: number, b: number): number {
    let x = a;
    let y = b;
    while (y !== 0) {
      const remainder = x % y;
      x = y;
      y = remainder;
    }
    return x;
  }

  static least_common_multiple_ite(a: number, b: number): number {
    if (a === 0 || b === 0) {
      return 0;
    }
    return (a / Numbers.greatest_common_divisor_ite(a, b)) * b;
  }
}

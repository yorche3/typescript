// Casos de prueba de la especificación 05_Naive_Sort.md
//
// Caso nulo incluido: en TypeScript un array puede ser `null`, así que el
// indicador de fallo del contrato es `null`, distinguible del array vacío. No se
// espera ninguna excepción.
//
// Aislamiento: los arrays de JavaScript son mutables y los tres algoritmos pueden
// ordenar in-place, así que cada caso ordena una copia del fixture compartido.

import { NaiveSort } from '../src/naive_sort';

const standardInput = [5, 2, 9, 1, 5, 6];
const standardOutput = [1, 2, 5, 5, 6, 9];

const sortedInput = [1, 2, 3, 4, 5];
const sortedOutput = [1, 2, 3, 4, 5];

const reverseInput = [5, 4, 3, 2, 1];
const reverseOutput = [1, 2, 3, 4, 5];

const identicalInput = [7, 7, 7, 7];
const identicalOutput = [7, 7, 7, 7];

const negativeInput = [3, -1, 4, -5, 0];
const negativeOutput = [-5, -1, 0, 3, 4];

const singleInput = [42];
const singleOutput = [42];

const emptyInput: number[] = [];
const emptyOutput: number[] = [];

const nullInput = null;
const nullOutput = null;

interface SortCase {
  description: string;
  input: number[] | null;
  expected: number[] | null;
}

// Tabla de casos: descripción, entrada y salida esperada.
const cases: SortCase[] = [
  { description: 'an unsorted array', input: standardInput, expected: standardOutput },
  { description: 'an already sorted array', input: sortedInput, expected: sortedOutput },
  { description: 'a reverse ordered array', input: reverseInput, expected: reverseOutput },
  { description: 'an array of identical elements', input: identicalInput, expected: identicalOutput },
  { description: 'an array with negative numbers', input: negativeInput, expected: negativeOutput },
  { description: 'a single element array', input: singleInput, expected: singleOutput },
  { description: 'an empty array', input: emptyInput, expected: emptyOutput },
  { description: 'a null input', input: nullInput, expected: nullOutput }
];

// Helper compartido: recibe el nombre del algoritmo y la función a probar, y
// registra un test por caso cuyo nombre es el mensaje del contrato, porque Jest
// no admite mensajes por aserción ("Expect takes at most one argument.").
function assertSortsAllCases(
  algorithm: string,
  sort: (array: number[] | null) => number[] | null
): void {
  cases.forEach((testCase) => {
    test(`${algorithm} should sort ${testCase.description}`, () => {
      const input = testCase.input === null ? null : [...testCase.input];

      expect(sort(input)).toEqual(testCase.expected);
    });
  });
}

describe('naive_sort', () => {
  assertSortsAllCases('selection_sort', NaiveSort.selection_sort);
  assertSortsAllCases('bubble_sort', NaiveSort.bubble_sort);
  assertSortsAllCases('insertion_sort', NaiveSort.insertion_sort);
});

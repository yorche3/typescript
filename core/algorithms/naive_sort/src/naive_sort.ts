// naive_sort — ordenamientos elementales O(n²).
//
// Especificación: 05_Naive_Sort
//
// Contrato: las tres funciones reciben un array de enteros y devuelven el array
// ordenado de menor a mayor (in-place o como copia ordenada), sin invocar
// `Array.prototype.sort` ni ninguna otra ayuda de ordenamiento de la biblioteca
// estándar y sin estructuras auxiliares complejas.
// API: los tres métodos estáticos de la clase `NaiveSort` — `selection_sort`,
// `bubble_sort` e `insertion_sort`, con los nombres `snake_case` de la
// especificación, como en la clase `Numbers` de `core/foundations/numbers/`.
// Si la entrada es `null` devuelve `null` como indicador de fallo; si está vacía
// devuelve el mismo array vacío. No lanza excepciones.
//
// Implementación pendiente: la escribe el autor. Esta delegación solo genera el
// esqueleto y las pruebas unitarias.
export class NaiveSort {
  static selection_sort(array: number[] | null): number[] | null {
    if (array === null) return null;
    const n = array.length;
    if (n < 2) return array;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
    return array;
  }

  static bubble_sort(array: number[] | null): number[] | null {
    if (array === null) return null;
    const n = array.length;
    if (n < 2) return array;
    for (let i = 0; i < n - 1; i++) {
      var swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return array;
  }

  static insertion_sort(array: number[] | null): number[] | null {
    if (array === null) return null;
    const n = array.length;
    if (n < 2) return array;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = key;
    }
    return array;
  }
}
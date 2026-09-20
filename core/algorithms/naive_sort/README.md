# Naive Sort — TypeScript

Implementación de la especificación [05_Naive_Sort](https://yorche3.github.io/programming_languages/core/algorithms/05_Naive_Sort/) en **TypeScript**, con **Jest** y **ts-jest** para las pruebas unitarias y `tsc --noEmit` como verificación estática.

Los tres algoritmos elementales de ordenamiento $O(n^2)$ — **selection sort**, **bubble sort** e **insertion sort** — reordenan el array recibido y lo devuelven (o devuelven `null` si la entrada es `null`), sin invocar `Array.prototype.sort` ni ninguna otra ayuda de ordenamiento de la biblioteca estándar.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo / Directorio | Propósito |
|----------------------|-----------|
| [`package.json`](package.json) | Manifiesto del paquete, scripts `test`/`build` y devDependencies (Jest, ts-jest, TypeScript, `@types/jest`). |
| [`tsconfig.json`](tsconfig.json) | Compilación estricta (`strict`, `NodeNext`, ES2022) sobre `src/` y `test/`. |
| [`jest.config.cjs`](jest.config.cjs) | Configuración de Jest: preset `ts-jest`, raíz `test/`, patrón `**/*.test.ts`. |
| [`src/naive_sort.ts`](src/naive_sort.ts) | Clase `NaiveSort` con los 3 métodos estáticos del contrato. |
| [`test/naive_sort.test.ts`](test/naive_sort.test.ts) | Suite Jest: 3 algoritmos × 8 casos. |
| [`.gitignore`](.gitignore) | Ignora `node_modules/`, `dist/`, `coverage/` y `package-lock.json`. |

```text
naive_sort/
├── package.json
├── tsconfig.json
├── jest.config.cjs
├── src/
│   └── naive_sort.ts          # clase NaiveSort: 3 algoritmos
├── test/
│   └── naive_sort.test.ts     # 3 × 8 casos
├── .gitignore
└── README.md
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El paquete se creó con `npm init -y` y se configuró como el resto de módulos TypeScript del repositorio (`core/foundations/numbers/`): TypeScript en modo estricto, Jest con `ts-jest`, código en `src/` y pruebas en `test/`. No hay código de ejemplo ni punto de entrada: el paquete es una librería.

**EN:** The package was created with `npm init -y` and configured like the rest of the TypeScript modules in the repository (`core/foundations/numbers/`): TypeScript in strict mode, Jest with `ts-jest`, code under `src/`, and tests under `test/`. There is no example code or entry point: the package is a library.

### Inicialización / Initialization

```bash
mkdir -p typescript/core/algorithms/naive_sort
cd typescript/core/algorithms/naive_sort
npm init -y
npm install
```

---

## 📄 Configuración clave / Key Configuration

### `package.json` — scripts y dependencias

```json
{
  "name": "typescript-naive_sort",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "test": "jest --runInBand",
    "build": "tsc --noEmit"
  },
  "devDependencies": {
    "@types/jest": "^29.5.14",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5",
    "typescript": "^5.8.3"
  }
}
```

### `tsconfig.json` — compilación estricta

| Opción | Valor | Motivo |
| ------ | ----- | ------ |
| `target` / `module` | `ES2022` / `NodeNext` | Ejecución en Node.js con módulos nativos. |
| `strict` | `true` | Sin `any` implícitos ni accesos nulos sin comprobar: el contrato declara `number[] \| null`. |
| `types` | `["jest"]` | Tipos globales de `describe`/`test`/`expect` en las suites. |
| `include` | `src/**/*.ts`, `test/**/*.ts` | El type-check cubre módulo y pruebas. |

### `src/naive_sort.ts` — contrato e implementación

**ES:** Los tres métodos estáticos reciben el array (o `null`) y devuelven el mismo array reordenado. Con menos de dos elementos el array vuelve sin cambios y ningún método lanza excepciones.

**EN:** The three static methods take the array (or `null`) and return the same array reordered. With fewer than two elements the array is returned unchanged and no method throws.

```ts
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
}
```

| Elemento del contrato | Representación en TypeScript |
| --------------------- | ---------------------------- |
| Array de enteros | `number[]` (índices 0-based) |
| Caso nulo | `null` (indicador de fallo; representable en un array) |
| Array vacío | `[]` (`length === 0`) |
| Orden | in-place sobre el array recibido, devuelve la misma referencia |
| Nombres de la especificación | `selection_sort`, `bubble_sort`, `insertion_sort` (snake_case, idénticos a la especificación y a la clase `Numbers`) |

### Suite de pruebas / Test suite

**ES:** La suite guarda los fixtures en constantes, los agrupa en una tabla `SortCase` y usa un helper compartido que recibe el nombre del algoritmo y el método a probar; cada caso ordena una copia (`[...input]`), porque el orden es *in-place*.

**EN:** The suite keeps the fixtures in constants, groups them in a `SortCase` table, and uses a shared helper that receives the algorithm name and the method under test; each case sorts a copy (`[...input]`), because sorting is *in-place*.

```ts
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
```

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- **Node.js** v22.22.1 y **npm** 11.11.1; las dependencias de Jest son locales al paquete.

```bash
node --version
npm --version
```

### Verificación estática y pruebas / Static check & tests

```bash
cd typescript/core/algorithms/naive_sort
npm install
npm run build
npm test
```

**Salida real / Actual output:**

```text
$ npm run build

> typescript-naive_sort@1.0.0 build
> tsc --noEmit
```

```text
$ npm test

> typescript-naive_sort@1.0.0 test
> jest --runInBand

PASS test/naive_sort.test.ts
  naive_sort
    ✓ selection_sort should sort an unsorted array (4 ms)
    ✓ selection_sort should sort an already sorted array
    ✓ selection_sort should sort a reverse ordered array
    ✓ selection_sort should sort an array of identical elements (1 ms)
    ✓ selection_sort should sort an array with negative numbers
    ✓ selection_sort should sort a single element array
    … (24 tests)
Test Suites: 1 passed, 1 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        0.317 s
Ran all test suites.
```

> **ES:** `tsc --noEmit` compila el módulo y la suite en modo estricto sin errores ni warnings (verificación estática) y `npm test` ejecuta 24 tests, uno por caso y algoritmo, cada uno nombrado con el mensaje del contrato.
> **EN:** `tsc --noEmit` compiles the module and the suite in strict mode with no errors or warnings (static check) and `npm test` runs 24 tests, one per case and algorithm, each named with the contract message.

---

## 🧠 Algoritmos y operaciones / Algorithms & Operations

| Función / Algorithm | Enfoque / Approach | Descripción / Description |
| ------------------- | ------------------ | ------------------------- |
| `selection_sort(array)` | iterativo, in-place | Busca el mínimo del tramo no ordenado con `minIndex` y lo intercambia al inicio con desestructuración. $O(n^2)$ siempre. |
| `bubble_sort(array)` | iterativo, in-place, con bandera | Compara adyacentes e intercambia; sale antes con `if (!swapped) break` cuando una pasada no intercambia nada. $O(n^2)$ peor/promedio, $O(n)$ mejor. |
| `insertion_sort(array)` | iterativo, in-place, estable | Guarda `key`, desplaza el sub-array ordenado con `while (j >= 0 && array[j] > key)` y lo inserta en su posición. $O(n^2)$ peor/promedio, $O(n)$ mejor. |

| Caso (descripción en la suite) | Entrada | Salida esperada |
| ------------------------------ | ------- | --------------- |
| an unsorted array | `[5, 2, 9, 1, 5, 6]` | `[1, 2, 5, 5, 6, 9]` |
| an already sorted array | `[1, 2, 3, 4, 5]` | `[1, 2, 3, 4, 5]` |
| a reverse ordered array | `[5, 4, 3, 2, 1]` | `[1, 2, 3, 4, 5]` |
| an array of identical elements | `[7, 7, 7, 7]` | `[7, 7, 7, 7]` |
| an array with negative numbers | `[3, -1, 4, -5, 0]` | `[-5, -1, 0, 3, 4]` |
| a single element array | `[42]` | `[42]` |
| an empty array | `[]` | `[]` |
| a null input | `null` | `null` |

---

## 📝 Notas de implementación / Implementation Notes

- **ES:** Divergencia idiomática aceptada: los tres algoritmos ordenan **in-place** el array recibido y devuelven esa misma referencia, variante que la especificación permite. Por eso la suite ordena una copia (`[...input]`) en cada caso, para no contaminar los fixtures compartidos.
- **EN:** Accepted idiomatic divergence: all three algorithms sort the received array **in-place** and return that same reference, a variant the specification allows. That is why the suite sorts a `[...input]` copy per case, so the shared fixtures are not polluted.
- **ES:** Caso nulo incluido: un array de JavaScript admite `null`, así que el indicador de fallo del contrato es `null`, distinguible del array vacío (`[]`), y la suite lo comprueba como octavo caso. Ningún método lanza excepciones.
- **EN:** Null case included: a JavaScript array admits `null`, so the contract's failure indicator is `null`, distinguishable from the empty array (`[]`), and the suite checks it as the eighth case. No method throws.
- **ES:** `bubble_sort` conserva la optimización de salida temprana: la bandera `swapped` y `if (!swapped) break` reproducen el `if not swapped: break` del pseudocódigo (mejor caso $O(n)$). La bandera no es observable en la salida, así que su presencia se verifica contra el pseudocódigo.
- **EN:** `bubble_sort` keeps the early-exit optimization: the `swapped` flag and `if (!swapped) break` reproduce the pseudocode's `if not swapped: break` (best case $O(n)$). The flag is not observable in the output, so its presence is verified against the pseudocode.
- **ES:** Los bucles del pseudocódigo se traducen a `for (let i = 0; i < n - 1; i++)` y `for (let j = 0; j < n - 1 - i; j++)` (el equivalente exacto de `for j = 0 to n - 2 - i`); el intercambio usa desestructuración (`[a, b] = [b, a]`) y no se invoca `Array.prototype.sort` ni ninguna otra ayuda de ordenamiento.
- **EN:** The pseudocode loops translate to `for (let i = 0; i < n - 1; i++)` and `for (let j = 0; j < n - 1 - i; j++)` (the exact equivalent of `for j = 0 to n - 2 - i`); swaps use destructuring (`[a, b] = [b, a]`) and `Array.prototype.sort` or any other sorting helper is never called.
- **ES:** `insertion_sort` traduce el `while j >= 0 and arr[j] > key` del pseudocódigo literalmente sobre el array recibido y la comparación estricta (`>`) lo mantiene estable.
- **EN:** `insertion_sort` translates the pseudocode's `while j >= 0 and arr[j] > key` literally over the received array and the strict comparison (`>`) keeps it stable.
- **ES:** Jest 29 no admite mensaje en `expect` (`Expect takes at most one argument.`), así que el mensaje del contrato viaja en el **nombre del test** que registra el helper (`selection_sort should sort an unsorted array`), que es lo que aparece en el reporte de fallos.
- **EN:** Jest 29 does not accept a message in `expect` (`Expect takes at most one argument.`), so the contract message travels in the **test name** registered by the helper (`selection_sort should sort an unsorted array`), which is what shows up in the failure report.
- **ES:** Nota de desviación respecto a la ubicación esperada: se conservan `src/naive_sort.ts` (solo cambia la extensión) y `test/naive_sort.test.ts` (sufijo `.test.ts`, el patrón que declara `jest.config.cjs`, como en `numbers/`); no se añade `run_tests.ts` porque `npm test` ejecuta Jest. El nombre del paquete es `typescript-naive_sort` para mantener el prefijo de los módulos TypeScript del repositorio.
- **EN:** Deviation note from the expected location: `src/naive_sort.ts` (only the extension changes) and `test/naive_sort.test.ts` (the `.test.ts` suffix declared by `jest.config.cjs` pattern, as in `numbers/`) are kept; no `run_tests.ts` is added because `npm test` runs Jest. The package name is `typescript-naive_sort` to keep the prefix of the repository's TypeScript modules.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*[← Volver a Algoritmos Puros](../README.md)*

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

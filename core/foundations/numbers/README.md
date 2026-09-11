# Numbers — TypeScript

Implementación de la especificación [04_Numbers](https://yorche3.github.io/programming_languages/core/foundations/04_Numbers/) en **TypeScript**, usando una estructura tipo librería con `src/` y `test/`, y **Jest** con `ts-jest` como framework de pruebas unitarias.

El módulo implementa los cinco algoritmos en tres enfoques: recursivo directo (`_rec`), recursivo con acumulador (`_acc`) e iterativo (`_ite`).

---

## 📂 Archivos y estructura / Files & Structure

| Archivo / Directorio | Propósito |
|----------------------|-----------|
| [`package.json`](package.json) | Scripts y dependencias de desarrollo. |
| [`tsconfig.json`](tsconfig.json) | Configuración TypeScript con NodeNext y tipos Jest. |
| [`jest.config.cjs`](jest.config.cjs) | Configuración del runner Jest. |
| [`src/numbers.ts`](src/numbers.ts) | Implementación de los 15 métodos. |
| [`test/recursive.test.ts`](test/recursive.test.ts) | Suite `_rec`: 5 tests agrupados por método y 11 assertions. |
| [`test/iterative.test.ts`](test/iterative.test.ts) | Suite `_ite`: 5 tests agrupados por método y 11 assertions. |
| [`.gitignore`](.gitignore) | Ignora dependencias y artefactos generados. |

```text
numbers/
├── package.json
├── tsconfig.json
├── jest.config.cjs
├── src/
│   └── numbers.ts
├── test/
│   ├── recursive.test.ts
│   └── iterative.test.ts
├── .gitignore
└── README.md
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se creó manualmente como una librería TypeScript. El código de producción vive en `src/` y las pruebas en `test/`. Jest descubre las suites mediante `jest.config.cjs`, mientras `ts-jest` transpila TypeScript durante la ejecución.

**EN:** The project was created manually as a TypeScript library-style module. Production code lives in `src/`, and tests live in `test/`. Jest discovers the suites through `jest.config.cjs`, while `ts-jest` transpiles TypeScript during execution.

Los cinco algoritmos se implementan en tres enfoques:

| Enfoque | Sufijo | Ejemplo | ¿Tiene suite propia? |
|---------|--------|---------|:--------------------:|
| Recursivo directo | `_rec` | `fibonacci_rec` | Sí |
| Recursivo con acumulador | `_acc` | `fibonacci_acc` | No, por la ausencia de TCO garantizada |
| Iterativo | `_ite` | `fibonacci_ite` | Sí |

**Combinación aplicada:** TCO no garantizada + iteración nativa (`for`/`while`) ✅ → `_rec` + `_ite` = **2 suites, 10 tests agrupados por método y 22 assertions**.

**Applied combination:** No guaranteed TCO + native iteration (`for`/`while`) ✅ → `_rec` + `_ite` = **2 suites, 10 tests grouped by method, and 22 assertions**.

### Inicialización / Initialization

```bash
mkdir -p typescript/core/foundations/numbers/{src,test}
cd typescript/core/foundations/numbers
npm init -y
npm install --save-dev jest ts-jest typescript @types/jest
```

Después se añaden la configuración, el módulo y las suites de pruebas.

---

## 📄 Archivos de configuración clave / Key Configuration Files

### `package.json`

```json
{
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

### `jest.config.cjs`

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts']
};
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "isolatedModules": true,
    "types": ["jest"]
  }
}
```

`module` y `moduleResolution` usan `NodeNext` conjuntamente. `types: ["jest"]` hace visibles `describe`, `test` y `expect` durante el type-check. Jest y sus tipos son dependencias locales del paquete; no necesitan instalación global.

`module` and `moduleResolution` use `NodeNext` together. `types: ["jest"]` exposes `describe`, `test`, and `expect` during type checking. Jest and its types are local package dependencies; they do not need to be installed globally.

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- Node.js.
- npm.
- TypeScript.
- Jest, `ts-jest` y `@types/jest` como dependencias de desarrollo locales.

Verificar el entorno:

```bash
node --version
npm --version
npx tsc --version
```

### Instalar dependencias / Install dependencies

```bash
cd typescript/core/foundations/numbers
npm install
```

### Ejecutar las pruebas / Run tests

```bash
npm test
```

### Comprobar tipos / Type check

```bash
npm run build
```

### Salida esperada / Expected output

```text
Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
```

Las diez pruebas de Jest agrupan 22 assertions: 11 para `_rec` y 11 para `_ite`.

The ten Jest tests group 22 assertions: 11 for `_rec` and 11 for `_ite`.

---

## 🧠 Operaciones / Operations

| Función | `_rec` | `_acc` | `_ite` |
|---------|--------|--------|--------|
| `sum_of_first_n` | Recursión directa | Helper con acumulador | `for` |
| `factorial` | Recursión directa | Helper con acumulador | `for` |
| `fibonacci` | Dos llamadas recursivas | Dos acumuladores | `for` |
| `greatest_common_divisor` | Euclides recursivo | Helper de Euclides | `while` |
| `least_common_multiple` | Usa MCD y aritmética | Usa MCD y aritmética | Usa MCD y aritmética |

Las suites agrupan los casos por método: un test por algoritmo con varias assertions dentro.

The suites group cases by method: one test per algorithm with multiple assertions inside.

---

## 📝 Notas de implementación / Implementation Notes

### 🔁 Recursión con acumulador y TCO / Accumulator recursion and TCO

**ES:** La recursión con acumulador deja la llamada recursiva como última operación del helper, pero TypeScript/JavaScript no garantiza Tail Call Optimization general en Node.js. Por eso `_acc` se conserva como puente educativo hacia `_ite`, sin suite propia. La validación se centra en `_rec` e `_ite`, que corresponden a la combinación definida para lenguajes sin TCO garantizada pero con bucles nativos.

**EN:** Accumulator recursion leaves the recursive call as the helper's final operation, but TypeScript/JavaScript does not guarantee general Tail Call Optimization in Node.js. Therefore `_acc` remains as an educational bridge toward `_ite`, without its own suite. Validation focuses on `_rec` and `_ite`, which match the combination defined for languages without guaranteed TCO but with native loops.

- **ES:** TypeScript dispone de `for` y `while`; `_ite` no usa llamadas recursivas.
- **EN:** TypeScript provides `for` and `while`; `_ite` uses no recursive calls.
- **ES:** Los cinco algoritmos usan `number` y los casos de prueba son los definidos por la especificación.
- **EN:** All five algorithms use `number`, and the test cases are those defined by the specification.
- **ES:** `node_modules/`, `dist/`, `coverage/` y `package-lock.json` quedan excluidos por `.gitignore`.
- **EN:** `node_modules/`, `dist/`, `coverage/`, and `package-lock.json` are excluded by `.gitignore`.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

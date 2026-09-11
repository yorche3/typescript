# Calculator — TypeScript

Implementación de la especificación [03_Unit_Test_Calculator](https://yorche3.github.io/programming_languages/core/foundations/03_Unit_Test_Calculator/) en **TypeScript**, usando una estructura tipo librería con `src/` y `test/`, y **Jest** como framework de pruebas unitarias mediante `ts-jest`.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo / Directorio | Propósito |
|----------------------|-----------|
| [`package.json`](package.json) | Scripts del proyecto y dependencias de desarrollo. |
| [`tsconfig.json`](tsconfig.json) | Configuración del compilador TypeScript. |
| [`jest.config.cjs`](jest.config.cjs) | Configuración de Jest y `ts-jest`. |
| [`src/calculator.ts`](src/calculator.ts) | Implementación de las cinco operaciones. |
| [`test/calculator.test.ts`](test/calculator.test.ts) | Suite Jest agrupada por operación. |
| [`.gitignore`](.gitignore) | Ignora dependencias y artefactos generados. |

```text
calculator/
├── package.json
├── tsconfig.json
├── jest.config.cjs
├── src/
│   └── calculator.ts
├── test/
│   └── calculator.test.ts
├── .gitignore
└── README.md
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se creó manualmente como un módulo tipo librería. El código de producción vive en `src/` y las pruebas en `test/`. Jest descubre la suite mediante `jest.config.cjs`, mientras `ts-jest` transpila TypeScript durante la ejecución de los tests.

**EN:** The project was created manually as a library-style module. Production code lives in `src/`, and tests live in `test/`. Jest discovers the suite through `jest.config.cjs`, while `ts-jest` transpiles TypeScript during test execution.

Las operaciones siguen las implementaciones educativas de la especificación:

- `addition`: suma directa.
- `subtraction`: resta directa.
- `multiplication`: suma repetitiva, sin usar `*`.
- `division`: resta repetitiva, sin usar `/`.
- `modulus`: reutiliza `division` y `multiplication`, sin usar `%`.

### Inicialización / Initialization

```bash
mkdir -p typescript/core/foundations/unit_test/calculator/{src,test}
cd typescript/core/foundations/unit_test/calculator
npm init -y
npm install --save-dev jest ts-jest typescript @types/jest
```

Después se añaden la configuración de Jest, la implementación y la suite de pruebas.

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

Jest usa `describe` para agrupar las cinco operaciones y `test` para cada caso. `ts-jest` permite ejecutar los archivos `.ts` sin generar JavaScript dentro del proyecto durante la prueba.

### `tsconfig.json`

El proyecto usa la resolución moderna y evolutiva de módulos de Node.js:

```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "isolatedModules": true,
    "types": ["jest"]
  }
}
```

`moduleResolution: "NodeNext"` debe combinarse con `module: "NodeNext"`; mantener `module: "CommonJS"` con esa resolución produce el error `TS5110`. Como el paquete no declara `"type": "module"`, NodeNext mantiene este proyecto en la rama CommonJS y el import relativo actual sigue siendo válido. El proyecto experimental usa la configuración anterior `CommonJS` sin resolución explícita, por lo que no es idéntico a esta configuración moderna.

`types: ["jest"]` hace explícitas las declaraciones globales de Jest (`describe`, `test` y `expect`). Jest no necesita estar instalado globalmente: las dependencias locales de `devDependencies` y `npx`/el script de npm son la configuración recomendada.

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- Node.js.
- npm.
- TypeScript.
- Jest y `ts-jest`, instalados como dependencias de desarrollo del proyecto.

Verificar el entorno:

```bash
node --version
npm --version
npx tsc --version
```

### Instalar dependencias / Install dependencies

```bash
cd typescript/core/foundations/unit_test/calculator
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
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
```

> **ES:** El formato exacto puede variar según la versión de Jest, pero deben ejecutarse las 5 pruebas y producirse 0 fallos.
> **EN:** The exact format may vary by Jest version, but all 5 tests must run with 0 failures.

---

## 🧠 Operaciones / Operations

| Operación | Implementación educativa |
|-----------|--------------------------|
| `addition(a, b)` | Suma directa (`a + b`). |
| `subtraction(a, b)` | Resta directa (`a - b`). |
| `multiplication(a, b)` | Suma `a` repetidamente mediante `while`. |
| `division(a, b)` | Resta `b` repetidamente y cuenta el cociente entero. |
| `modulus(a, b)` | Calcula el resto reutilizando `division` y `multiplication`. |

Los cinco casos están agrupados por operación dentro de la suite Jest.

---

## 📝 Notas de implementación / Implementation Notes

- **ES:** La API usa `number` y los casos de prueba emplean los valores definidos por la especificación.
- **EN:** The API uses `number`, and the test cases use the values defined by the specification.
- **ES:** `multiplication` rechaza multiplicadores negativos y `division`/`modulus` rechazan divisores no positivos mediante `RangeError`; esos casos quedan fuera del ejercicio básico.
- **EN:** `multiplication` rejects negative multipliers, and `division`/`modulus` reject non-positive divisors through `RangeError`; those cases are outside the basic exercise.
- **ES:** Jest proporciona el runner y el reporte, por lo que no se crea un archivo `run_tests.ts` separado.
- **EN:** Jest provides the runner and reporting, so no separate `run_tests.ts` file is created.
- **ES:** `node_modules/`, `dist/`, `coverage/` y `package-lock.json` quedan excluidos por `.gitignore`.
- **EN:** `node_modules/`, `dist/`, `coverage/`, and `package-lock.json` are excluded by `.gitignore`.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

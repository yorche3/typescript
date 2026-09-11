# 🚀 Fundamentos / Foundations — TypeScript

Implementación de los ejercicios de la sección [Fundamentos / Foundations](https://yorche3.github.io/programming_languages/core/foundations/) del repositorio principal en **TypeScript**.

---

## 📖 Descripción / Description

**ES:** Esta sección introduce TypeScript mediante scripts independientes ejecutados sobre Node.js y proyectos tipo librería con pruebas unitarias usando Jest y `ts-jest`.

**EN:** This section introduces TypeScript through standalone scripts running on Node.js and library-style projects with unit tests using Jest and `ts-jest`.

---

## 📁 Estructura / Structure

```text
typescript/
└── core/
    └── foundations/
        ├── README.md                   # Este archivo / This file
        ├── helloworld/                 # 01_Hello_World — Primer script
        │   ├── helloworld.ts
        │   └── README.md
        ├── hellouser/                  # 02_Hello_User — Entrada estándar
        │   ├── hellouser.ts
        │   └── README.md
        ├── unit_test/
        │   └── calculator/             # 03_Unit_Test_Calculator
        │       ├── package.json
        │       ├── tsconfig.json
        │       ├── jest.config.cjs
        │       ├── src/
        │       │   └── calculator.ts
        │       ├── test/
        │       │   └── calculator.test.ts
        │       ├── .gitignore
        │       └── README.md
        └── numbers/                    # 04_Numbers — Algoritmos numéricos
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

## 🔢 Progresión / Progression

| Especificación | Proyecto | Conceptos | Tests | Dependencias |
| -------------- | -------- | --------- | :---: | ------------ |
| [`01_Hello_World`](https://yorche3.github.io/programming_languages/core/foundations/01_Hello_World/) | [`helloworld/`](helloworld/) | TypeScript, `console.log`, compilación con `tsc`, ejecución con Node.js | — | Node.js + TypeScript |
| [`02_Hello_User`](https://yorche3.github.io/programming_languages/core/foundations/02_Hello_User/) | [`hellouser/`](hellouser/) | `readline`, `stdin`, callbacks, interpolación | — | Node.js + `@types/node` para type-check |
| [`03_Unit_Test_Calculator`](https://yorche3.github.io/programming_languages/core/foundations/03_Unit_Test_Calculator/) | [`unit_test/calculator/`](unit_test/calculator/) | librería `src/`, Jest, `ts-jest`, NodeNext | 5 | Jest + `@types/jest` |
| [`04_Numbers`](https://yorche3.github.io/programming_languages/core/foundations/04_Numbers/) | [`numbers/`](numbers/) | recursión, acumuladores, `for`, `while`, NodeNext | 10 (22 assertions) | Jest + `@types/jest` |

---

## 🛠️ Enfoque general / General Approach

**ES:** Los proyectos de esta sección siguen una progresión gradual:

1. **Hello World**: script independiente de un archivo `.ts`, compilado a JavaScript con `tsc` y ejecutado con Node.js.
2. **Hello User**: script que usa el módulo `readline` de Node.js para solicitar y leer un nombre.
3. **Calculator**: primer proyecto tipo librería con `src/`, `test/`, Jest y `ts-jest`. Usa las cinco operaciones aritméticas educativas.
4. **Numbers**: proyecto tipo librería con 15 métodos en tres enfoques. TypeScript/JavaScript no garantiza TCO general, pero tiene iteración nativa; por eso se prueban `_rec` e `_ite`, mientras `_acc` queda como puente didáctico sin suite propia.

**EN:** The projects in this section follow a gradual progression:

1. **Hello World**: a single-file `.ts` script compiled to JavaScript with `tsc` and run with Node.js.
2. **Hello User**: a script using Node.js's `readline` module to request and read a name.
3. **Calculator**: the first library-style project with `src/`, `test/`, Jest, and `ts-jest`. It uses the five educational arithmetic operations.
4. **Numbers**: a library-style project with 15 methods across three approaches. TypeScript/JavaScript does not guarantee general TCO but has native iteration; therefore `_rec` and `_ite` are tested, while `_acc` remains an educational bridge without its own suite.

---

## 📦 Requisitos / Requirements

| Herramienta | Uso | Verificación |
| ----------- | --- | ------------ |
| Node.js v22.22.1 | Runtime de JavaScript | `node --version` |
| npm | Dependencias y scripts | `npm --version` |
| TypeScript | Compilación y type-check | `tsc --version` |
| Jest | Framework de testing | Dependencia local del paquete |
| `ts-jest` | Transpilación TypeScript para Jest | Dependencia local del paquete |

Las dependencias de Jest son locales a cada proyecto. No es necesario instalar Jest globalmente:

```bash
npm install
npm test
```

---

## 🚀 Ejecución rápida / Quick Start

### Hello World

```bash
cd typescript/core/foundations/helloworld
tsc helloworld.ts --target ES2022 --module CommonJS --outDir /tmp/typescript-helloworld-build
node /tmp/typescript-helloworld-build/helloworld.js
```

### Hello User

```bash
cd typescript/core/foundations/hellouser
tsc hellouser.ts --target ES2022 --module CommonJS --outDir /tmp/typescript-hellouser-build --noEmitOnError false
printf 'Ada\n' | node /tmp/typescript-hellouser-build/hellouser.js
```

`hellouser` requiere `@types/node` para una comprobación de tipos completa, aunque el JavaScript emitido se ejecuta correctamente con Node.js.

### Calculator

```bash
cd typescript/core/foundations/unit_test/calculator
npm install
npm run build
npm test
```

Resultado verificado:

```text
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
```

### Numbers

```bash
cd typescript/core/foundations/numbers
npm install
npm run build
npm test
```

Resultado verificado:

```text
Test Suites: 2 passed, 2 total
Tests:       10 passed, 10 total
```

---

## 🧪 Convenciones de pruebas / Testing Conventions

**ES:** Los proyectos tipo librería usan Jest y `ts-jest`. Cada suite agrupa los casos por método: un test por algoritmo con varias assertions dentro. `types: ["jest"]` en `tsconfig.json` hace visibles `describe`, `test` y `expect` durante la compilación.

**EN:** Library-style projects use Jest and `ts-jest`. Each suite groups cases by method: one test per algorithm with multiple assertions inside. `types: ["jest"]` in `tsconfig.json` exposes `describe`, `test`, and `expect` during compilation.

`calculator` tiene 5 tests. `numbers` tiene 2 suites con 5 tests cada una y 22 assertions en total.

`calculator` has 5 tests. `numbers` has 2 suites with 5 tests each and 22 assertions in total.

---

## 🔁 TCO e iteración / TCO and Iteration

TypeScript/JavaScript no garantiza Tail Call Optimization general en Node.js, pero TypeScript sí ofrece bucles nativos mediante `for` y `while`. Según la regla de `04_Numbers`, la combinación aplicada es:

TypeScript/JavaScript does not guarantee general Tail Call Optimization in Node.js, but TypeScript provides native loops through `for` and `while`. According to the `04_Numbers` rule, the applied combination is:

```text
TCO no garantizada + iteración nativa ✅
_rec + _ite
2 suites
10 tests
22 assertions
```

La implementación `_acc` se mantiene en el código fuente como puente conceptual hacia `_ite`, pero no tiene una suite independiente.

The `_acc` implementation remains in the source as a conceptual bridge toward `_ite`, but it has no independent suite.

---

## 🧹 Artefactos de compilación / Build Artifacts

Los proyectos Jest ignoran `node_modules/`, `dist/`, `coverage/` y `package-lock.json` mediante `.gitignore` locales. Los scripts simples escriben su salida de compilación en `/tmp` para no contaminar el proyecto.

Jest projects ignore `node_modules/`, `dist/`, `coverage/`, and `package-lock.json` through local `.gitignore` files. Simple scripts write build output to `/tmp` to keep the project clean.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

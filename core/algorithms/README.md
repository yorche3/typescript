# 🚀 Algoritmos Puros / Algorithms Pure — TypeScript

Implementaciones de la [Fase 1 — Algoritmos Puros](https://yorche3.github.io/programming_languages/ROADMAP/#fase-1--algoritmos-puros--algorithms-pure-) en **TypeScript**: ordenamientos elementales, estructuras de datos propias, ordenamientos óptimos y distribuidos, y búsqueda.

Los módulos de esta fase trabajan sobre **arrays mutables** (`number[]`), que se ordenan *in-place* y se devuelven. Un array de JavaScript admite `null`, así que el caso nulo se representa con `null` como indicador de fallo (no se lanzan excepciones) y el array vacío es `[]`.

---

## 📂 Módulos / Modules

| Módulo | Especificación | Enfoque | Tests | Estado |
|--------|---------------|---------|:-----:|:------:|
| [`naive_sort/`](naive_sort/) | [05_Naive_Sort](https://yorche3.github.io/programming_languages/core/algorithms/05_Naive_Sort/) | `npm test` (Jest + ts-jest) | 24 | ✅ |

---

## 📁 Estructura / Structure

```text
algorithms/
└── naive_sort/                  # 05_Naive_Sort
    ├── package.json             # scripts test/build + devDependencies
    ├── tsconfig.json            # strict, ES2022, NodeNext
    ├── jest.config.cjs          # preset ts-jest, testMatch **/*.test.ts
    ├── .gitignore               # node_modules/, dist/, coverage/, package-lock.json
    ├── src/
    │   └── naive_sort.ts        # clase NaiveSort: 3 métodos estáticos
    ├── test/
    │   └── naive_sort.test.ts   # 3 algoritmos × 8 casos
    └── README.md
```

---

## 🛠️ Patrón común / Common Pattern

| Característica | Descripción |
|---------------|-------------|
| **Runtime** | Node.js v22.22.1 con npm 11.11.1 |
| **CLI** | `npm test` (Jest) y `npm run build` (`tsc --noEmit`), desde la raíz del paquete |
| **Andamiaje** | ✅ `npm init -y` (comando de la guía), como en [`foundations/numbers/`](../foundations/numbers/) y `foundations/unit_test/calculator/` |
| **Framework de tests** | Jest 29 con `ts-jest` 29 y `@types/jest`, declarados en `package.json` e instalados con `npm install` |
| **Runner** | `jest --runInBand` descubre `test/**/*.test.ts` por `jest.config.cjs`; no hay `run_tests.ts` |
| **Separación** | `src/` (módulo) ↔ `test/` (suites) |
| **Módulo fuente** | Una clase exportada con métodos estáticos (`export class NaiveSort`), como `Numbers` en `numbers/` |
| **API** | Una función por algoritmo: `NaiveSort.selection_sort(array)`, etc. |
| **Naming** | `snake_case` idéntico al de la especificación (`selection_sort`), como en los otros módulos TypeScript del repositorio |
| **Mutabilidad** | Los arrays son mutables y los algoritmos ordenan *in-place*; la suite ordena una copia (`[...input]`) por caso |
| **Nulabilidad** | `null` como indicador de fallo (un array de JavaScript admite `null`); el array vacío es `[]` |
| **Mensajes de aserción** | Jest 29 no admite mensaje en `expect`, así que el mensaje del contrato es el **nombre del test** (`selection_sort should sort an unsorted array`) |
| **Verificación estática** | `npm run build` (`tsc --noEmit`) con `strict: true`, sin errores ni warnings |
| **Artefactos** | `node_modules/`, `dist/`, `coverage/` y `package-lock.json` — ignorados por el `.gitignore` del módulo |
| **Particularidades** | Bucles `for (let …)` con cotas 0-based; intercambio por desestructuración (`[a, b] = [b, a]`); sin `Array.prototype.sort`; nombre de paquete con prefijo `typescript-` |

---

## 🚀 Compilación rápida / Quick Build

```bash
# Naive Sort Tests
cd naive_sort
npm install
npm run build
npm test
```

---

## ▶️ Siguiente / Next

👉 Continúa con los módulos pendientes de esta fase en el [Roadmap](https://yorche3.github.io/programming_languages/ROADMAP/).

👉 Continue with the pending modules of this phase in the [Roadmap](https://yorche3.github.io/programming_languages/ROADMAP/).

---

*[← Volver a Core](../README.md)*

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

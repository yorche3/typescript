# TypeScript

Proyectos en **TypeScript**, con scripts independientes compilados mediante `tsc` y ejecutados con Node.js, y proyectos tipo librería probados con **Jest** y `ts-jest`.

---

## 📂 Módulos / Modules

| Módulo | Descripción |
| ------ | ----------- |
| [`core/foundations/`](core/foundations/) | **Fase 0 — Fundamentos**: `helloworld`, `hellouser`, `unit_test/calculator`, `numbers` |

---

## ▶️ Comenzar / Getting Started

```bash
# Hello, World!
cd core/foundations/helloworld
tsc helloworld.ts --target ES2022 --module CommonJS --outDir /tmp/typescript-helloworld-build
node /tmp/typescript-helloworld-build/helloworld.js

# Hello, User!
cd ../hellouser
tsc hellouser.ts --target ES2022 --module CommonJS --outDir /tmp/typescript-hellouser-build --noEmitOnError false
printf 'Ada\n' | node /tmp/typescript-hellouser-build/hellouser.js

# Calculator tests
cd ../unit_test/calculator
npm install
npm run build
npm test

# Numbers tests
cd ../../numbers
npm install
npm run build
npm test
```

---

## 📦 Requisitos / Requirements

| Herramienta | Uso | Verificación |
| ----------- | --- | ------------ |
| Node.js v22.22.1 | Runtime de JavaScript | `node --version` |
| npm | Dependencias y scripts | `npm --version` |
| TypeScript | Compilación y type-check | `tsc --version` |
| Jest | Framework de pruebas | Dependencia local por proyecto |
| `ts-jest` | Transpilación para Jest | Dependencia local por proyecto |

Las dependencias de Jest son locales a cada paquete. No es necesario instalar Jest globalmente:

```bash
npm install
npm test
```

---

## 🏗️ Tipos de proyecto / Project Types

### 1. Programa independiente (`tsc` + Node.js)

**ES:** `helloworld` y `hellouser` son archivos `.ts` compilados a JavaScript y ejecutados con Node.js. Los artefactos se escriben en `/tmp` para mantener limpio el proyecto.

**EN:** `helloworld` and `hellouser` are `.ts` files compiled to JavaScript and run with Node.js. Artifacts are written to `/tmp` to keep the project clean.

```bash
tsc <File>.ts --target ES2022 --module CommonJS --outDir /tmp/typescript-build
node /tmp/typescript-build/<File>.js
```

### 2. Proyecto tipo librería con Jest

**ES:** `calculator` y `numbers` separan `src/` y `test/`, usan `package.json`, `tsconfig.json`, Jest y `ts-jest`. Cada paquete mantiene sus dependencias locales.

**EN:** `calculator` and `numbers` separate `src/` and `test/`, using `package.json`, `tsconfig.json`, Jest, and `ts-jest`. Each package keeps its dependencies local.

```bash
npm run build
npm test
```

---

## 🔁 Decisión de TCO / TCO Decision

TypeScript/JavaScript no garantiza Tail Call Optimization general en Node.js, pero TypeScript tiene iteración nativa mediante `for` y `while`. Por eso `numbers` conserva `_acc` como puente educativo sin suite propia y prueba `_rec` e `_ite`:

TypeScript/JavaScript does not guarantee general Tail Call Optimization in Node.js, but TypeScript has native iteration through `for` and `while`. Therefore `numbers` keeps `_acc` as an educational bridge without a dedicated suite and tests `_rec` and `_ite`:

```text
TCO no garantizada + iteración nativa ✅
_rec + _ite
2 suites
10 tests
22 assertions
```

---

## 🧪 Convenciones de pruebas / Testing Conventions

**ES:** Los proyectos tipo librería usan Jest y `ts-jest`. `types: ["jest"]` en `tsconfig.json` hace visibles `describe`, `test` y `expect` durante el type-check. Las dependencias no se instalan globalmente.

**EN:** Library-style projects use Jest and `ts-jest`. `types: ["jest"]` in `tsconfig.json` exposes `describe`, `test`, and `expect` during type checking. Dependencies are not installed globally.

---

## 🧹 Artefactos de compilación / Build Artifacts

Los proyectos Jest ignoran `node_modules/`, `dist/`, `coverage/` y `package-lock.json` mediante `.gitignore` locales. Los scripts independientes escriben sus artefactos en `/tmp`.

Jest projects ignore `node_modules/`, `dist/`, `coverage/`, and `package-lock.json` through local `.gitignore` files. Standalone scripts write their artifacts under `/tmp`.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*
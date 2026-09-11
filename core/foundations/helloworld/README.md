# Hello, World! — TypeScript

Implementación de la especificación [01_Hello_World](https://yorche3.github.io/programming_languages/core/foundations/01_Hello_World/) en **TypeScript**, con un enfoque manual y minimalista.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
|---------|-----------|
| [`helloworld.ts`](helloworld.ts) | Código fuente: imprime `"Hello, World! from TypeScript!"` en la salida estándar. |

**Estructura de directorios esperada:**

```text
helloworld/
├── helloworld.ts  # Código fuente
└── README.md      # Este archivo
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se creó manualmente, sin npm, `package.json` ni herramientas de scaffolding. Un único archivo `.ts` con una llamada a `console.log` es suficiente. TypeScript se transpila a JavaScript antes de ejecutarse con Node.js.

**EN:** The project was created manually, without npm, `package.json`, or scaffolding tools. A single `.ts` file with one `console.log` call is enough. TypeScript is transpiled to JavaScript before running with Node.js.

### Inicialización / Initialization

1. Crear la estructura de directorios:

   ```bash
   mkdir -p typescript/core/foundations/helloworld
   ```

2. Escribir el archivo `helloworld.ts` con el código fuente.

3. Compilarlo con `tsc` y ejecutar el JavaScript generado con Node.js.

---

## 📄 Archivos de configuración clave / Key Configuration Files

No se requieren archivos de configuración para este ejercicio. El ejemplo se compila directamente con `tsc`, sin dependencias externas.

```typescript
console.log("Hello, World! from TypeScript!");
```

| Elemento | Propósito |
|----------|-----------|
| `console.log(...)` | Imprime una línea en la salida estándar. |
| `tsc` | Transpila el código TypeScript a JavaScript ejecutable. |
| `node` | Ejecuta el JavaScript generado. |

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- **Node.js** para ejecutar el JavaScript generado.
- **TypeScript compiler (`tsc`)** para transpilar el archivo.

Versiones verificadas en este entorno:

```text
Node.js v22.22.1
TypeScript compiler 7.0.2
```

Verificar la instalación:

```bash
node --version
tsc --version
```

### Compilar y ejecutar / Compile and run

```bash
cd typescript/core/foundations/helloworld
tsc helloworld.ts --target ES2022 --module CommonJS --outDir /tmp/typescript-helloworld-build
node /tmp/typescript-helloworld-build/helloworld.js
```

El uso de `/tmp` evita generar artefactos de compilación dentro del proyecto.

Using `/tmp` avoids generating build artifacts inside the project.

### Salida esperada / Expected output

```text
Hello, World! from TypeScript!
```

La salida fue verificada compilando con `tsc` y ejecutando el JavaScript resultante con Node.js.

The output was verified by compiling with `tsc` and running the emitted JavaScript with Node.js.

---

## 📝 Notas de implementación / Implementation Notes

- **ES:** TypeScript añade tipado estático durante la compilación, pero el programa se ejecuta finalmente como JavaScript.
- **EN:** TypeScript adds static typing during compilation, but the program ultimately runs as JavaScript.
- **ES:** `console.log` añade un salto de línea al final de la salida.
- **EN:** `console.log` appends a newline to the output.
- **ES:** El archivo JavaScript generado es un artefacto de compilación y no forma parte del código fuente del ejercicio.
- **EN:** The emitted JavaScript file is a build artifact and is not part of the exercise's source code.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

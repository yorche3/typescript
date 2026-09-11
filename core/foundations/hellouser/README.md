# Hello, User! — TypeScript

Implementación de la especificación [02_Hello_User](https://yorche3.github.io/programming_languages/core/foundations/02_Hello_User/) en **TypeScript**, con un enfoque manual y minimalista.

Solicita un nombre mediante la entrada estándar y muestra un saludo personalizado.

---

## 📂 Archivos y estructura / Files & Structure

| Archivo | Propósito |
|---------|-----------|
| [`hellouser.ts`](hellouser.ts) | Código fuente: solicita un nombre, lo lee con `readline` y muestra un saludo. |

**Estructura de directorios esperada:**

```text
hellouser/
├── hellouser.ts  # Código fuente
└── README.md     # Este archivo
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se creó manualmente. El archivo usa el módulo estándar `readline` de Node.js para crear una interfaz de entrada y salida, solicitar el nombre y cerrar la interfaz después de mostrar el saludo. TypeScript se transpila a JavaScript antes de ejecutarse con Node.js.

**EN:** The project was created manually. The file uses Node.js's standard `readline` module to create an input/output interface, request the name, and close the interface after printing the greeting. TypeScript is transpiled to JavaScript before running with Node.js.

### Inicialización / Initialization

1. Crear la estructura de directorios:

   ```bash
   mkdir -p typescript/core/foundations/hellouser
   ```

2. Escribir el archivo `hellouser.ts` con el código fuente.

3. Compilarlo con `tsc` y ejecutar el JavaScript generado con Node.js.

---

## 📄 Archivos de configuración clave / Key Configuration Files

No hay `package.json` ni `tsconfig.json` en este ejercicio. El archivo usa la API runtime de Node.js y se compila directamente con `tsc`.

```typescript
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name: string) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

| Elemento | Propósito |
|----------|-----------|
| `readline.createInterface(...)` | Crea una interfaz para leer desde `stdin` y escribir en `stdout`. |
| `rl.question(...)` | Muestra el prompt y recibe una línea del usuario. |
| `` `Hello, ${name}!` `` | Interpola el nombre dentro del saludo. |
| `rl.close()` | Cierra la interfaz después de completar la respuesta. |
| `node` | Ejecuta el JavaScript generado. |

> **ES:** El módulo `readline` y el objeto `process` pertenecen a Node.js. Para una comprobación de tipos limpia, `tsc` necesita las declaraciones de Node (`@types/node`).
> **EN:** The `readline` module and `process` object belong to Node.js. For a clean type check, `tsc` needs Node declarations (`@types/node`).

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- **Node.js v22.22.1** para ejecutar el JavaScript generado.
- **TypeScript compiler (`tsc`) 7.0.2** para transpilar el archivo.
- Declaraciones de Node (`@types/node`) para una comprobación de tipos completa.

Verificar Node.js y TypeScript:

```bash
node --version
tsc --version
```

### Ejecución verificada del runtime / Verified runtime execution

En el estado actual del proyecto no están instaladas las declaraciones `@types/node`, por lo que `tsc` informa de referencias no tipadas a `readline` y `process`. Aun así, TypeScript puede emitir el JavaScript con `--noEmitOnError false`, y ese JavaScript se ejecuta correctamente con Node.js:

```bash
cd typescript/core/foundations/hellouser
tsc hellouser.ts \
  --target ES2022 \
  --module CommonJS \
  --outDir /tmp/typescript-hellouser-build \
  --noEmitOnError false
printf 'Ada\n' | node /tmp/typescript-hellouser-build/hellouser.js
```

### Comprobación de tipos completa / Full type check

Para eliminar los diagnósticos de `readline` y `process`, instala las declaraciones de Node en un proyecto npm y vuelve a ejecutar `tsc`:

```bash
npm init -y
npm install --save-dev @types/node
```

Después, configura el proyecto para incluir los tipos de Node y compila sin `--noEmitOnError false`.

### Salida esperada / Expected output

Con la entrada `Ada`, la salida verificada del runtime es:

```text
Enter your name: Ada
Hello, Ada!
```

El prompt se mantiene en la misma línea que la entrada porque `rl.question` escribe el prompt sin añadir un salto de línea antes de leer la respuesta.

The prompt remains on the same line as the input because `rl.question` writes the prompt without adding a newline before reading the response.

---

## 📝 Notas de implementación / Implementation Notes

- **ES:** TypeScript añade comprobación estática durante la compilación, pero el programa se ejecuta finalmente como JavaScript en Node.js.
- **EN:** TypeScript adds static checking during compilation, but the program ultimately runs as JavaScript on Node.js.
- **ES:** `readline` pertenece a Node.js, no a la biblioteca estándar del lenguaje TypeScript; por eso requiere las declaraciones `@types/node` para el análisis de tipos.
- **EN:** `readline` belongs to Node.js, not to the TypeScript language standard library; therefore `@types/node` declarations are needed for type analysis.
- **ES:** `readLine` no se usa aquí: la entrada se gestiona mediante el callback de `rl.question`.
- **EN:** `readLine` is not used here: input is handled through the `rl.question` callback.
- **ES:** El JavaScript generado en `/tmp` es un artefacto de compilación y no forma parte del código fuente del ejercicio.
- **EN:** The JavaScript emitted under `/tmp` is a build artifact and is not part of the exercise's source code.

---

## 🌐 Otras implementaciones / Other implementations

Este proyecto también está implementado en otros lenguajes. Explora el [repositorio principal](https://github.com/yorche3/programming_languages) para ver todas las versiones.

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

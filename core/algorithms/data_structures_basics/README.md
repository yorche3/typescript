# Data Structures Basics — TypeScript

Implementación de la especificación [06_Data_Structures_Basics](https://yorche3.github.io/programming_languages/core/algorithms/06_Data_Structures_Basics/) en **TypeScript**, usando **Jest** y **ts-jest** para las pruebas unitarias y `tsc --noEmit` como verificación estática.

**ES:** Cuatro estructuras de datos construidas desde cero sobre un único tipo `Node` compartido: `Node`, `LinkedList`, `Stack` y `Queue`. Cada ADT mantiene y gestiona directamente sus punteros y contador de elementos; `Stack` y `Queue` no envuelven ni delegan en `LinkedList` ni en tipos de colección de la biblioteca estándar de JavaScript/TypeScript.

**EN:** Four data structures built from scratch over a single shared `Node` type: `Node`, `LinkedList`, `Stack`, and `Queue`. Each ADT directly maintains and manages its own pointers and element counter; `Stack` and `Queue` neither wrap nor delegate to `LinkedList` or JavaScript/TypeScript standard library collection types.

---

## 📂 Archivos y estructura / Files & Structure

Describe la estructura del proyecto y el propósito de cada archivo.

| Archivo / Directory | Propósito / Purpose |
|---|---|
| [`package.json`](package.json) | Manifiesto npm con scripts (`test`, `build`) y devDependencies (TypeScript, Jest, ts-jest). / npm manifest with scripts (`test`, `build`) and devDependencies (TypeScript, Jest, ts-jest). |
| [`tsconfig.json`](tsconfig.json) | Configuración de TypeScript con compilación estricta (`ES2022`, `NodeNext`). / TypeScript configuration with strict compilation (`ES2022`, `NodeNext`). |
| [`jest.config.cjs`](jest.config.cjs) | Configuración de Jest con preset `ts-jest` y mapeo de extensiones `.js` a fuentes `.ts`. / Jest configuration with `ts-jest` preset and `.js` extension mapping to `.ts` source files. |
| [`.gitignore`](.gitignore) | Archivos y directorios generados excluidos del control de versiones. / Generated files and directories excluded from version control. |
| [`src/index.ts`](src/index.ts) | Barrel del módulo que reexporta `Node`, `LinkedList`, `Stack` y `Queue`. / Module barrel re-exporting `Node`, `LinkedList`, `Stack`, and `Queue`. |
| [`src/node.ts`](src/node.ts) | Celda enlazada compartida con valor de sólo lectura (`#value`) y enlace mutable (`#next`). / Shared linked cell with read-only value (`#value`) and mutable link (`#next`). |
| [`src/linked-list.ts`](src/linked-list.ts) | Lista enlazada con `head`, `tail` y contador interno. / Linked list with `head`, `tail`, and internal counter. |
| [`src/stack.ts`](src/stack.ts) | Pila LIFO independiente sobre `Node` con puntero `top` y contador. / Independent LIFO stack over `Node` with `top` pointer and count. |
| [`src/queue.ts`](src/queue.ts) | Cola FIFO independiente sobre `Node` con punteros `front`, `rear` y contador. / Independent FIFO queue over `Node` with `front` and `rear` pointers and count. |
| [`test/data_structures_basics.test.ts`](test/data_structures_basics.test.ts) | Prueba del andamiaje y exportaciones del barrel del módulo. / Smoke test for scaffolding and module barrel exports. |
| [`test/node.test.ts`](test/node.test.ts) | Pruebas de inicialización, enlace y recorrido para `Node`. / Initialization, linking, and traversal tests for `Node`. |
| [`test/linked-list.test.ts`](test/linked-list.test.ts) | Pruebas de inserción, eliminación, vaciado y estado para `LinkedList`. / Insertion, deletion, emptying, and state tests for `LinkedList`. |
| [`test/stack.test.ts`](test/stack.test.ts) | Pruebas LIFO, `peek`, desapilado y reutilización para `Stack`. / LIFO, `peek`, pop, and reuse tests for `Stack`. |
| [`test/queue.test.ts`](test/queue.test.ts) | Pruebas FIFO, `peek`, desencolado y reutilización para `Queue`. / FIFO, `peek`, dequeue, and reuse tests for `Queue`. |
| [`test/scenario-runner.ts`](test/scenario-runner.ts) | Utilidad para ejecutar escenarios secuenciales declarativos. / Utility for executing declarative sequential scenarios. |

```text
data_structures_basics/
├── .gitignore
├── jest.config.cjs
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── linked-list.ts
│   ├── node.ts
│   ├── queue.ts
│   └── stack.ts
├── test/
│   ├── data_structures_basics.test.ts
│   ├── linked-list.test.ts
│   ├── node.test.ts
│   ├── queue.test.ts
│   ├── scenario-runner.ts
│   └── stack.test.ts
└── README.md
```

---

## 🛠️ Enfoque y construcción / Approach & Build

**ES:** El proyecto se estructura como una librería en TypeScript siguiendo la convención modular del repositorio (`core/foundations/numbers/`, `core/algorithms/naive_sort/`). El código de producción se ubica en `src/` dividido por responsabilidades (un archivo por estructura y un barrel `index.ts`), y las pruebas se ubican en `test/`. Jest ejecuta las suites con el preset `ts-jest` y mapeo de módulos para permitir extensiones explícitas `.js` requeridas por `NodeNext`.

**EN:** The project is structured as a TypeScript library following the repository's modular convention (`core/foundations/numbers/`, `core/algorithms/naive_sort/`). Production code lives in `src/` split by concerns (one file per structure plus an `index.ts` barrel), and tests live in `test/`. Jest runs suites using the `ts-jest` preset and module name mapping to support explicit `.js` extensions required by `NodeNext`.

### Inicialización / Initialization

```bash
mkdir -p typescript/core/algorithms/data_structures_basics/{src,test}
cd typescript/core/algorithms/data_structures_basics
npm init -y
npm install --save-dev jest ts-jest typescript @types/jest
```

---

## 📄 Configuración clave / Key Configuration

### `package.json`

```json
{
  "name": "typescript-data_structures_basics",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "test": "jest --runInBand --passWithNoTests",
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

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "isolatedModules": true,
    "types": ["jest"],
    "esModuleInterop": true,
    "skipLibCheck": true,
    "rootDir": ".",
    "outDir": "dist"
  },
  "include": ["src/**/*.ts", "test/**/*.ts"]
}
```

### `jest.config.cjs`

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
```

---

## 🚀 Compilación y ejecución / Build & Run

### Requisitos / Requirements

- **Node.js** v22.22.1 y **npm** 11.11.1.
- **TypeScript** 5.8.3 (vía npm / npx).
- **Jest** 29.7.0 y **ts-jest** 29.2.5 como dependencias de desarrollo locales.

Verificar el entorno:

```bash
node --version
npm --version
npx tsc --version
```

### Comandos de compilación y pruebas / Build & test commands

```bash
npm run build
npm test
```

**Salida real / Actual output:**

```text
> typescript-data_structures_basics@1.0.0 build
> tsc --noEmit


> typescript-data_structures_basics@1.0.0 test
> jest --runInBand --passWithNoTests

PASS test/linked-list.test.ts
PASS test/queue.test.ts
PASS test/stack.test.ts
PASS test/data_structures_basics.test.ts
PASS test/node.test.ts

Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.385 s, estimated 1 s
Ran all test suites.
```

---

## 🧠 Algoritmos y operaciones / Algorithms & Operations

### `Node`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Node(value)` | `number → Node` | $O(1)$ | Constructor (`init(value)`). Inicializa valor y enlace ausente (`null`). / Constructor (`init(value)`). Sets value and absent link (`null`). |
| `node.value` | `→ number` | $O(1)$ | Getter observador de sólo lectura (`get_value()`). / Read-only observer getter (`get_value()`). |
| `node.next` | `→ Node \| null` | $O(1)$ | Getter observador del enlace (`get_next()`). / Observer getter for link (`get_next()`). |
| `node.next = next` | `Node \| null → void` | $O(1)$ | Setter del enlace mutable (`set_next(next)`). / Setter for mutable link (`set_next(next)`). |

### `LinkedList`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new LinkedList()` | `→ LinkedList` | $O(1)$ | Constructor (`init()`). Inicializa cabeza y cola ausentes (`null`), y contador en `0`. / Constructor (`init()`). Initializes head and tail absent (`null`), and count to `0`. |
| `list.head` | `→ number` | $O(1)$ | Getter observador (`get_head()`). Devuelve `-1` si la lista está vacía; no muta. / Observer getter (`get_head()`). Returns `-1` if empty; does not mutate. |
| `list.isEmpty` | `→ boolean` | $O(1)$ | Getter observador (`is_empty()`). `true` si la lista está vacía (`count === 0`). / Observer getter (`is_empty()`). `true` if empty (`count === 0`). |
| `list.size` | `→ number` | $O(1)$ | Getter observador (`size()`). Devuelve el total de nodos almacenados. / Observer getter (`size()`). Returns total stored nodes. |
| `list.insertHead(value)` | `number → void` | $O(1)$ | Inserta un nuevo nodo al inicio; actualiza cabeza y cola. / Inserts new node at head; updates head and tail. |
| `list.insertTail(value)` | `number → void` | $O(1)$ | Inserta un nuevo nodo al final; actualiza cola y cabeza. / Inserts new node at tail; updates tail and head. |
| `list.delete(value)` | `number → boolean` | $O(n)$ | Elimina la primera aparición de `value`; devuelve `true` en éxito y `false` si no existe. / Deletes first occurrence of `value`; returns `true` on success and `false` if not found. |

### `Stack`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Stack()` | `→ Stack` | $O(1)$ | Constructor (`init()`). Inicializa cima (`#top`) ausente (`null`) y contador en `0`. / Constructor (`init()`). Initializes absent top (`null`) and count to `0`. |
| `stack.isEmpty` | `→ boolean` | $O(1)$ | Getter observador (`is_empty()`). `true` si la pila no tiene elementos. / Observer getter (`is_empty()`). `true` if stack has no elements. |
| `stack.size` | `→ number` | $O(1)$ | Getter observador (`size()`). Retorna número de elementos. / Observer getter (`size()`). Returns element count. |
| `stack.peek` | `→ number` | $O(1)$ | Getter observador (`peek()`). Valor del elemento en la cima sin desapilar; `-1` si vacía. / Observer getter (`peek()`). Top element value without popping; `-1` if empty. |
| `stack.push(value)` | `number → void` | $O(1)$ | Apila un nuevo nodo sobre la cima. / Pushes new node onto top. |
| `stack.pop()` | `→ number` | $O(1)$ | Desapila el elemento de la cima y devuelve su valor; `-1` si vacía. / Pops top element and returns its value; `-1` if empty. |

### `Queue`

| Operación / Operation | Entrada → salida / Input → output | Complejidad / Complexity | Notas / Notes |
|---|---|---|---|
| `new Queue()` | `→ Queue` | $O(1)$ | Constructor (`init()`). Inicializa frente y final ausentes (`null`), y contador en `0`. / Constructor (`init()`). Initializes absent front and rear (`null`), and count to `0`. |
| `queue.isEmpty` | `→ boolean` | $O(1)$ | Getter observador (`is_empty()`). `true` si la cola no tiene elementos. / Observer getter (`is_empty()`). `true` if queue has no elements. |
| `queue.size` | `→ number` | $O(1)$ | Getter observador (`size()`). Retorna número de elementos. / Observer getter (`size()`). Returns element count. |
| `queue.peek` | `→ number` | $O(1)$ | Getter observador (`peek()`). Valor del elemento al frente sin desencolar; `-1` si vacía. / Observer getter (`peek()`). Front element value without dequeueing; `-1` if empty. |
| `queue.enqueue(value)` | `number → void` | $O(1)$ | Encola un nuevo nodo al final. / Enqueues new node at rear. |
| `queue.dequeue()` | `→ number` | $O(1)$ | Desencola el elemento del frente y devuelve su valor; `-1` si vacía. / Dequeues front element and returns its value; `-1` if empty. |

---

## 🧩 Decisiones de diseño / Design decisions

| Decisión / Decision | Alternativa considerada / Alternative | Razón / Reason |
|---|---|---|
| Propiedades privadas nativas (`#value`, `#next`, `#head`, etc.) | Convención de guion bajo (`_head`) o `private` de TypeScript compilado a propiedades públicas | Encapsulamiento estricto a nivel de runtime en ECMAScript, garantizando que el acceso externo respete invariantes. / Strict ECMAScript runtime encapsulation ensuring external access obeys invariants. |
| Separación modular en archivos individuales con barrel `index.ts` | Todo el código en un único archivo plano | Claridad arquitectónica, granularidad en importaciones y alineación con estándares de diseño modular. / Architectural clarity, granular imports, and alignment with modular design standards. |
| Getters idiomáticos de ECMAScript (`get head`, `get isEmpty`, `get size`, `get peek`) | Métodos tradicionales (`get_head()`, `is_empty()`, `size()`, `peek()`) | Sintaxis idiomática y ergonómica de acceso a propiedades en TypeScript para operaciones de lectura sin mutación. / Idiomatic and ergonomic property access syntax in TypeScript for non-mutating read operations. |
| Campos `#tail` y `#rear` mantenidos directamente | Recorrido lineal $O(n)$ hasta el final para inserciones en cola | Garantiza complejidad $O(1)$ requerida por el contrato para `insertTail` y `enqueue`. / Guarantees $O(1)$ complexity required by the contract for `insertTail` and `enqueue`. |

---

## 🔀 Adaptaciones idiomáticas / Idiomatic adaptations

| Especificación / Specification | Adaptación / Adaptation | Justificación / Justification |
|---|---|---|
| `Node.init(value)`, `LinkedList.init()`, `Stack.init()`, `Queue.init()` | Constructores nativos `constructor(...)` | En TypeScript/JavaScript, la inicialización de estado de una clase se realiza de forma estándar e idiomática en el constructor. / In TypeScript/JavaScript, class state initialization is idiomatically and standardly performed in the constructor. |
| Nombres de operaciones en `snake_case` (`insert_head`, `insert_tail`, `is_empty`, etc.) | Notación `camelCase` e getters (`insertHead`, `insertTail`, `isEmpty`, `head`, `size`, `peek`) | Convención de nombres estándar de JavaScript y TypeScript para métodos y propiedades observadoras. / JavaScript and TypeScript standard naming convention for methods and observer properties. |
| Ausencia de enlace (`absent`) | `null` de tipo `Node \| null` | `null` es la representación nativa idiomática de ausencia de referencia de objeto en TypeScript. / `null` is the idiomatic native representation for absent object reference in TypeScript. |
| Ubicación esperada: `src/data_structures_basics.ext` | `src/node.ts`, `src/linked-list.ts`, `src/stack.ts`, `src/queue.ts`, `src/index.ts` | Separación por componentes y exportación centralizada mediante barrel (`index.ts`). / Component separation and centralized export via module barrel (`index.ts`). |
| Ubicación esperada: `test/run_tests.ext` | Jest configurado mediante `jest.config.cjs` y ejecutado con `npm test` | Jest proporciona su propio runner de pruebas automatizado estándar en el ecosistema TypeScript. / Jest provides its own standard automated test runner in the TypeScript ecosystem. |

---

## 🚨 Indicadores de fallo / Failure indicators

| Operación / Operation | Situación de fallo / Failure situation | Indicador / Indicator | Ejemplo / Example |
|---|---|---|---|
| `node.next` | Enlace siguiente ausente / Absent next link | `null` | `new Node(10).next` → `null` |
| `list.head` | Lista vacía / Empty list | `-1` | `new LinkedList().head` → `-1` |
| `list.delete(value)` | Valor ausente en la lista / Value absent from list | `false` | `new LinkedList().delete(99)` → `false` |
| `stack.peek` | Pila vacía / Empty stack | `-1` | `new Stack().peek` → `-1` |
| `stack.pop()` | Pila vacía / Empty stack | `-1` | `new Stack().pop()` → `-1` |
| `queue.peek` | Cola vacía / Empty queue | `-1` | `new Queue().peek` → `-1` |
| `queue.dequeue()` | Cola vacía / Empty queue | `-1` | `new Queue().dequeue()` → `-1` |

---

## ✅ Cobertura de pruebas / Test coverage

### `Node`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test | Notas / Notes |
|---|---|:--:|---|
| Inicializar y observar valor/enlace<br>Initialize and observe value/link | Sí | `test/node.test.ts:16-22` | Comprueba `value === 10` y `next === null`. / Verifies `value === 10` and `next === null`. |
| Inicializar otro nodo, enlazar y recorrer<br>Initialize another node, link and traverse | Sí | `test/node.test.ts:24-34` | Enlaza segundo nodo y comprueba valor y enlace ausente. / Links second node and verifies value and absent link. |

### `LinkedList`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test | Notas / Notes |
|---|---|:--:|---|
| Estado vacío<br>Empty state | Sí | `test/linked-list.test.ts:25-28` | Comprueba `isEmpty === true`, `size === 0` y `head === -1`. / Checks `isEmpty === true`, `size === 0`, and `head === -1`. |
| Insertar por ambos extremos<br>Insert at both ends | Sí | `test/linked-list.test.ts:30-39` | Inserta 10, 20 (cola), 5 (cabeza), 10 (cola); verifica `size === 4` y `head === 5`. / Inserts 10, 20 (tail), 5 (head), 10 (tail); verifies `size === 4` and `head === 5`. |
| Eliminar primera aparición<br>Delete first occurrence | Sí | `test/linked-list.test.ts:41-44` | Elimina primera aparición de 10; verifica retorno `true`, `size === 3` y `head === 5`. / Deletes first occurrence of 10; checks `true` return, `size === 3`, and `head === 5`. |
| Valor ausente<br>Absent value | Sí | `test/linked-list.test.ts:46-49` | Intenta eliminar 99; verifica retorno `false`, `size === 3` y `head === 5`. / Attempts deleting 99; checks `false` return, `size === 3`, and `head === 5`. |
| Vaciar<br>Empty the list | Sí | `test/linked-list.test.ts:51-63` | Elimina 5, 20, 10; verifica eliminaciones exitosas, `isEmpty === true`, `size === 0` y `head === -1`. / Deletes 5, 20, 10; checks successful deletions, `isEmpty === true`, `size === 0`, and `head === -1`. |

### `Stack`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test | Notas / Notes |
|---|---|:--:|---|
| Estado vacío y extracción fallida<br>Empty state and failed removal | Sí | `test/stack.test.ts:22-25` | Comprueba `isEmpty === true`, `size === 0`, `peek === -1` y `pop() === -1`. / Checks `isEmpty === true`, `size === 0`, `peek === -1`, and `pop() === -1`. |
| LIFO y `peek` no mutante<br>LIFO and non-mutating `peek` | Sí | `test/stack.test.ts:27-35` | Apila 10, 20, 30; verifica `peek === 30` y `size === 3`. / Pushes 10, 20, 30; checks `peek === 30` and `size === 3`. |
| Extracción y reutilización<br>Removal and reuse | Sí | `test/stack.test.ts:37-48` | Desapila 30, apila 40, desapila 40, 20, 10; verifica secuencia y estado vacío final. / Pops 30, pushes 40, pops 40, 20, 10; checks sequence and final empty state. |
| Vacío tras extracción<br>Empty after removal | Sí | `test/stack.test.ts:50-53` | Desapila sobre pila vacía; verifica retorno `-1` y preservación de `isEmpty === true`. / Pops from empty stack; checks `-1` return and preserved `isEmpty === true`. |

### `Queue`

| Caso de la especificación / Specification case | Cubierto / Covered | Prueba / Test | Notas / Notes |
|---|---|:--:|---|
| Estado vacío y extracción fallida<br>Empty state and failed removal | Sí | `test/queue.test.ts:22-25` | Comprueba `isEmpty === true`, `size === 0`, `peek === -1` y `dequeue() === -1`. / Checks `isEmpty === true`, `size === 0`, `peek === -1`, and `dequeue() === -1`. |
| FIFO y `peek` no mutante<br>FIFO and non-mutating `peek` | Sí | `test/queue.test.ts:27-35` | Encola 10, 20, 30; verifica `peek === 10` y `size === 3`. / Enqueues 10, 20, 30; checks `peek === 10` and `size === 3`. |
| Extracción y reutilización<br>Removal and reuse | Sí | `test/queue.test.ts:37-48` | Desencola 10, encola 40, desencola 20, 30, 40; verifica secuencia y estado vacío final. / Dequeues 10, enqueues 40, dequeues 20, 30, 40; checks sequence and final empty state. |
| Vacío tras extracción<br>Empty after removal | Sí | `test/queue.test.ts:50-53` | Desencola sobre cola vacía; verifica retorno `-1` y preservación de `isEmpty === true`. / Dequeues from empty queue; checks `-1` return and preserved `isEmpty === true`. |

---

## ⚠️ Limitaciones conocidas / Known limitations

| Limitación / Limitation | Impacto / Impact | Alternativa o plan / Workaround or plan |
|---|---|---|
| Ninguna / None | No aplica / Not applicable | Las cuatro estructuras cumplen estrictamente las garantías de complejidad $O(1)$ y $O(n)$ del contrato sin imponer límites artificiales. / All four structures strictly satisfy the contract's $O(1)$ and $O(n)$ complexity bounds without imposing artificial limits. |

---

## 📝 Notas de implementación / Implementation Notes

**ES:**

- **Celda compartida e independencia de ADTs:** `Node` es el único tipo de celda enlazada del módulo. `Stack` y `Queue` no heredan ni envuelven `LinkedList`; administran sus propios punteros (`#top` en Stack; `#front` y `#rear` en Queue) y sus contadores directamente.
- **Gestión de memoria:** En JavaScript y TypeScript, la memoria se gestiona automáticamente mediante el recolector de basura (GC) del motor V8. Al desenlazar nodos huérfanos durante `pop`, `dequeue` o `delete`, las celdas desreferenciadas son reclamadas por el GC.
- **Valores centinela e indicadores de fallo:** Las consultas de enteros sobre estructuras vacías devuelven el centinela natural `-1`. La ausencia de enlaces o nodos se modela con `null`. `delete` señala éxito o fallo con booleanos (`true` / `false`). Ningún método lanza excepciones.
- **Encapsulamiento estricto:** Se utilizan campos privados nativos de ECMAScript (`#`) para evitar la manipulación externa no controlada de punteros y contadores internos.

**EN:**

- **Shared cell and ADT independence:** `Node` is the module's single linked cell type. `Stack` and `Queue` neither inherit from nor wrap `LinkedList`; they directly manage their own pointers (`#top` in Stack; `#front` and `#rear` in Queue) and counts.
- **Memory management:** In JavaScript and TypeScript, memory is automatically managed by the V8 engine garbage collector (GC). Unlinking orphan nodes during `pop`, `dequeue`, or `delete` allows dereferenced cells to be reclaimed by the GC.
- **Sentinel values and failure indicators:** Integer queries on empty structures return the natural sentinel `-1`. Absence of links or nodes is modeled as `null`. `delete` signals success or failure using booleans (`true` / `false`). No method throws exceptions.
- **Strict encapsulation:** Native ECMAScript private fields (`#`) are used to prevent uncontrolled external mutation of internal pointers and counters.

**ES:** Este proyecto también está implementado en otros lenguajes. Explora el repositorio principal para consultar las demás versiones.

**EN:** This project is also implemented in other languages. Explore the main repository to see the other versions.

---

## 🔍 Checklist de validación / Validation checklist

- [x] La suite nativa se ejecutó y su salida real está copiada en este README.
- [x] Cada caso de la especificación tiene su fila en _Cobertura de pruebas_ (o `Omitido` con razón).
- [x] Cada desviación del pseudocódigo o de la ubicación esperada está en _Adaptaciones idiomáticas_.
- [x] Cada operación con fallo posible está en _Indicadores de fallo_.
- [x] No hay rutas absolutas del autor, credenciales ni salidas inventadas.
- [x] Los enlaces relativos resuelven dentro del repositorio y el documento es bilingüe.
- [x] Ninguna sección repite lo que ya dice la especificación.

---

## 📚 Referencias / References

| Tipo / Kind | Referencia / Reference |
|---|---|
| Especificación / Specification | [`06_Data_Structures_Basics.md`](https://yorche3.github.io/programming_languages/core/algorithms/06_Data_Structures_Basics/) |
| Módulo homologado del lenguaje / Homologated module | [`typescript/core/foundations/numbers/`](../../foundations/numbers/) |
| Guía de inicialización / Initialisation guide | [`core/00_Project_Initialization_Guide.md`](https://yorche3.github.io/programming_languages/core/00_Project_Initialization_Guide/) |
| Adaptaciones idiomáticas / Idiomatic adaptations | [`AGENT_Template.md`](https://yorche3.github.io/programming_languages/docs/AGENT_Template/) |
| Validación de la documentación / Documentation validation | [`WORKFLOW.md`](https://yorche3.github.io/programming_languages/docs/WORKFLOW/) |
| Documentación oficial del lenguaje / Language official docs | [TypeScript: Classes and Private Fields](https://www.typescriptlang.org/docs/handbook/2/classes.html) |

---

*🌐 [github.com/yorche3/programming_languages](https://github.com/yorche3/programming_languages) · [GitHub Pages](https://yorche3.github.io/programming_languages/)*

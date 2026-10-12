// Andamiaje del módulo: comprueba que el contrato (firmas y esqueletos con
// centinela) se carga por el barrel y que las rutas `.js` de `src/` resuelven.
//
// La suite real es el paso 4c y se reparte, según la convención del módulo, en
// `node.test.ts`, `linked-list.test.ts`, `stack.test.ts` y `queue.test.ts`.
import { Node, LinkedList, Stack, Queue } from "../src/index.js";

describe("data_structures_basics", () => {
  test("el barrel reexporta las cuatro clases del contrato", () => {
    expect(typeof Node).toBe("function");
    expect(typeof LinkedList).toBe("function");
    expect(typeof Stack).toBe("function");
    expect(typeof Queue).toBe("function");
  });
});

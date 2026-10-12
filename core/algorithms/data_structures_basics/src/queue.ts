// queue — cola FIFO construida desde cero sobre Node.
//
// Especificación: 06_Data_Structures_Basics
//
// Contrato: ADT independiente; mantiene su propio frente, su final y su contador
// y no delega en `LinkedList`. `isEmpty`, `size` y `peek` observan sin mutar;
// `enqueue` y `dequeue` mutan en sitio. Todas las operaciones son O(1).
//
// Estado inicial: los campos arrancan vacíos —el `init()` de la especificación—,
// así que `new Queue()` ya es la cola vacía. El resto de los cuerpos son
// esqueletos con el centinela de su tipo (ver `node.ts`).
import { Node } from "./node.js";

export class Queue {
  #front: Node | null = null;
  #rear: Node | null = null;
  #count = 0;

  /** Esqueleto: `true` solo si no hay nodos. */
  get isEmpty(): boolean {
    return false;
  }

  /** Esqueleto: número de nodos (el centinela es -1 mientras sea esqueleto). */
  get size(): number {
    return -1;
  }

  /** Esqueleto: valor del frente, o -1 cuando está vacía. No muta. */
  get peek(): number {
    return -1;
  }

  /** Esqueleto: encola por el final. O(1). Sin resultado de fallo. */
  enqueue(value: number): void {
    void value;
  }

  /** Esqueleto: desencola el valor del frente, o -1 cuando está vacía. O(1). */
  dequeue(): number {
    return -1;
  }
}

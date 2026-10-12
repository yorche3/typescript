// stack — pila LIFO construida desde cero sobre Node.
//
// Especificación: 06_Data_Structures_Basics
//
// Contrato: ADT independiente; mantiene su propia cima y su contador y no delega
// en `LinkedList`. `isEmpty`, `size` y `peek` observan sin mutar; `push` y `pop`
// mutan en sitio. Todas las operaciones son O(1).
//
// Estado inicial: los campos arrancan vacíos —el `init()` de la especificación—,
// así que `new Stack()` ya es la pila vacía. El resto de los cuerpos son
// esqueletos con el centinela de su tipo (ver `node.ts`).
import { Node } from "./node.js";

export class Stack {
  #top: Node | null = null;
  #count = 0;

  /** Esqueleto: `true` solo si no hay nodos. */
  get isEmpty(): boolean {
    return this.#top === null;
  }

  /** Esqueleto: número de nodos (el centinela es -1 mientras sea esqueleto). */
  get size(): number {
    return this.#count;
  }

  /** Esqueleto: valor de la cima, o -1 cuando está vacía. No muta. */
  get peek(): number {
    return this.#top?.value ?? -1;
  }

  /** Esqueleto: apila sobre la cima. O(1). Sin resultado de fallo. */
  push(value: number): void {
    const newNode = new Node(value);
    newNode.next = this.#top;
    this.#top = newNode;
    this.#count++;
  }

  /** Esqueleto: desapila el valor de la cima, o -1 cuando está vacía. O(1). */
  pop(): number {
    if (this.#top === null) {
      return -1;
    }
    const value = this.#top.value;
    this.#top = this.#top.next;
    this.#count--;
    return value;
  }
}

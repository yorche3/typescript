// linked_list — lista enlazada simple construida desde cero sobre Node.
//
// Especificación: 06_Data_Structures_Basics
//
// Contrato: `head`, `isEmpty` y `size` observan sin mutar; `insertHead`,
// `insertTail` y `delete` mutan en sitio. La lista guarda cabeza, cola y
// contador, así que las dos inserciones son O(1) y `delete` recorre en O(n), como
// pide la especificación.
//
// Estado inicial: los campos arrancan vacíos —el `init()` de la especificación—,
// así que `new LinkedList()` ya es la lista vacía. El resto de los cuerpos son
// esqueletos con el centinela de su tipo (ver `node.ts`).
import { Node } from "./node.js";

export class LinkedList {
  #head: Node | null = null;
  #tail: Node | null = null;
  #count = 0;

  /** Esqueleto: valor de la cabeza, o -1 cuando la lista está vacía. No muta. */
  get head(): number {
    return -1;
  }

  /** Esqueleto: `true` solo si no hay nodos. */
  get isEmpty(): boolean {
    return false;
  }

  /** Esqueleto: número de nodos (el centinela es -1 mientras sea esqueleto). */
  get size(): number {
    return -1;
  }

  /** Esqueleto: inserta al principio. O(1). Sin resultado de fallo. */
  insertHead(value: number): void {
    void value;
  }

  /** Esqueleto: inserta al final. O(1). Sin resultado de fallo. */
  insertTail(value: number): void {
    void value;
  }

  /** Esqueleto: borra la primera aparición; `false` cuando el valor no estaba. O(n). */
  delete(value: number): boolean {
    void value;
    return false;
  }
}

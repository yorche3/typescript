// node — celda enlazada compartida por LinkedList, Stack y Queue.
//
// Especificación: 06_Data_Structures_Basics
//
// Contrato: un único tipo de celda para las tres estructuras. El valor es
// inmutable tras la construcción (`readonly`) y el enlace es mutable, que es lo
// que permite reenganchar y avanzar sin copiar la celda.
//
// Adecuaciones de salida de centinela (todavía no hay fallos reales):
//   - **int → -1**: las lecturas enteras que pueden fallar (`head`, `peek`, `pop`,
//     `dequeue`) y `size` mientras su cuerpo sea un esqueleto.
//   - **bool → false**: `isEmpty` y `delete`.
//   - **Solo las clases y los enlaces usan nulo**: `next` es `Node | null`, y
//     `null` es la ausencia de enlace. Ningún cuerpo lanza excepciones.
//
// Estado inicial: el `constructor` fija el valor y deja el enlace ausente —el
// `init(value)` de la especificación— y queda implementado; el resto de los
// cuerpos son esqueletos con el centinela de su tipo. La implementación es el
// paso 5.
export class Node {
  readonly #value: number;
  #next: Node | null;

  /** Crea la celda con `value` y el enlace ausente. */
  constructor(value: number) {
    this.#value = value;
    this.#next = null;
  }

  /** Esqueleto: valor de la celda. */
  get value(): number {
    return this.#value;
  }

  /** Esqueleto: enlace a la celda siguiente, o `null` cuando no hay ninguna. */
  get next(): Node | null {
    return this.#next;
  }

  /** Esqueleto: reengancha el enlace y devuelve el enlace nuevo. */
  set next(next: Node | null) {
    this.#next = next;
  }
}

import { Queue } from "../src/index.js";
import { runScenarios, type Scenario } from "./scenario-runner.js";

describe("Queue", () => {
  test("should satisfy the specified scenarios", () => {
    const failureValue = -1;
    const enqueuedValues = [10, 20, 30];
    const reuseValue = 40;
    const emptyStateOutput = { isEmpty: true, size: 0, peek: failureValue, dequeue: failureValue };
    const fifoOutput = { peek: enqueuedValues[0]!, size: 3 };
    const removalOutput = { values: [10, 20, 30, 40], isEmpty: true, size: 0 };
    const emptyAfterRemovalOutput = { dequeue: failureValue, isEmpty: true };
    const queue = new Queue();

    const scenarios: readonly Scenario<
      | typeof emptyStateOutput
      | typeof fifoOutput
      | typeof removalOutput
      | typeof emptyAfterRemovalOutput
    >[] = [
      {
        name: "empty state and failed removal",
        expected: emptyStateOutput,
        observe: () => ({ isEmpty: queue.isEmpty, size: queue.size, peek: queue.peek, dequeue: queue.dequeue() })
      },
      {
        name: "FIFO and non-mutating peek",
        expected: fifoOutput,
        observe: () => {
          queue.enqueue(enqueuedValues[0]!);
          queue.enqueue(enqueuedValues[1]!);
          queue.enqueue(enqueuedValues[2]!);
          return { peek: queue.peek, size: queue.size };
        }
      },
      {
        name: "removal and reuse",
        expected: removalOutput,
        observe: () => {
          const first = queue.dequeue();
          queue.enqueue(reuseValue);
          return {
            values: [first, queue.dequeue(), queue.dequeue(), queue.dequeue()],
            isEmpty: queue.isEmpty,
            size: queue.size
          };
        }
      },
      {
        name: "empty after removal",
        expected: emptyAfterRemovalOutput,
        observe: () => ({ dequeue: queue.dequeue(), isEmpty: queue.isEmpty })
      }
    ];

    runScenarios("Queue", scenarios);
  });
});

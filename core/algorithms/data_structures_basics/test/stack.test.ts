import { Stack } from "../src/index.js";
import { runScenarios, type Scenario } from "./scenario-runner.js";

describe("Stack", () => {
  test("should satisfy the specified scenarios", () => {
    const failureValue = -1;
    const pushedValues = [10, 20, 30];
    const reuseValue = 40;
    const emptyStateOutput = { isEmpty: true, size: 0, peek: failureValue, pop: failureValue };
    const lifoOutput = { peek: pushedValues[2]!, size: 3 };
    const removalOutput = { values: [30, 40, 20, 10], isEmpty: true, size: 0 };
    const emptyAfterRemovalOutput = { pop: failureValue, isEmpty: true };
    const stack = new Stack();

    const scenarios: readonly Scenario<
      | typeof emptyStateOutput
      | typeof lifoOutput
      | typeof removalOutput
      | typeof emptyAfterRemovalOutput
    >[] = [
      {
        name: "empty state and failed removal",
        expected: emptyStateOutput,
        observe: () => ({ isEmpty: stack.isEmpty, size: stack.size, peek: stack.peek, pop: stack.pop() })
      },
      {
        name: "LIFO and non-mutating peek",
        expected: lifoOutput,
        observe: () => {
          stack.push(pushedValues[0]!);
          stack.push(pushedValues[1]!);
          stack.push(pushedValues[2]!);
          return { peek: stack.peek, size: stack.size };
        }
      },
      {
        name: "removal and reuse",
        expected: removalOutput,
        observe: () => {
          const first = stack.pop();
          stack.push(reuseValue);
          return {
            values: [first, stack.pop(), stack.pop(), stack.pop()],
            isEmpty: stack.isEmpty,
            size: stack.size
          };
        }
      },
      {
        name: "empty after removal",
        expected: emptyAfterRemovalOutput,
        observe: () => ({ pop: stack.pop(), isEmpty: stack.isEmpty })
      }
    ];

    runScenarios("Stack", scenarios);
  });
});

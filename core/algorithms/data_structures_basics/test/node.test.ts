import { Node } from "../src/index.js";
import { runScenarios, type Scenario } from "./scenario-runner.js";

describe("Node", () => {
  test("should satisfy the specified scenarios", () => {
    const firstNodeValue = 10;
    const secondNodeValue = 20;
    const absentNext = null;
    const initializedNodeOutput = { value: firstNodeValue, next: absentNext };
    const linkedNodeOutput = { linkedValue: secondNodeValue, secondNext: absentNext };
    let firstNode: Node;
    let secondNode: Node;

    const scenarios: readonly Scenario<{ value: number; next: Node | null } | { linkedValue: number; secondNext: Node | null }>[] = [
      {
        name: "initialize and observe value and link",
        expected: initializedNodeOutput,
        observe: () => {
          firstNode = new Node(firstNodeValue);
          return { value: firstNode.value, next: firstNode.next };
        }
      },
      {
        name: "initialize another node, link, and traverse",
        expected: linkedNodeOutput,
        observe: () => {
          secondNode = new Node(secondNodeValue);
          firstNode.next = secondNode;
          return {
            linkedValue: firstNode.next?.value ?? -1,
            secondNext: secondNode.next
          };
        }
      }
    ];

    runScenarios("Node", scenarios);
  });
});

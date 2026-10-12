import { LinkedList } from "../src/index.js";
import { runScenarios, type Scenario } from "./scenario-runner.js";

describe("LinkedList", () => {
  test("should satisfy the specified scenarios", () => {
    const emptyHeadFailure = -1;
    const insertedHeadValue = 5;
    const insertedTailValues = [10, 20, 10];
    const absentValue = 99;
    const emptyStateOutput = { isEmpty: true, size: 0, head: emptyHeadFailure };
    const insertionOutput = { size: 4, head: insertedHeadValue };
    const deleteFirstOutput = { deleted: true, size: 3, head: insertedHeadValue };
    const absentValueOutput = { deleted: false, size: 3, head: insertedHeadValue };
    const emptiedListOutput = { deleted: [true, true, true], isEmpty: true, size: 0, head: emptyHeadFailure };
    const list = new LinkedList();

    const scenarios: readonly Scenario<
      | typeof emptyStateOutput
      | typeof insertionOutput
      | typeof deleteFirstOutput
      | typeof absentValueOutput
      | typeof emptiedListOutput
    >[] = [
      {
        name: "empty state",
        expected: emptyStateOutput,
        observe: () => ({ isEmpty: list.isEmpty, size: list.size, head: list.head })
      },
      {
        name: "insert at both ends",
        expected: insertionOutput,
        observe: () => {
          list.insertTail(insertedTailValues[0]!);
          list.insertTail(insertedTailValues[1]!);
          list.insertHead(insertedHeadValue);
          list.insertTail(insertedTailValues[2]!);
          return { size: list.size, head: list.head };
        }
      },
      {
        name: "delete first occurrence",
        expected: deleteFirstOutput,
        observe: () => ({ deleted: list.delete(insertedTailValues[0]!), size: list.size, head: list.head })
      },
      {
        name: "absent value",
        expected: absentValueOutput,
        observe: () => ({ deleted: list.delete(absentValue), size: list.size, head: list.head })
      },
      {
        name: "empty the list",
        expected: emptiedListOutput,
        observe: () => ({
          deleted: [
            list.delete(insertedHeadValue),
            list.delete(insertedTailValues[1]!),
            list.delete(insertedTailValues[2]!)
          ],
          isEmpty: list.isEmpty,
          size: list.size,
          head: list.head
        })
      }
    ];

    runScenarios("LinkedList", scenarios);
  });
});

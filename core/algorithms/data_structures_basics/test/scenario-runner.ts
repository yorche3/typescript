export interface Scenario<T> {
  readonly name: string;
  readonly expected: T;
  readonly observe: () => T;
}

export function runScenarios<T>(subject: string, scenarios: readonly Scenario<T>[]): void {
  for (const scenario of scenarios) {
    expect({
      subject,
      caseName: scenario.name,
      output: scenario.observe()
    }).toEqual({
      subject,
      caseName: scenario.name,
      output: scenario.expected
    });
  }
}

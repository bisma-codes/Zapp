import { describe, expect, it } from "vitest";
import { calculateSavings, isValidEmail } from "./calculator";

describe("calculateSavings", () => {
  it("returns a bounded, internally consistent estimate", () => {
    const result = calculateSavings({
      monthlyBill: 18000,
      monthlyUnits: 500,
      hasSolar: false,
      applianceLoad: "typical",
      targetReduction: 15,
    });

    expect(result.monthlySavings).toBeGreaterThan(0);
    expect(result.monthlySavings).toBeLessThanOrEqual(18000 * 0.32);
    expect(result.yearlySavings).toBe(result.monthlySavings * 12);
    expect(result.projectedBill).toBe(18000 - result.monthlySavings);
  });

  it("never returns negative values for invalid numeric input", () => {
    const result = calculateSavings({
      monthlyBill: -200,
      monthlyUnits: -10,
      hasSolar: true,
      applianceLoad: "heavy",
      targetReduction: 100,
    });

    expect(result.monthlySavings).toBe(0);
    expect(result.reducedUnits).toBe(0);
    expect(result.projectedBill).toBe(0);
  });
});

describe("isValidEmail", () => {
  it("accepts normal email addresses and rejects malformed values", () => {
    expect(isValidEmail("hello@example.com")).toBe(true);
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("")).toBe(false);
  });
});

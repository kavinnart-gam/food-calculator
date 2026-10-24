
import { describe, it, expect } from "vitest";

import { Calculator } from "../src/Calculator";
import type { FoodSet } from "../src/types";
import type { DiscountRule } from "../src/discounts/DiscountRule";

describe("Calculator", () => {
  const calculator = new Calculator();

  it("calculates the total price of multiple items", () => {
    const result = calculator.calculate({
      items: ["red", "green"],
    });

    expect(result).toBe(90);
  });

  it("returns 0 for an empty order", () => {
    const result = calculator.calculate({
      items: [],
    });

    expect(result).toBe(0);
  });

  it("calculates items without discounts", () => {
    const result = calculator.calculate({
      items: ["red", "blue", "yellow"],
    });

    expect(result).toBe(130);
  });

  it("applies member and bundle discounts together", () => {
    const result = calculator.calculate({
      items: [
        "orange",
        "orange",
        "orange",
        "orange",
        "orange",
      ],
      isMember: true,
    });

    expect(result).toBe(518.4);
  });

  it("handles multiple eligible bundle colors", () => {
    const result = calculator.calculate({
      items: [
        "red",
        "orange",
        "orange",
        "green",
        "green",
        "pink",
      ],
      isMember: true,
    });

    expect(result).toBe(390.6);
  });

  it("rejects unknown food sets", () => {
    expect(() =>
      calculator.calculate({
        items: ["unknown" as FoodSet],
      }),
    ).toThrow("Unknown food set: unknown");
  });

  it("supports custom discount rules", () => {
    const fixedDiscount: DiscountRule = {
      apply: (total) => total - 20,
    };

    const customCalculator = new Calculator([fixedDiscount]);

    const result = customCalculator.calculate({
      items: ["red", "blue"],
    });

    expect(result).toBe(60);
  });

  it("supports disabling all discount rules", () => {
    const customCalculator = new Calculator([]);

    const result = customCalculator.calculate({
      items: ["orange", "orange"],
      isMember: true,
    });

    expect(result).toBe(240);
  });
});

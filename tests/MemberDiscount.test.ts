
import { describe, it, expect } from "vitest";

import { MemberDiscount } from "../src/discounts/MemberDiscount";

describe("MemberDiscount", () => {
    const discount = new MemberDiscount();

    it("applies 10% discount for members", () => {
        const result = discount.apply(100, {
            items: ["red", "red"],
            isMember: true,
        });

        expect(result).toBe(90);
    });

    it("does not apply discount for non-members", () => {
        const result = discount.apply(100, {
            items: ["red", "red"],
            isMember: false,
        });

        expect(result).toBe(100);
    });

    it("returns 0 when total is 0", () => {
        const result = discount.apply(0, {
            items: [],
            isMember: true,
        });

        expect(result).toBe(0);
    });

    it("applies 10% to the current total", () => {
        const result = discount.apply(228, {
            items: ["orange", "orange"],
            isMember: true,
        });

        expect(result).toBeCloseTo(205.2);
    });
});

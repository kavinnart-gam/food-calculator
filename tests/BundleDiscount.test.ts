
import { describe, it, expect } from "vitest";

import { BundleDiscount } from "../src/discounts/BundleDiscount";

describe("BundleDiscount", () => {
    const discount = new BundleDiscount();

    it("applies 5% discount for two orange sets", () => {
        const result = discount.apply(240, {
            items: ["orange", "orange"],
            isMember: false,
        });

        expect(result).toBe(228);
    });

    it("applies 5% discount for two green sets", () => {
        const result = discount.apply(80, {
            items: ["green", "green"],
            isMember: false,
        });

        expect(result).toBe(76);
    });

    it("applies 5% discount for two pink sets", () => {
        const result = discount.apply(160, {
            items: ["pink", "pink"],
            isMember: false,
        });

        expect(result).toBe(152);
    });

    it("does not discount a single eligible item", () => {
        const result = discount.apply(120, {
            items: ["orange"],
            isMember: false,
        });

        expect(result).toBe(120);
    });

    it("discounts only four of five orange sets", () => {
        const result = discount.apply(600, {
            items: [
                "orange",
                "orange",
                "orange",
                "orange",
                "orange",
            ],
            isMember: false,
        });

        expect(result).toBe(576);
    });

    it("does not combine different colors into a pair", () => {
        const result = discount.apply(240, {
            items: ["green", "pink", "orange"],
            isMember: false,
        });

        expect(result).toBe(240);
    });

    it("does not discount ineligible sets", () => {
        const result = discount.apply(100, {
            items: ["red", "red"],
            isMember: false,
        });

        expect(result).toBe(100);
    });

    it("applies discounts across different eligible colors", () => {
        const result = discount.apply(480, {
            items: [
                "orange",
                "orange",
                "green",
                "green",
                "pink",
                "pink",
            ],
            isMember: false,
        });

        expect(result).toBe(456);
    });

    it("returns 0 for empty items", () => {
        const result = discount.apply(0, {
            items: [],
            isMember: false,
        });

        expect(result).toBe(0);
    });
});

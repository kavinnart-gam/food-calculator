
import type { FoodSet } from "./types";

export const FOOD_PRICES: Readonly<Record<FoodSet, number>> = {
    red: 50,
    green: 40,
    blue: 30,
    yellow: 50,
    pink: 80,
    purple: 90,
    orange: 120,
};

export const MEMBER_DISCOUNT_RATE = 0.1;
export const BUNDLE_DISCOUNT_RATE = 0.05;

export const BUNDLE_ELIGIBLE_SETS: ReadonlySet<FoodSet> =
    new Set(["green", "pink", "orange"]);


import {
    FOOD_PRICES,
    BUNDLE_ELIGIBLE_SETS,
    BUNDLE_DISCOUNT_RATE,
} from "../constants";

import type { FoodSet, DiscountContext } from "../types";
import type { DiscountRule } from "./DiscountRule";

export class BundleDiscount implements DiscountRule {
    apply(total: number, context: DiscountContext): number {
        const counts = this.countItems(context.items);

        let discount = 0;

        for (const [item, count] of counts) {
            if (!BUNDLE_ELIGIBLE_SETS.has(item)) {
                continue;
            }

            const pairCount = Math.floor(count / 2);
            const discountedQuantity = pairCount * 2;

            discount +=
                discountedQuantity *
                FOOD_PRICES[item] *
                BUNDLE_DISCOUNT_RATE;
        }

        return total - discount;
    }

    private countItems(items: FoodSet[]): Map<FoodSet, number> {
        const counts = new Map<FoodSet, number>();

        for (const item of items) {
            counts.set(item, (counts.get(item) ?? 0) + 1);
        }

        return counts;
    }
}

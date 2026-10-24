
import { FOOD_PRICES } from "./constants";
import type { FoodSet, Order } from "./types";

import type { DiscountRule } from "./discounts/DiscountRule";
import { MemberDiscount } from "./discounts/MemberDiscount";
import { BundleDiscount } from "./discounts/BundleDiscount";

export class Calculator {
    constructor(
        private readonly discountRules: DiscountRule[] = [
            new BundleDiscount(),
            new MemberDiscount(),
        ],
    ) { }

    calculate(order: Order): number {
        const { items, isMember = false } = order;

        const subtotal = this.calculateSubtotal(items);

        const context = { items, isMember };

        const finalTotal = this.discountRules.reduce(
            (total, rule) => rule.apply(total, context),
            subtotal,
        );

        return Math.round(finalTotal * 100) / 100;
    }

    private calculateSubtotal(items: FoodSet[]): number {
        return items.reduce(
            (total, item) => total + this.getPrice(item),
            0,
        );
    }

    private getPrice(item: FoodSet): number {
        const price = FOOD_PRICES[item];

        if (price === undefined) {
            throw new Error(`Unknown food set: ${item}`);
        }

        return price;
    }
}

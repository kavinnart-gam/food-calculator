
import type { DiscountContext } from "../types";

export interface DiscountRule {
    apply(total: number, context: DiscountContext): number;
}

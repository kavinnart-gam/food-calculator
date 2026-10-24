
import { MEMBER_DISCOUNT_RATE } from "../constants";
import type { DiscountContext } from "../types";
import type { DiscountRule } from "./DiscountRule";

export class MemberDiscount implements DiscountRule {
    apply(total: number, context: DiscountContext): number {
        if (!context.isMember) {
            return total;
        }

        return total * (1 - MEMBER_DISCOUNT_RATE);
    }
}

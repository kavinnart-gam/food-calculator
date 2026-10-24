
export type FoodSet =
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "pink"
    | "purple"
    | "orange";

export interface Order {
    items: FoodSet[];
    isMember?: boolean;
}

export interface DiscountContext {
    items: FoodSet[];
    isMember: boolean;
}

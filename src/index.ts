
import { Calculator } from "./Calculator";

const calculator = new Calculator();

const normalOrder = calculator.calculate({
    items: ["red", "green"],
});

const memberOrder = calculator.calculate({
    items: ["red", "green"],
    isMember: true,
});

const bundleOrder = calculator.calculate({
    items: ["orange", "orange", "orange", "orange", "orange"],
});

const combinedOrder = calculator.calculate({
    items: ["orange", "orange", "orange", "orange", "orange"],
    isMember: true,
});

console.log("Normal:", normalOrder);
console.log("Member:", memberOrder);
console.log("Bundle:", bundleOrder);
console.log("Bundle + Member:", combinedOrder);

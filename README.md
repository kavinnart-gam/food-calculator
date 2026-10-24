
# Food Calculator

A TypeScript-based food store calculator supporting
member and bundle discounts.

## Tech Stack

- TypeScript
- Node.js
- Vitest

## Features

- Calculate total prices for 7 food sets
- Support multiple items per order
- Apply 10% member discount
- Apply 5% bundle discount
- Support multiple discount rules
- Unit tests

## Installation

npm install

## Run

npm run start

## Test

npm run test

## Type Check

npm run typecheck

## Discount Rules

### Member Discount
Members receive 10% off their total after
bundle discounts have been applied.

### Bundle Discount
Green, Pink, and Orange sets are eligible
for a 5% discount when purchased in pairs.

## Assumptions

- Bundle discounts apply to pairs of the same color.
- Only complete pairs receive the 5% discount.
- Remaining unpaired items are charged at full price.
- Bundle discounts are applied before member discounts.
- Final prices are rounded to two decimal places.
- Orders contain only the seven supported food sets.

## Design

The application uses a Strategy Pattern to separate
discount logic from the Calculator class.

New discount rules can be introduced by implementing
the DiscountRule interface.

Discount rules are applied sequentially in their
configured order.

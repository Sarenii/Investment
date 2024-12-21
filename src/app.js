// app.js

// Importing individual operator modules (assuming ES6 modules)
import { add, subtract, multiply, divide, modulus } from './Week1/operators_joshua.js';
import { isEqual, isStrictEqual, isNotEqual, isStrictNotEqual, isGreaterThan, isLessThan, andOperation, orOperation, notOperation } from './Week1/operators_sarah.js';
import { greetUserConcat, greetUserTemplate } from './Week1/operators_mercy.js';
import { calculateTotalInvestment, calculateTotalInvestmentWithParentheses } from './Week1/operators_blessing.js';

// Example Usage
const principal = 1000;
const rate = 0.05;
const time = 5;
const interest = multiply(principal, rate * time);
const totalInvestment = add(principal, interest);
console.log(`Total Investment: $${totalInvestment}`); // $1250

const message = greetUserTemplate("Alice", totalInvestment);
console.log(message); // Hello, Alice! Your current investment is $1250.

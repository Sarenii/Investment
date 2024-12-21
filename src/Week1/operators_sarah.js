// Comparison Operators
function isEqual(a, b) { return a == b; }
function isStrictEqual(a, b) { return a === b; }
function isNotEqual(a, b) { return a != b; }
function isStrictNotEqual(a, b) { return a !== b; }
function isGreaterThan(a, b) { return a > b; }
function isLessThan(a, b) { return a < b; }

console.log("isEqual (5, '5'):", isEqual(5, '5')); // true
console.log("isStrictEqual (5, '5'):", isStrictEqual(5, '5')); // false
console.log("isNotEqual (5, '6'):", isNotEqual(5, '6')); // true
console.log("isStrictNotEqual (5, '5'):", isStrictNotEqual(5, '5')); // true
console.log("isGreaterThan (10, 5):", isGreaterThan(10, 5)); // true
console.log("isLessThan (3, 7):", isLessThan(3, 7)); // true

// Logical Operators
function andOperation(a, b) { return a && b; }
function orOperation(a, b) { return a || b; }
function notOperation(a) { return !a; }

console.log("andOperation(true, false):", andOperation(true, false)); // false
console.log("orOperation(true, false):", orOperation(true, false)); // true
console.log("notOperation(true):", notOperation(true)); // false

// Exercise 1: Eligibility for Investment

function isEligibleForInvestment(age, investmentAmount) {
    return age > 18 && investmentAmount > 500;
}

console.log("isEligibleForInvestment(19, 600):", isEligibleForInvestment(19, 600)); // should return true
console.log("isEligibleForInvestment(18, 600):", isEligibleForInvestment(18, 600)); // should return false
console.log("isEligibleForInvestment(19, 500):", isEligibleForInvestment(19, 500)); // should return false

// Exercise 2: Evaluate Investment Risk

function evaluateInvestmentRisk(investmentAmount, investmentYears) {
    if (investmentAmount > 1000 && investmentYears < 1) {
        return 'High Risk';
    } else if (investmentAmount >= 500 && investmentAmount <= 1000 && investmentYears >= 1 && investmentYears <= 3) {
        return 'Moderate Risk';
    } else {
        return 'Low Risk';
    }
}

console.log("evaluateInvestmentRisk(1200, 0.5):", evaluateInvestmentRisk(1200, 0.5)); // should return 'High Risk'
console.log("evaluateInvestmentRisk(600, 2):", evaluateInvestmentRisk(600, 2)); // should return 'Moderate Risk'
console.log("evaluateInvestmentRisk(400, 4):", evaluateInvestmentRisk(400, 4)); // should return 'Low Risk'

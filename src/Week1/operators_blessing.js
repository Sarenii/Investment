function calculateTotalInvestment(principal, rate, time) {
    // Without parentheses
    let interest = principal * rate * time;
    return principal + interest;
}

console.log(calculateTotalInvestment(1000, 0.05, 5)); 
// Output: 1000 + (1000 * 0.05 * 5) = 1000 + 250 = 1250

function calculateTotalInvestmentWithParentheses(principal, rate, time) {
    // With parentheses to ensure correct order
    let interest = principal * (rate * time);
    return principal + interest;
}

console.log(calculateTotalInvestmentWithParentheses(1000, 0.05, 5)); 
// Output: 1000 + (1000 * (0.05 * 5)) = 1000 + 250 = 1250


/*
Exercise 1:
Create expressions that demonstrate different operator precedence scenarios. Use comments to explain the expected outcomes.
*/

/*
Exercise 2:
Develop a function evaluateExpression that takes a complex mathematical expression as a string and returns the evaluated result. Use parentheses to control the evaluation order. 
*/
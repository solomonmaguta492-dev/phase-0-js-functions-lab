// Function 1: CalculateTax
//Calculate 10% of given amount

function calculateTax(amount) {
return amount * 0.10;
}
let tax = calculateTax(100)
console.log(tax)

// Function 2 : convertToUpperCase
// Converts a string to uppercase

function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase(`hello`));
console.log(convertToUpperCase(`good morning`));

// Function 3 : 
// Returns the larger of two numbers
function findMaximum(num1, num2) {
    return Math.max(num1, num2) ;
}
console.log(findMaximum(5 , 9));
console.log(findMaximum(100 ,45 ));
console.log(findMaximum(7 , 7));
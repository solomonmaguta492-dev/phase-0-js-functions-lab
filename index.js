// Function 1: CalculateTax
//Calculate 10% of given amount

function calculateTax(amount) {
  return amount * 0.1;
}
let tax = calculateTax(100);
console.log(tax);

// Function 2 : convertToUpperCase
// Converts a string to uppercase

function convertToUpperCase(text) {
  return text.toUpperCase();
}
console.log(convertToUpperCase(`hello`));
console.log(convertToUpperCase(`good morning`));

// Function 3 : findMaximum
// Returns the larger of two numbers

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
console.log(findMaximum(5, 9));
console.log(findMaximum(100, 45));
console.log(findMaximum(7, 7));

// Function 4 : isPalindrome
// Returns true if the word reads the same forwards and backwards

function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  return cleaned === cleaned.split("").reverse("").join("");
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("world"));

// Function 5 : CalculateDiscountedPrice
// Returns the price after applying the discount percentage

function calculateDicountedPrice(originalPrice, discountPercentage) {
  return originalPrice - originalPrice * (discountPercentage / 100);
}
console.log(calculateDicountedPrice(100, 20));
console.log(calculateDicountedPrice(100, 30));
console.log(calculateDicountedPrice(300, 20));

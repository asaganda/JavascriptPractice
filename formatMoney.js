// Format Money
// Write a function called formatMoney(amount), which takes in a floating-point number amount as input and returns a string representation of the number formatted as currency.

// The output string should have the dollar sign "$" and should have two decimal places, even if the input number has fewer decimal places. The output string should also include commas to separate thousands, millions, billions, and so on.

// Directions
// The input amount can be negative.

export const formatMoney = (amount) => {
    // Write code here
    // amount to string via toFixed(2) method
    return `$${amount.toLocaleString()}`;
    // return `$${x.toFixed(2)}`
}
// Sum even numbers
// Write a function sumOfEvens(arr), which takes an array arr as an argument. This function should return a sum of every even number in the array.

// Directions
// If the input array is empty or there are no even numbers, then return 0.
// The input array will contain only numbers.

export const sumOfEvens = (arr) => {
    // Write your code here
    // implement reducer function

    return arr.reduce((total, num) => {
        if (num % 2 == 0) {
            return total + num
        } else {
            return total
        }
    }, 0)
}
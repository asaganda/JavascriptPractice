// Sum every third number
// Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

// Directions
// If the input array is empty or contains less than 3 numbers then return 0.
// The input array will contain only numbers.

export const sumOfThirds = (arr) => {
    // Write your code here
    return arr.reduce((total, currentValue, index) => {
        if (index % 3 == 0) {
            return total + currentValue
        }
        return total
    }, 0)
}
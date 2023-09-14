// Find the largest number in array
// Write a function findMax(arr), which takes an array arr of numbers as the input. This function should return the biggest number in the array. The highest number may occur more than once. If no such number is found then return null.

// Directions
// The input array will contain only numbers.
// If no max number is found, return null.

export const findMax = (arr) => {
    // Write your code here
    // leverage Math.max built in function
    return Math.max(...arr)
}
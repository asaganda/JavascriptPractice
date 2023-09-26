// Reverse a string
// You have been asked to write a function reverseAString(str) that takes in a string str as an argument. The function should return a new string that is the reverse of the input string.

// Directions
// Strings are immutable, so return a new string.
// If the input string is empty, then return an empty string.

export const reverseAString = (str) => {
    // Write your code here
    return str.split('').reverse().join('')
}
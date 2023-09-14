// Random in range
// In this coding challenge, you will be implementing a function called randomInRange(min, max) that generates a random integer between a given minimum value (inclusive) and a maximum value (exclusive). The function should take two arguments, min and max, both of which are integers.

// Directions
// The minimum value is inclusive and the maximum value is exclusive.
// Assume that this statement is always true min < max.

export const randomInRange = (min, max) => {
    // Write your code here
    // Math.random() - random number between 0 and 1
    return Math.floor(Math.random() * (max - min) + min)
}
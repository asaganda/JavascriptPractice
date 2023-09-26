// Array.find I - string
// In this coding challenge, you will be implementing a function called getLongerThanFour(array) that takes an array of strings array. This function should return the first element that’s longer than 4 characters.

// Directions
// If no such element is found, return null.
// Assume that all elements in the array are strings.

export const getLongerThanFour = (array) => {
    // Write your code here
    // loop method

    const arrLength = array.length
    for (let i = 0; i < arrLength; i++){
        if (array[i].length > 4) {
            return array[i]
        }
    }
    return null
}
// Count vowels
// Write a function countVowels(str), which takes a string str as an input. This function should return the total number of vowels in str.

// Directions
// Return 0 if str has no vowels.
// Assume that str may contain any alphanumeric characters.

export const countVowels = (str) => {
    // Write your code here
    let counter = 0;
    let char = ''
    const stringLength = str.length

    if (!str) { // checking if input string empty
        return 0
    }
    for (let i=0; i < stringLength; i++) {
        char = str[i].toLowerCase() // account for casing
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            counter++;
        }
    }
    return counter;
}
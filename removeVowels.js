// Remove vowels
// Write a function removeVowels(n), which takes a string str as an input. This function should return a new string with all of the vowels removed.

// Directions
// The function should remove vowels in both lowercase and UPPERCASE.

export const removeVowels = (str) => {
    // Write your code here
    // a, e, i, o, u
    const strArray = str.split('')
    const noVowelsArray = strArray.filter((element) => {
        return !element.match(/[aeiou]/gi)
    })
    return noVowelsArray.join('')
}
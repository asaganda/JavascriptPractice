// In this coding challenge, you will be implementing a function called removeWhitespaces(string) that takes a string as the input. The function should return the string with all the whitespace removed.

// Directions
// If the input string is empty, then return an input string.
// Remember to account for \n and \t.

export const removeWhitespaces = (string) => {
    // Write your code here
    // split the string to convert it to array so that each character is item in array
    // map through each item in array (loop) and check the following: (and set it a new variable const)

    const str = string.split('')
    const newStrArr = str.map(ele => {
    if (ele == ' ' || ele == '\t' || ele == '\n') {
        return
    } else {
        return ele
    }
    })
    return newStrArr.join('')
}

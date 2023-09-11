// String.split
// In this coding challenge, you will be implementing a function called splitSentence(sentence) that takes one argument: a sentence. The function should return an array where each element of the array is a word.

// Directions
// Assume that the input sentence is a valid sentence with each word separated by one whitespace.
// If there are special characters like ! or ., then treat them like words, unless they are adjacent to an existing word like hurray!, in that case, assume that ! is part of the word.

export const splitSentence = (sentence) => {
    // Write your code here
    return sentence.split(' ')
}
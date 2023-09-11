// Leap year
// Write a function isLeapYear(year) that takes in an integer number year as the argument and returns true if year is a leap year, and false otherwise.

// A leap year is:

// divisible by 400
// divisible by 4, but not by 100
// Directions
// Should return false if year is less than or equal to 0.
// Should return true if year is a leap year.
// Should return false if year is not a leap year.

export const isLeapYear = year => {
    // Write your code here
    // if year less than or equal to 0 (<=)
        // return false
    // else if year is divisible by 400 and year is divisible by 4 and year is NOT divisible by 100
        // return true
    if (year <= 0) {
        return false
    } else if (year % 400 == 0) {
        return true
    } else if (year % 4 == 0 && year % 100 !== 0) {
        return true
    } else {
        return false
    }
};
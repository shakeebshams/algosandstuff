// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome2(str) {
    let reversed = str.split('').reverse().join('');
    if (reversed === str) {
        return true;
    } else {
        return false;
    }
}

function palindrome(str) {
    let arr = str.split("");
    return arr.every((char, i) => {
        return char === arr[arr.length - i - 1];
    });
}

module.exports = palindrome;

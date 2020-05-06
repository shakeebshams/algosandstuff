// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    var arr = str.split('');
    var reverseArr = arr.reverse();
    return reverseArr.join('');
}

function reverse2(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;

}

function reverse3(str) {
    var reversed = '';
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

function reverse(str) {
    let arr = str.split('');
    let reversedString = '';
    for (var i = arr.length - 1; i > -1; i--) {
        reversedString += arr[i];
    }
    console.log(reversedString);
    return reversedString;
}

module.exports = reverse;

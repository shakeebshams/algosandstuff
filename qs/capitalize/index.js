// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize2(str) {
    var words = [];

    var strings = str.split(' ');

    for (let word of strings) {
        var first = word[0].toUpperCase();
        var last = word.slice(1);
        var together = first + last;
        words.push(together);
    }

    return words.join(' ');
}

function capitalize(str) {
    var result = '';

    var strArray = str.split('');

    for (var i = 0; i < strArray.length; i++) {
        if (i === 0 || strArray[i - 1] === ' ') {
            result += strArray[i].toUpperCase();
        } else {
            result += strArray[i];
        }
    }

    return result;
}

module.exports = capitalize;

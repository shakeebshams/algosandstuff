// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams2(stringA, stringB) {
    var aMap = mapGenerator(stringA);
    var bMap = mapGenerator(stringB);

    if (Object.keys(aMap).length !== Object.keys(bMap).length) {
        return false;
    } else {
        for (let char in aMap) {
            if (aMap[char] !== bMap[char]) {
                return false;
            }
        }
        return true;
    }

}

function mapGenerator(string) {
    const map = {}

    for (let char of string.replace(/[^\w]/g, '').toLowerCase()) {
        if (!map[char]) {
            map[char] = 1;
        } else {
            var count = map[char];
            count++;
            map[char] = count;
        }
    }

    return map;
}

function anagrams(stringA, stringB) {
    a = cleanstring(stringA);
    b = cleanstring(stringB);
    console.log(a);
    console.log(b);
    return a === b;
}

function cleanstring(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}



module.exports = anagrams;

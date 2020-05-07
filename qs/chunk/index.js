// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk2(array, size) {
    var chunks = []

    for (let element of array) {
        var recent = chunks[chunks.length - 1];

        if (!recent || recent.length == size) {
            chunks.push([element]);
        } else {
            chunks[chunks.length - 1].push(element);
        }
    }
    console.log('bruh' + chunks);
    return chunks;
}

function chunk(array, size) {
    var chunks = []

    var index = 0;

    while(index < array.length) {
        var chunky = array.slice(index, index + size);
        chunks.push(chunky);
        index += size;
    }

    return chunks;
}

module.exports = chunk;

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//memoization solution
function fibb(n) {
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

const fib = memoize(fibb);




//recursive solution O(2^n)
function fib3(n) {
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

//iterative solution O(n)
function fib2(n) {
    let result = [0, 1];

    for(let i = 2; i <= n; i++) {
        let a = result[result.length - 1];
        let b = result[result.length - 2];
        result.push(a+b);
    }

    return result[result.length - 1];

}

module.exports = fib;

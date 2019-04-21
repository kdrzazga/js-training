let realArray = ['a', 'b', 'c'];

const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

const arrayLike2 = {
    0: 'Value 0',
    1: 'Value 1',
    length: 2
};

const realArray2 = Array.prototype.slice.call(arrayLike2);
realArray = [].slice.call(arrayLike2); // Shorter version

function sumArray() {
    [1, 2, 3, 4].reduce(function(a, b) {
        return a + b;
    });
}

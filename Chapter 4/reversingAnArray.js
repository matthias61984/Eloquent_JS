function reverseArray(arr) {
    var newArray = [];

    while (arr.length > 0) {
        newArray.push(arr.pop());
    }

    return newArray;
}

function reverseArrayInPlace(arr) {

    for (var i = 0; i < Math.floor(arr.length / 2) ; i++) {
        var sub = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = sub;
    }

    return arr;
}

console.log('Reverse an array:');
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray([10, 11, 12, 13, 14, 15]));
console.log(reverseArray(['Apples', 'Oranges', 'Bananas', true, false, 1254, 'More Bananas']));
console.log('--------------------');
console.log('Reverse an array in place:');
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArrayInPlace([10, 11, 12, 13, 14, 15]));
console.log(reverseArrayInPlace(['Apples', 'Oranges', 'Bananas', true, false, 1254, 'More Bananas']));

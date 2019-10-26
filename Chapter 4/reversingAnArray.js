function reverseArray(arr) {
    var newArray = [];

    while (arr.length > 0) {
        newArray.push(arr.pop());
    }

    return newArray;
}

function reverseArrayInPlace(arr) {
    var counter = arr.length;

    while (counter > 0) {
        arr.push(arr.pop());
        counter--;
        console.log(arr);
    }
    
    return arr;
}

//console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

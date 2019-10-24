function range(start, end, step) {
    if (step == null) { step = 1; }
    var arrayNums = [];

    if (start > end) {
        for (var i = start; i >= end; i += step) {
            arrayNums.push(i);
        }
    } else {
        for (var i = start; i <= end; i += step) {
            arrayNums.push(i);
        }
    }
    
    console.log(arrayNums);
    return arrayNums;
}

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(10, 1, -2)));

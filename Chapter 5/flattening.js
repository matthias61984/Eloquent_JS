var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
    var flattened = [];
    
    for (var i = 0; i < arrays.length; i++) {
        flattened.reduce(flatten(arrays[i]));
        flattened.concat(arrays[i]);
        console.log(arrays[i]);
    }

    return flattened;
}

console.log(flatten(arrays));

var arrays = [[1, 2, 3], [4, 5], [6]];
var stringArrays = [["John", "Snow"], ["the"], ["King"], ["in", "the", "North"]];

// function flatten(arrays) {
//     var flattened = [];
    
//     for (var i = 0; i < arrays.length; i++) {
//         flattened = flattened.concat(arrays[i]);
//     }

//     return flattened;
// }

console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));

console.log(stringArrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));

// console.log(flatten(arrays));
// console.log(flatten(stringArrays));

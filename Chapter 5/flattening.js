var arrays = [[1, 2, 3], [4, 5], [6]];
var stringArrays = [["John", "Snow"], ["the"], ["King"], ["in", "the", "North"]];

console.log(arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));

console.log(stringArrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []));

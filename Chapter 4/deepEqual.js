var obj = { here: { is: "an" }, object: 2 };

function deepEqual(one, two) {
    if (one === two) return true; 
    
    if (one == null || two == null || typeof one != 'object' || typeof two != 'object') return false;

    var propertiesInOne = 0;
    var propertiesInTwo = 0;

    for (var prop in one) propertiesInOne += 1;

    for (var prop in two) {
        propertiesInTwo += 1;
        if (!(prop in one) || !deepEqual(one[prop], two[prop])) return false;
    }

    return propertiesInOne == propertiesInTwo;
}

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

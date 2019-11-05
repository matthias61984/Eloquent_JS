var obj = { here: { is: "an" }, object: 2 };

function deepEqual(one, two) {
    
    if (typeof one == typeof two) {
    }
    
    if (one === two) {
        return true;
    } else {
        return false;
    }
}

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

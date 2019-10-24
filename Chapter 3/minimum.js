function min(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    };
};

console.log(min(0, 10));
console.log(min(10, 0));
console.log(min(5, 10));
console.log(min(0, 0));
console.log(min(10, 10));
console.log('-----');
console.log(min(10, -10));
console.log(min(-10, 10));
console.log(min(-10, -5));
console.log(min(-5, -10));
console.log(min(-10, -10));
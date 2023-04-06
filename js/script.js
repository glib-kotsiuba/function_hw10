function main(a, b, c) {
    if (a == undefined && b == undefined) {
        a = 2;
        b = 3;
    } else if (typeof c === 'function') {
        c = sum(1, 2);
        return c;
    }
    return sum(a, b);
}
function sum(a, b) {
    return a + b;
}

// document.write(main(3, 5, function () { }));
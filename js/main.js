"use strict";
// function 1
function range(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(range(10));
console.log(range(-10));
console.log(range(0));
//function 2
function isDivided(mainNumber, divisor1, divisor2) {
    return !(mainNumber % divisor1) && !(mainNumber % divisor2);
}
console.log(isDivided(-12, 2, -6));
console.log(isDivided(-12, 2, -5));
console.log(isDivided(45, 1, 6));
console.log(isDivided(45, 5, 15));
//function3
function capitalize(word) {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
}
console.log(capitalize('work'));
console.log(capitalize(''));
//Function, that controls DOM
function show() {
    var text = document.getElementById("text").value;
    var textField = document.getElementById('insertHere');
    if (text && textField) {
        textField.textContent = text;
    }
}
//# sourceMappingURL=main.js.map
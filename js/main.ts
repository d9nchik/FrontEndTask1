// function 1
function range(n: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(range(10))
console.log(range(-10))
console.log(range(0))
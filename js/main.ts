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

//function 2
function isDivided(mainNumber: number, divisor1: number, divisor2: number): boolean {
    return !(mainNumber % divisor1) && !(mainNumber % divisor2)
}

console.log(isDivided(-12, 2, -6));
console.log(isDivided(-12, 2, -5));

console.log(isDivided(45, 1, 6));
console.log(isDivided(45, 5, 15));

//function3
function capitalize(word: string): string {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return '';
}

console.log(capitalize('work'));
console.log(capitalize(''));
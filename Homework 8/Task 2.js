const numbers = [1, 2, 3, 4, 5];

const copiedNumbers = numbers.map((n) => n * numbers.indexOf(n));

console.log(copiedNumbers);
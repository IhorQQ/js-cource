const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0
let negativeCount = 0
let zeroCount = 0


for (const n of numbers) {
    if (n > 0) positiveCount++
    else if (n < 0) negativeCount++
    else zeroCount++
}

console.log(
    `Кількість позитивних чисел: ${positiveCount} \n`,
    `Кількість негативних чисел: ${negativeCount} \n`,
    `Кількість нульових чисел: ${zeroCount} \n`,
    )
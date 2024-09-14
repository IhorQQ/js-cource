function divide(numerator, denominator) {

    if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error (`Only numbers can be processed and divider must be > 0`)
    }
    return numerator / denominator
}


// Divider is 0
try {
    divide(10,0)
} catch (error) {
    console.error(error.message)
} finally {
    console.log(`Робота завершена`)
}

// Input type is wrong
try {
    divide('qwe',2)
} catch (error) {
    console.error(error.message)
} finally {
    console.log(`Робота завершена`)
}

// Correct usage
try {
    divide(10,5)
} catch (error) {
    console.error(error.message);
} finally {
    console.log(`Робота завершена`)
}
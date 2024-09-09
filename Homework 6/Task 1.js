// Function declaration
function calculateRectangleSquare (width, height) {
    return width * height
}

// Function expression
const calculateRectangleSquare1 = function(width, height) {
    return width * height
}

// Arrow function
const calculateRectangleSquare2 = (width, height) => {
    return width * height
}

console.log(calculateRectangleSquare(5,10))

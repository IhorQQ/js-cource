const handleEven = () => { return 'number is even' }
const handleOdd = () => { return 'number is odd' }


function handleNum(num, cb1, cb2) {
    return num % 2 === 0 ? cb1() : cb2()
}


console.log(handleNum(4, handleEven, handleOdd))
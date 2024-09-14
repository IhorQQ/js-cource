function recursiveFunc (num) {
    console.log(num)
    return num > 0 ? recursiveFunc(--num ) : num
}

recursiveFunc(5)
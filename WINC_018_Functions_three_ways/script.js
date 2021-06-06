

//Function declaration
function squaring(numbera, numberb) {
    const sum2 = ((numbera * numbera) + (numberb * numberb));
    return sum2 * sum2;
}

const example1 = squaring(5, 10);
console.log(example1);

//Fucntion expression
const squaring2 = function (number1, number2) {
    const sum = ((number1 * number1) + (number2 * number2));
    return sum * sum;
}

const example2 = squaring2(5, 10);
console.log(example2);

// Arrow function (also a function expression)

const squaring3 = (numberX, numberY) => {
    const sum = ((numberX * numberX) + (numberY * numberY));
    return sum * sum;
}

const example3 = squaring3(5, 10);
console.log(example3);
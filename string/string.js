const uppercase = (str) => str.toUpperCase();

const lowercase = (str) => str.toLowerCase();

const num1 = 0;
const num2 = 0;

const add = () => {
    return num1 + num2;
};

const substract = () => {
    return num1 - num2;
};

const multiply = () => {
    return num1 * num2;
};

const divide = () => {
    return num1 / num2;
};

const squareRoot = () => {
    return Math.sqrt(num1);
};

const max = () => {
    return Math.max(num1, num2);
};

module.exports = {
    uppercase,
    lowercase,
    add,
    substract,
    multiply,
    divide,
    squareRoot,
    max,
};

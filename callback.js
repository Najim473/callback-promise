// FIRST
const display = (v) => {
    console.log(v);
};
const calculator = (num1, num2) => {
    let sum = num1 * num2;
    return sum;
};
let res = calculator(3, 5);
display(res);

// SECOND
const display2 = (v2) => {
    console.log(v2);
};
const calculator2 = (num1, num2) => {
    let sum2 = num1 + num2;
    display2(sum2);
};
calculator2(3, 10);
//  THIRD
const display3 = (v3) => {
    console.log(v3);
};
const calculator3 = (num1, num2, callback) => {
    let sum = num1 + num2;
    if (callback) callback(sum);
};
calculator3(23, 22, display3);

// FORTH
const display4 = (v4) => {
    console.log(v4);
};
const myFirst = () => {
    display4("Hello");
};
const mySecond = () => {
    display4("Goodbye");
};
mySecond();
myFirst();
// FIFTY
const myNumbers = [-1, -3 - 50, 2, 9, 5, 9];
const posNumber = removeNeg(myNumbers, (x) => x >= 0);
console.log(posNumber);
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

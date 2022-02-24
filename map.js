const numbers = [4, 6, 8, 10];
const output2 = [];

// function doblueOld(number){
//     return number*2;
// }

const doubleIt = number => number * 2;

for(const number of numbers){
    // const result = number*2;
    const result = doubleIt(number);
    output2.push(result);
}
console.log(output2);
// uporer full kaaj amra ek line e korte pari, seta holo:-

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
const squares = numbers.map(x => x * x);
console.log(output);
console.log(squares);

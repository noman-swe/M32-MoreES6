const hubby = 'Omor Sunny';
const myNote = `I am Mojnu of ${hubby}. i don't have a laili`;
// default and spreading
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}

// arrow function
const square = x => x * x;
console.log(square(9));
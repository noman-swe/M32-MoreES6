const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
//The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.
const bigNumbers = numbers.filter(num => num > 20);
const smallNumbers = numbers.filter(num => num < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);

const products = [
    { name: 'Water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile phone', price: 15000, color: 'black' },
    { name: 'smart Wathch', price: 3000, color: 'purple' },
    { name: 'Sticky note', price: 50, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const lowPrice = products.filter(product => product.price < 3000);
// console.log(lowPrice);
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const colorBlack = products.filter(pro => pro.color == 'black');
// console.log(color);


//The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method retuns undefined if no elements are found.
// find() just returns only the value or the element 
const pinkColor = products.find(p => p.color == 'pink');
console.log(pinkColor);

const lowPrices = products.find(x => x.price > 500);
console.log(lowPrices);


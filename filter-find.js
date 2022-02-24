const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
//The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.
const bigNumbers = numbers.filter(num => num > 20);
const smallNumbers = numbers.filter(num => num < 10);
console.log(bigNumbers);
console.log(smallNumbers);

const products = [
    { name: 'Water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile phone', price: 15000, color: 'black' },
    { name: 'smart Wathch', price: 3000, color: 'purple' },
    { name: 'Sticky note', price: 50, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const lowPrice = products.filter(product => product.price < 3000);
console.log(lowPrice);
const expensive = products.filter(product => product.price > 100);
console.log(expensive);
const color = products.filter(pro => pro.color == 'black');
console.log(color);
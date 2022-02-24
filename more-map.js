const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);//it autometically returns
// console.log(fLengths);

const products = [
    { name: 'Water bottle', price: 50, color: 'yellow' },
    { name: 'Mobile phone', price: 15000, color: 'black' },
    { name: 'smart Wathch', price: 3000, color: 'black' },
    { name: 'Sticky note', price: 50, color: 'pick' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames =products.map( product => product.name); // 1st product is a parameter of the function
console.log(productNames);

const productPrices = products.map(product => product.price);
console.log(productPrices);

const allProduct = products.map(product => product);
console.log(allProduct);

// forEach doesn't have return value but map returns the value
const aallProduct = products.forEach(products => console.log(products));
// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x } = myObject;
const { b } = myObject;
console.log(x, b);

// distructuring in array
const [p, q] = [45, 27];
console.log(p, q);
console.log('myObject'?. p?. q);

// optional channing
const [bestu, faltu] = ['Shibly', 'Sadik'];
console.log(bestu, faltu);

// 
const company = {
    name: 'GP',
    ceo: {
        id: 1, name: 'ajmol', food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: ' 22',
        framework: 'react',
        tech: { 
            first: 'html',
            second: 'css',
            third: 'js'
         }
    },
    
};

console.log(company.web.tech.third);
console.log(company.backend?.tech.third);// -> if backend not here
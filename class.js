// 32-7 (advanced) Class, constructor, method, create object from class

class Support{
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    phone;
    constructor(name, address, phone){
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const noman = new Support('Noman Shibly', 'Tangail', '01688126772');
const shanto = new Support('Shamshia Noor Shanto', 'Dhanbari, Tangail', '01705204533');
/* console.log(noman);
console.log(shanto); */

noman.startSession();
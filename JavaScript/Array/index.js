const fruits = ['Banana','Mango','Apple','Orange','Grapes'];
console.log(fruits.length);

// array methods
fruits.pop();                //pop method removes last index in da array
const fruit1 = fruits.pop();  
console.log(fruits);
console.log(fruit1);

fruits.push('Kiwi');   //push method adds last index in da array
console.log(fruits);

const fruit2 = fruits.shift();  //shift method removes first index in da array
console.log(fruits);
console.log(fruit2);

fruits.unshift('Guvava');  //unshift method adds first index in da array
console.log(fruits);

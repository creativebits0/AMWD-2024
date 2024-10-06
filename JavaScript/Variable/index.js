console.log("Run App! from external script")

const x = 20;
const y = 30;
const z = x+y;
console.log(z);

document.write('Fathima Nabeela Sadiq');
document.write('<h1>Learn JavaScript</h1>');
document.write('<label>Full Name : </label><input type="text">');
document.write('<br><br><br>');
document.write('<button>SUBMIT</button>');

// ----------------------------------------------------------------------------------
//VARIABLE TYPES
//numbers
const num = 45;
const num1 = 45.78;

//string
const name = "Nabeela";

//boolean
const bool = true;

//object
const obj = {name : 'Nabeela',age : 30, haveFriends : true, names :['Nisreen','Nabawi', 'Naseem']}
console.log(obj);

//array
const arr = ['Nisreen','Nabawi', 'Naseem','Nabeela',100 , {name : 'Nabeela',age : 30},[50,40]]
console.log(arr);
console.log(arr[5]);
console.log(num , num1 , name , bool , obj , arr);

// ----------------------------------------------------------------------------------

// let variable cannot be redeclared but can be re assigned
// let can only be used inside the scope 

let a = 10;
console.log(a);
// let a = 20; <= error will provide
a = 20; // can be reassigned
console.log(a);

{let ab = 30; 
    console.log(ab);
}
//console.log(ab); can not be used outside the scope

// ----------------------------------------------------------------------------------

var v  = 20;
console.log(v);
var v = true;
// can be reassigned and redeclared
console.log(v)

{var vv = 30; 
    console.log(vv);
}
console.log(vv); // can be used inside and outside the scope

// ----------------------------------------------------------------------------------

const c = 40;
//const c = 60;  can not be redeclared and reassigned
//c = 30; when reassigning error will be shown in console not in code

{let ab = 70; 
    console.log(ab);
}
//console.log(ab); can not be used outside the scope
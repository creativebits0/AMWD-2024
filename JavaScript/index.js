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

//Arithmetic operations

const s = 50;
const p = 20;

const add = s+p;
console.log(add);

const sub = s-p;
console.log(sub);

const mult = s*p;
console.log(mult);

const div = s/p;
console.log(div);

const mod = s%p;
console.log(mod);


// cannot use const when using increment since it reassign the value
let increment = 50;
increment ++;
console.log(increment);

increment ++;
console.log(increment);

let dec = 50;
dec--;
console.log(dec);
// -----------------------------------------------------------------------------


//  comparison operators

const l = 13;
const m = 13.0;

// equal(==)
console.log(l==m);
console.log(l!=m);
console.log(l <= m);

const o = 13;
const r = '13';

// equal(===) checking value and type not equal(!==)
console.log(o===r);
console.log(o!==r);

// -----------------------------------------------------------------------------

// Logical operators
const f =false;
const g = true;

console.log( f && g);
console.log( f || g);
console.log(!g);

// -----------------------------------------------------------------------------

// flow controller

// IF 

const std1 = 300;
const std2 = 250;

if(std1 == std2){
    console.log("running if...!");
}
else if(std1 > std2){
    console.log("running else if..!")
}
else{
    console.log("running error..!")
}

// -----------------------------------------------------------------------------

const marks = 81;

if(marks > 74){
    console.log(" Result A");
}
else if(marks > 64){
    console.log(" Result B");
}
else if(marks > 44){
    console.log(" Result C");
}
else if(marks > 34){
    console.log(" Result D");
}
else{
    console.log(" Result Fail");
}

// -----------------------------------------------------------------------------

// switch

const val = "Intake 2";
switch(val){
    case 'Intake 1':
        console.log("ACPT - AWMD Intake 01");
        break;
    case 'Intake 2' :
        console.log("ACPT - AWMD Intake 02");
        break;
    default:
        console.log("Error.......!");
        
}

const week ='Sat';
switch(week){
    case 'Mon' :
        console.log(" It is WeekDay");
        break;
    case 'Tue' :
            console.log(" It is WeekDay");
            break;
    case 'Wed' :
            console.log(" It is WeekDay");
            break;
    case 'Thu' :
            console.log(" It is WeekDay");
            break;
    case 'Fri' :
            console.log(" It is WeekDay");
            break;
    default:
            console.log(" It is WeekEnd");
}
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// LOOPS

for(let i=0 ; i<=10 ; i++){      //for loop
    console.log(i);
}

for(let i=0 ; i< fruits.length ; i++){
    console.log(fruits[i]);
}

// -------------------------------------------

let fruit_1 = 0;                   //while loop
while(fruit_1<fruits.length){
    console.log(fruits[fruit_1])
    fruit_1++;
}                                
// -------------------------------------------

let fruit_2 = 0;
do{
    console.log(fruits[fruit_2]);
    fruit_2++;
}
while(fruit_2 <fruits.length)

// -----------------------------------------------------------------------------
// scope
// globle scope
const globle = true;

// fuction scope
function getName() {
    const func =false;
}

// block scope
{

}

// -----------------------------------------------------------------------------
// Object

const car = {
    name: 'BMW',
    colour:'red',
    wheel: 4,
    year:'2017',
    drive:function(){
        console.log('Drive ......');
    },
    break:function(){
        console.log('Break .......');
    }
}
console.log(car.name);
car.drive();
car.break();
// -----------------------------------------------------------------------------

// function- types
// 1. Name fuction
function setName(){
    console.log("Print Name Function");
}
setName();

// 2. Anonymouse function
let getAddress = function(){
    console.log("Print Address Fuction");
}
getAddress();

// 3. Arrow Function
const setAddress = ()=>{
    console.log("Print Arrow function");
}
setAddress();

// function with Parameter

function printName(name,lastName){
    console.log("Print : ",name," ",lastName)
}
printName("Nabeela","Sadiq");
printName("Saabiq","Shumsuddien");

function equalNumber (num1, num2){
    console.log("Total : ",num1+num2);
}
equalNumber(30,50);
equalNumber(65.4,32.78)

// -----------------------------------------------------------------------------
const getDetails = (name1) =>{
    return "My Name is : "+ name1
}
const details1 = getDetails('Nabeela');
console.log(details1);
const details2 = getDetails('Saabiq');
console.log(details2);

// -----------------------

const addnum = (num1 , num2) =>"Total : "+(num1+num2)
const number1 = addnum(20 , 40);
console.log(number1)
const number2 = addnum(40.5 , 65.7);
console.log(number2);

// -----------------------------------------------------------------------------

const std = (stdName, stdMarks) =>{
    if (stdMarks > 60) {
        return stdName + " is passed the exam with score of " + stdMarks;
    }
    else{
        return stdName + " is fail";
    }
}

const student1 = std ('Nabeela', 95);
console.log(student1);
const student2 = std ('Raj', 45);
console.log(student2);

// -----------------------------------------------------------------------------
// Events
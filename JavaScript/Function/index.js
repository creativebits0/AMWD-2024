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

// function
// Name fuction
function setName(){
    console.log("Print Name Function");
}
setName();

// Anonymouse function
let getAddress = function(){
    console.log("Print Address Fuction");
}
getAddress();

// Arrow Function
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
equalNumber(65.4,32.78);

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
const number2 = addnum(40.6 , 65.3);
console.log(number2);

// -----------------------------------------------------------------------------

const std = (stdName, stdMarks) =>{
    if (stdMarks > 60) {
        return stdName + " is passed";
    }
    else{
        return stdName + " is fail";
    }
}

const student1 = std ('Nabeela', 95);
console.log(student1);
const student2 = std ('Raj', 45);
console.log(student2);
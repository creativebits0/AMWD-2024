// LOOPS
const fruits = ['Banana','Mango','Apple','Orange','Grapes'];
console.log(fruits.length);

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
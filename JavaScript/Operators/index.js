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

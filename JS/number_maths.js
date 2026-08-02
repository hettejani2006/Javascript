const score = new Number(100.000000000000000001010101);
console.log(typeof score.toFixed(2));

const len = 100000000
console.log(len.toString().length);

const hund = 100000000
console.log(hund.toLocaleString('en-IN'));

const pre = 23.8964
console.log(pre.toPrecision(3));


// ----------------------- Maths ---------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(1.59));
console.log(Math.ceil(1.59));
console.log(Math.floor(1.59));
console.log(Math.min(3,4,5,6));
console.log(Math.max(3,4,5,6));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min + 1)) + min);


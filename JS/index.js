console.log("hello");

let bignumber = 2156645564565454n;

let arr=["het","chahat","smit"]
let obj={
    name:"het",
    age:20,
}
let myfunction=function (params) {
    console.log("hello");
}

console.log(typeof bignumber);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myfunction);

//----------------------------------------------------- Stack and Heap ---------------------------------------------------------

// primitive datatypes (Stack)(call by value = copy the value not point to the references)

// 1) number
// 2) boolean
// 3) string
// 4) Null
// 5) undefined
// 6) Symbol
// 7) bigInt

let num = 30
let num1 = num;
num1 = 50
console.log(num);
console.log(num1);


// non primitive datatypes (Heap)(call by referances = if we assign the value to other variable so it is reference to the address)

// 1) array
// 2) objects
// 3) functions


let obj1 = {
    name:"chahat",
    age:21,
}
console.log(obj1);
let obj2 = obj1;
obj2.name="het"
obj2.age=20

console.log(obj1);
console.log(obj2);


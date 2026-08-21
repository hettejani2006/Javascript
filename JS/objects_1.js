//--------------------------- literal Objects -----------------

const sym = Symbol("key1")

const obj1 = {
    name:"het",
    age:20,
    [sym]:"het@123",
    "full name":"het tejani",
    email:"hettejani@gmail.com",
    isLogginId:true,
    logginDays:["mondays", "tuesdays"],
    greeting: function () {
        console.log("hello users");
        return 0;
    }
} 

console.log(obj1.email);
console.log(obj1["email"]); // we need to write in string in brackets beacause in object it is auto converts in string
console.log(obj1["full name"]); // for this it is compalsory to use brackets
console.log(obj1[sym]);


obj1.email = "hettejani@google.com" 
console.log(obj1.email);
// Object.freeze(obj1) // after freeze we can't change value in obj
obj1.email = "hettejani@google.com" 
console.log(obj1.email);

console.log(obj1.greeting());

obj1.greetingTwo = function () {
    console.log(`hello ${this.name}, Welcome to this world`); 
    return 1;
}

console.log(obj1.greetingTwo());

console.log(obj1);

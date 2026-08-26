// Immediately Invoked Function Expression
// => It is use to remove the global scope variable to execute in specific function 
// => and it is also use for execute function immediately 


(function iifc() {
    console.log("DB IS CONNECTED");
})();

(() => (console.log("DB IS CONNECTED TOO")
))();

((name) => (console.log(`WELCOME ${name}`)
))("HET")
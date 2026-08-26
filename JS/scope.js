function scope() {
    let username = "Het"
    function scope2() {
        let greeting = "Welcome "
        console.log(greeting + username);
    }
    scope2()
    // console.log(greeting); //it is outside of scope2
    console.log(username);
    if (true) {
        let replay = "Thank You "
        console.log(replay + username); //greeting is only use for scope 2
    }
    // console.log(replay); // replay is outside of the if scope
}
scope()

console.log(addone(5)) // this above function declaration work
function addone(num) {
    return num + 1
}
console.log(addone(5))


// console.log(addtwo(5)) // this above function declaration not work
let addtwo = function(num) {
    return num + 2
}
console.log(addtwo(5))
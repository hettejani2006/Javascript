const user = {
    username : "Het",
    age: 20,
    greeting: function (){
        console.log(`Welcome ${this.username} `);
    }
}

user.greeting()


function one() {
    let username = "Het"
    // console.log(this.username); // this only use in object
}
one()

let two = function () {
    let username = "Het"
    // console.log(this.username); // this only use in object
}
two()

let addnum = (num1,num2) => {
    return num1 + num2
}
console.log(addnum(1,2))

let addnum2 = (num1,num2) => num1 + num2
console.log(addnum2(1,2))

let addnum3= (num1,num2) => (num1 + num2)
console.log(addnum3(1,2))

let object = () => ({username:"Het"})
console.log(object());


// --------- react example --------

// const arr = [1,2,3,4,5,6]

// arr.forEach((num1,num2) => (num1 + num2))
const { compileAst } = require("tailwindcss");

const user = {
    name:"het",
    age:20
}

const {name:n} = user

// console.log(n);


const arr = [1,2,3,4,5]

// const [f,s]=arr
const [f,s,...rest]=arr

// console.log(`${f},${s},${rest}`);
console.log(f);
console.log(s);
console.log(rest);



// const navbar = (props.company) => {

// }

// const navbar1 = ({company}) => {

// }

// navbar(company="tejani")
// navbar1(company="het")

//----------------- JSON ------------
// {
    // "name":"het",
    // "age":20
// }

// [
//     {"name":"het",
//     "age":20},
//     {"name":"smit",
//     "age":20},
//     {"name":"chahat",
//     "age":20}
// ]
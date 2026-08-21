// singleton objects

const tinderuser = new Object()

tinderuser.id=1
tinderuser.name="het"
tinderuser.age=20
tinderuser.email="het@gmail.com"

// console.log(tinderuser);

const regularuser = {
    id:1,
    fullname:{
        firstname:"Het",
        lastname:"Tejani"
    },
    age:20
}

// console.log(regularuser.fullname.firstname);


const obj1 = {"a":1,"b":2}
const obj2 = {"c":3,"d":4}
const obj3 = {"e":5,"f":6}

// const obj4={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2}
// console.log(obj4);

const user=[
    {
        id:1,
        name:"het"
    },
    {
        id:2,
        name:"chahat"
    },
    {
        id:3,
        name:"smit"
    }
]

// console.log(user[0].name)

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("name"));
console.log(tinderuser.hasOwnProperty("location"));

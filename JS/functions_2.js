function array(...num) {
    console.log(num);
    
}


array(200,300,400,500)


function object(...obj) {
    console.log(obj);
    
}

object({name:"het",age:20})


function array1(num1,num2,...rest) {
    console.log(num1);
    console.log(num2);
    console.log(rest);
}

array1(200,300,400,500)




function array2(anyarray) {
    console.log(anyarray[1]);
}
let arr = [200,400,500,600]
array2(arr)
// array1([200,400,500,600])


function object1(anyobject) {
    console.log(`my name is ${anyobject.name} and my age is ${anyobject.age}`);
}

let obj = {name:"Het",age:20}
object1(obj)
// object1({name:"Het",age:20})
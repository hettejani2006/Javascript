// -------------------------- array -----------------

// const arr = [1,2,3,4,5,6,"het",true]
// console.log(arr[0]);
// console.log(arr[6]);
// console.log(arr[7]);


// ---------------------------------- Methods -------------------------

const myarr = [1,2,3,4,5,6]
myarr.push("het")
console.log(myarr);
myarr.push(true);
console.log(myarr);
myarr.pop();
console.log(myarr);
myarr.unshift("het");
console.log(myarr);
myarr.shift();
console.log(myarr);
console.log("----------------------------------------------------------------");


console.log(myarr.includes("het"));
console.log(myarr.indexOf("het"));
console.log("----------------------------------------------------------------");


const strarray = myarr.join();
console.log(strarray);
console.log(typeof strarray);
console.log("----------------------------------------------------------------");


const array = [1,2,3,4,5,6]

console.log("A :",array);

console.log(array.slice(1,3));

console.log("B :",array);

console.log(array.splice(1,3));

console.log("C :",array);


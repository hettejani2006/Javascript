const arr1 = [1, 2, 3]
const arr2 = ["het","chahat"]

arr1.push(arr2)
console.log("after push in original :",arr1);
const arr4 = arr1.concat(arr2)
console.log("after concat :",arr4);

const arr5 = [...arr1,...arr2]
console.log("after spread :",arr5);

const arr6 = [1,2,3,4,[5,6,7],8,[9,[1,2,3]],0]
console.log(arr6.flat(Infinity));

console.log(Array.isArray(1));
console.log(Array.from([1,2,3,"het",true]));
console.log(Array.from({name:"het"})); // intresting
console.log(Array.from("het"));

const score1 = 95
const score2 = 80
const score3 = 100

console.log(Array.of(1,2,3,"het",true));


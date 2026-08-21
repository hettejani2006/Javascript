function usermessage(name = "user") {
    if (name==="") {
        console.log(`Welcome user`);    
    }
    else{
    console.log(`Welcome ${name}`);   
    }
}

// usermessage("")

function addnumbers(num1,num2){
    return num1 + num2
    // let result = num1 + num2
    // console.log(result);
    
}

console.log(addnumbers(1,2))
let diffresult=addnumbers(1,2)  //this diffresult is diffrent to the result in the function
console.log(diffresult);




// var myName="anil";
// myName="maharjan";
// console.log(myName);


/*
function myInfo(){
    var firstName="Anil";
    console.log(firstName);
    if(true){
        var lastName="maharjan";
        console.log(lastName);
    }
}
myInfo();
*/


// console.log(firstName);


// var ==> function scope 
// let and const ==> Block scope


//template literals 
/*
let num=2
for(let i =1; i<=10;i++){
    console.log(`${num}*${i}=${num*i}`);
}
*/


// default arguments/parameters
// function add(a,b=4){
//     return a+b;
// }
// console.log(add(3,3));


// fat arrow function
const sum=()=>{
    let a =5;b=6;
    let sum=a+b;
    return `the sum is ${sum}`;
}
console.log(sum());



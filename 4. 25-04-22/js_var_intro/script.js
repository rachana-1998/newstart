var x=5;
//oldest one-1995 to 2015


//let and const were added to js in 2015
let y=6;
const z=7;
// general rule - always declare variable with const.
// but, if you think , the variable value can be change, use let.
const price1=5;
const  price2=6;
const price3=7;
console.log(price1);
let total=price1+price2;
//declaring a variable with out using let,var and const

// Scope of var variable
console.log(total);
var greater="say hello"
 
console.log(greater)
function myfunction(){
    var abc=100;
    greater="sey hello inside"
    console.log(greater)
}
myfunction()
console.log(greater)
console.log(sayhello);
//var sayhello="hey there";


var sayhello;
console.log(sayhello);
sayhello="hey there";
var greater=" hey hello"
var times=4;
if(times>3){
    var greater="say hiya instead"
}
console.log(greater);
let greeting="hey hi"
let mul=3;
if(mul>3){
    let greeting="hey there";
    console.log(greeting)
    let hello=Hello;
}
console.log(greeting);
//console.log(hello);

{
    let satya="satya--"
}
//console.log(satya)
console.log(ajay)
let ajay="hay"
let aman=100;
 aman=200;  //  let aman not allowed => let can not be redeclared , only udate;
var akshay=100;
var akshay=200;// allowed
{
    let aman=300;
}
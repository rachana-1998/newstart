 aj="no"
function sayhello(){
    var aj="hi"
}

console.log(aj)



const x=2;
{
    const x=3;// this is not redeclaration because  for the computer ,these are different
    console.log(x);
}
const greeting={
    message:"satyaki",
    times:4
}
/* greeting={
     message:"don't say",
     times:3
 }*/
console.log(greeting)
 greeting.message="don't say"
 console.log(greeting)
 // const declaration are also hoisted to the top but are not initialized
 // console.log(val)
 // const val="500" // give reference error
document.write(aj)
 //let y="5"*5
//let y=5*"5"
let y="5"+5
console.log(y)
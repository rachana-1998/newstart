function multiply(p1,p2){
    return p1*p2;
}
function devide(p1,p2){
    console.log(p1/p2)
}

function toCelcius(fahrenheit){
    return ((5/9)*(fahrenheit-32));
}
let x=toCelcius(99)
document.write("the temperature is"+x+"deg celcius")



//const car="flat";
//const car=["Mahindra","xuv300"];
const car={
    company: "Mahindra",model:"xuv 300"
}
console.log(car);
console.log(car.company);
console.log(car["company"]);


const person={
    FirstName:"rachana",
    LastName:"pandey",
    age:24,
    fullname: function(){
        return this.FirstName+" "+this.LastName
    }

}
console.log(person)
//printing a function
console.log(person.fullname)
//calling a function
console.log(person.fullname());
if(condition){

}
if(condition){

}
else{

}
if(condition){

}
else if(condition){

}
else{


}
switch(expression){
    case x:
        //code block
        break;
    case y:
        //code block
        break;
    case z:
            //code bock
        break;
    default:
            //code block
}
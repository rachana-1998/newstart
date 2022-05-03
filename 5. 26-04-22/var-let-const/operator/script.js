let x=6;
let y=3;


if(x<10 && y>1){
    console.log("true")
}else{
    console.log("false")
}


if(x==5 || y==5){
    console.log("true")
}else{
    console.log("false")
}


if(!(x==y)){
    console.log("x is not equal to y")
}else{
    console.log("x is equal to y")
}

let age=19;
let canVote=(age<18)?"can't Vote":"can vote"
console.log(canVote)
let abc="hey"+16
var name=prompt("please enter your name")
let abc2=16+4+"hey"
let abc3="hey"+16+4;
console.log(abc3);
const value=true;
const value2=(5===3);
console.log(value,value2);

const cars = ["volvo","xuv300" ,"maruti"];
cars[1]="xuv 500";
console.log(cars)
//const junkData=["rachana","24","pandey"];
const junkData=[
    "Rachana",18,
    ["volov",25,36,true],
    {FirstName:"hey",LastName:"There"},
];

 
// 0 indexed

console.log(cars);
const person={
    firstname:"rachana",
    lastname:"pandey",
    age:24,
    phonenumbers: ["8840188012","8840188012"],
    address: {
        houseNo:12,
        street:"delhi",
        city:"delhi",
        PinCode:110045
    }
};
console.log(person);
let abc4;
let abc5;
console.log(typeof(abc4),abc4);
let abc6="rachana"
abc6=undefined;
let car=""
console.log(typeof(car));
let bool=(5==3)
console.log(bool);


function myfunction(p1,p2){
    return p1*p2;
}



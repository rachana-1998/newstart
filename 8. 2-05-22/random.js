const obj=require("./jsonObject.json")
console.log(obj.address)



console.log(Math.random())
// return a random number between[0,1)


// Get me a number between 1 and 10

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}


function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
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
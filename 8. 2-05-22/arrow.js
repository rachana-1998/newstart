function myfunction(a,b){
    return a*b
}
const myfunction2=(a,b)=>{
    return a*b
}
const myfunction3=(a,b)=>a*b

const myfunction4=(a,b)=>(a*b)

 function hello(){
     return "hello world"
 }

 const hello1=()=>"hello world"
 function helloval(val){
     return "hello"+val
 }
 const helloval=(val)=>"hello "+val
 

 function noreturn(a,b){
     console.log(a+b)
 }
 const noreturnarrow=(a,b)=>{
     console.log(a+b)
 }
 const noreturnarrow1=(a,b)=>console.log(a+b)// i am return console.log

 noreturnarrow(2,3)
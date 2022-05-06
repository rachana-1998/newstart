const person={
    "firstname":"rachana",
    "lastname":"pandey",
    fullnamne:function(city,country){
        //return this.firstname+""+this.lastname
        return `$ {this.firstname} ${this.lastname}.live in${city},${country}`
    }
}
function xyz(){
    return 10;
}
console.log(person.fullname())

const abcd={
    "firstname":"rachana",
    "lastname":"pandey",
}
//const output = person.fullname.call(abcd)
const output = person.fullname.call(abcd,"mirzapur","u.p")
console.log(output)

const output2 = person.fullname.call(abcd,["mirzapur","u.p"])
console.log(output2)
/// special use of apply
console.log(Math.max(1,23,3))
const arr=[45,4,9,16,25]
const maxval=Math.max.apply(null,arr)
console.log(maxval);


const member={
    firstname:"R",
    lastname:"p"
}
let FullName = person.fullname.bind( member)
console.log(FullName("agra","up"))
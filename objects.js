//javascript objects

let person={
    firstname:"Tim",
    lastname:"John",
    age:29,
    fullname:function(){
        console.log(this.firstname+" "+this.lastname) // attribute nn this operator which vilikunnu
    }
};
console.log(person.firstname)
console.log(person.lastname)
person.fullname() // function call
console.log(person['lastname']) // attribute nn direct vilichu

person.gender="male"//Adding new property called gender
console.log(person)

delete person.gender //Remove gender from the object
console.log(person)
console.log(person.fullname) //attribute invoke

for(let key in person){ // "in" keyword will check if the search element is present in the object or variable
    console.log(person[key])
}
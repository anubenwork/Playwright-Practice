//Defining a class
class Person{
    age = 25 //Property of class
    get location(){//getter method
        return "canada"
    }
    //constructor
    constructor(firstname,lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
    fullname(){
        console.log(this.firstname+" "+this.lastname)
    }
}

export { Person };
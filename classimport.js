import { Person } from "./class.js"; // import person class
class Pet extends Person{ // child or inherit from person
    get location(){
        return "New York"
    }
    constructor(firstname,lastname){
        super(firstname,lastname) // calls parent class constructor
    }
    
}
let pet=new Pet("sam","sandy")
pet.fullname();
console.log(pet.location)
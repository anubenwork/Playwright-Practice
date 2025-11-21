//Function declaration and definition
function add(a,b){
    return (a+b)
}// function declaration and definition

let sum = add(5,8) // Function Call
console.log(sum) //Printing the return value in console
let result=add("Hai","Hello")
console.log(result)

// assigning a function to a variable

let sumofintegers = function(a,b){
    return a+b
}
console.log(sumofintegers(2,4));

//Difference function

let Difference = function(a,b){
    return a-b
}
console.log(Difference(9,8));


//anonymous function

let sumofinteger = (a,b)=> a+b
console.log(sumofinteger(10,8))
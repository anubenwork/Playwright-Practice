let day = 'Thursday'
console.log(day)
// To find the length of the string use length function
console.log(day.length)
// to print or find the index of a string
console.log(day[2])
// to slice a particluar string from one point or index to another index. but here the ending point will be always end point's index + 1
let day1 = day.slice(0,4)
console.log(day1)
// splitting
console.log(day.split("d")) // the metion letter will be omitted and the rest of the string will be returned as 2 separate string in an array format
let sentence = "Today is "
console.log(sentence + day)
// or we can do like below way
let sentences = "Today is " + day
console.log(sentences)
console.log(sentences.indexOf("day")) // to get the starting index of a string
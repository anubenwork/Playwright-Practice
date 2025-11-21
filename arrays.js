var marks=new Array(20,30,40);
console.log(marks[2]);

var score=[5,10,6,15];
console.log(score[2]);
score.sort((a,b)=> {
console.log("comparing",a,"and",b)
return a-b
})
console.log("sorted number",score)

var subject=["English","Maths","Science","Arts"]
console.log(subject.sort())
console.log(subject.reverse())
const getText = "Give Text";
const upperCase = getText.toUpperCase();
console.log(upperCase)
const toLowerCase = getText.toLowerCase();
console.log(toLowerCase)
const length = getText.length;
console.log(length)

//includes 

const stopList1 = "spam";
const stopList2 = "discount";


const string1 = "hello, SPAM";
const string2 = " dear discount";

console.log(string1.toLowerCase().includes(stopList1))
console.log(string2.includes(stopList2));
//
("I am Tetiana, I learn in ITStep academia, in Front-End 33 group")
const  school = "ITStep"
const  name = "Tetiana"
let  groupNumber = "Front-End 33"
groupNumber = groupNumber.replace("A", "E")
console.log(`I am ${name}, I learn in ${school} academia, in ${groupNumber} group`)
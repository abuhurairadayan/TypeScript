var numArray = [10, 20, 30]; // array writing style in js
var stringArray = ["ahmad", "tufail", "hania"]; // array writing style in js
// In Typescript we write arrays as below
var numArr = [10, 20, 30];
var stringArr = ["ahmad", "tufail", "hania"];
console.log(numArr);
numArr.push(40); // ✅ allowed it will updating numArr with push method it will add new element at the end of array
// numArr.push("Ali");  // ❌ error: string allowed nahi 
console.log(numArr);
// union array 
var uniArr = ["huraira", 21, "nizam", 22];
console.log(uniArr.length);
uniArr.push("dayan", 24); // ✅ both string and number are allowed beacause its called union arrray we have given an array both types
console.log(uniArr.length);
// arrays of objects
var student = [
    { sName: "sara", age: 20 },
    { sName: "ali", age: 23 },
    { sName: "huraira", age: 21 }
];
console.log(student[1]);
var teacher = [
    { tName: "tatheer", age: 23 },
    { tName: "waseem", age: 28 },
    { tName: "noor", age: 27 }
];
console.log(teacher[1]);

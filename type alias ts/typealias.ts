

type teacher = {     // teacher ek type alias hai jo object ka shape define karta hai.
    name: string;
    age: number;
};

let teachers: teacher[] = [
    {name: "tatheer" , age: 23}, // ye ek object hai jis ko type teacher se mil raha hai.
    {name: "waseem" , age: 25},  // ye ek object hai jis ko type teacher se mil raha hai.
    {name: "asad" , age: 28}    // ye ek object hai jis ko type teacher se mil raha hai.
];

teachers.forEach(teacher => {
    console.log(`Name: ${teacher.name} and Age is ${teacher.age}`);
});
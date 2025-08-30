var teachers = [
    { name: "tatheer", age: 23 },
    { name: "waseem", age: 25 },
    { name: "asad", age: 28 }
];
teachers.forEach(function (teacher) {
    console.log("Name: ".concat(teacher.name, " and Age is ").concat(teacher.age));
});

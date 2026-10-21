let studentName = "Grishma";
let studentAge = 25;
let studentCity = "Pune";
let studentCouse = "Playwright";

// Object - An object is a data structure that stores related information as a key-value pair.
const student = {
    name: "Grishma",
    age: 25,
    city: "Pune",
    course: "Playwright",
    isEnrolled: true
};

console.log(student);
// console.log(studentName);
// console.log(studentCity);

console.log(student.city);
// console.log(student.cityname);

let key = "name";

console.log("****************");
console.log(student[key]); // Grishma
console.log(key);
console.log(student.key);  // undefined

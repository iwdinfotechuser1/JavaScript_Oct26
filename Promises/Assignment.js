// # Assignment 1 — Student Result Management

// Concepts: Variables, operators, conditions, functions
// Create a program that calculates a student's result based on marks.

// Requirements:
// 1. Store student name and marks for three subjects.
// 2. Calculate total and percentage.
// 3. Check whether the student passed all subjects (minimum 35 marks per subject).
// 4. Assign a grade based on percentage:
//    - 90 and above: A
//    - 75–89.99: B
//    - 60–74.99: C
//    - 35–59.99: D
//    - Below 35: Fail
// 5. Create a function calculateResult() that returns the result.
// 6. Print the student's name, total, percentage and final grade.

// Test data: English = 80, Maths = 90, Science = 70.

const studentName = "Neha";

const english = 80;
const maths = 90;
const science = 70;

const total = english + maths + science;
const percentage = (total / 300) * 100;

console.log("Total: ", total);
console.log("Percentage: ", percentage);

if(english >= 35 && maths >= 35 && science >= 35) {
    console.log("Student Passed")
} else {
    console.log("Student Failed")
}

if (percentage >= 90){
    console.log("Grade A")
} else if (percentage >= 75){
    console.log("Grade B")
} else if (percentage >= 60){
    console.log("Grade C")
} else if (percentage >= 40){
    console.log("Grade D")
} else {
    console.log("Fail")
}

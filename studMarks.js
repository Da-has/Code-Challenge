// Store a number in 'marks'  value to test different inputs
let marks = 105; // Example: 85 for A, 45 for D, etc.

// First, check if marks are invalid: less than 0, greater than 100, or not a number
if (marks < 0 || marks > 100 || isNaN(marks)) {
    // If invalid, show an error message
    console.log("Invalid input.");
} else {
    // Declare a variable to store the grade
    let grade;

    // If marks are greater than 79, grade A is assigned
    if (marks > 79) {
        grade = "A";
    }
    // If marks are between 60 and 79, grade B is assigned
    else if (marks >= 60) {
        grade = "B";
    }
    // If marks are between 50 and 59, grade C is assigned
    else if (marks >= 50) {
        grade = "C";
    }
    // If marks are between 40 and 49, assign grade D
    else if (marks >= 40) {
        grade = "D";
    }
    // If marks are less than 40, assign grade E
    else {
        grade = "E";
    }

    // Print out the result
    console.log(`The grade is: ${grade}`);
}

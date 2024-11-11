function calculateGrade() {
    const studentMark = parseFloat(document.getElementById("studentMark").value);
    const passMark = 40;
    let result = document.getElementById("result");

    // Clear previous result
    result.innerHTML = "";

    if (isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        result.innerHTML = "Invalid student mark.";
        return;
    }

    if (studentMark >= passMark) {
        let grade = "";

        if (studentMark <= 59) {
            grade = "D";
        } else if (studentMark <= 69) {
            grade = "C";
        } else if (studentMark <= 79) {
            grade = "B";
        } else if (studentMark <= 89) {
            grade = "A-";
        } else {
            grade = "A+";
        }

        result.innerHTML = `Congratulations! You have successfully passed. <br>Grade: ${grade}`;
    } else {
        result.innerHTML = "Sorry, you have failed.";
    }
}
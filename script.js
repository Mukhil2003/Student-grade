document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let student = document.getElementById('student').value;

    let numericGrade = parseFloat(document.getElementById('numericGrade').value);
    let letterGrade = convertToLetterGrade(numericGrade);

    document.getElementById('letterGrade').textContent = letterGrade;
    document.getElementById('result').classList.remove('hidden');
});

function convertToLetterGrade(grade) {
    if (grade >= 88) {
        return 'A';
    } else if (grade >= 80) {
        return 'B';
    } else if (grade >= 70) {
        return 'C';
    } else if (grade >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
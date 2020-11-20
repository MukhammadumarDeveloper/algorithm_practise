// 6. Write a JavaScript program which compute,
// the average marks of the following students
// Then, this average is used to determine the corresponding grade.

const averageGrade = (student, grade) => {
    if (grade < 60){
        return `${student}'s grade is F`
    } else if (grade < 70){
        return `${student}'s grade is D`
    } else  if (grade < 80){
        return `${student}'s grade is C`
    } else  if (grade < 90){
        return `${student}'s grade is B`
    } else if (grade < 100){
        return `${student}'s grade is A`
    }
}

console.log(averageGrade("David", 99))
console.log(averageGrade("Vinoth", 80))
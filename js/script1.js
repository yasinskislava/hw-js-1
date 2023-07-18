// Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента
// (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію
// для повернення середньої оцінки студента.

const student = {
    name: "Bruce",
    surname: "Lee",
    grades: [4, 5, 3],
}

function calculateAverageGrade(obj) {
    const { name, surname, grades } = obj;
    let total = 0;
    for (const i of grades) {
        total += i;
    }
    const average = total / grades.length;
    return average;
}

console.log(calculateAverageGrade(student));

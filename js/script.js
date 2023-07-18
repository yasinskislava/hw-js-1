// Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та
// використовує деструктуризацію для повернення рядка, що містить інформацію про цю
// людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".

const person = {
    name: "Nelli",
    surname: "Laroy",
    age: 25,
}

function personInfo(obj) {
    const { name, surname, age } = obj;
    return `Мене звати ${name} ${surname} і мені ${age} років`;
}

console.log(personInfo(person));
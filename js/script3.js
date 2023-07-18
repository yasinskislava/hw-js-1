// Напишіть функцію, яка отримує об'єкт зі списком користувачів (поле "users"),
// де кожен користувач є об'єктом з полями "ім'я" та "вік", та використовує
// деструктуризацію для повернення списку користувачів, які старші за 18 років.

const data = {
    users: [
        { name: "John", age: 25 },
        { name: "Jane", age: 17 },
        { name: "Bob", age: 30 },
        { name: "Alice", age: 20 },
    ],
};

function getAdultUser(obj) {
    const { users } = obj;
    const arr = [];
    for (const i of users) {
        if (i.age >= 18) {
            arr.push(i.name + " " + i.age);
        }
    }
    return arr;
}

console.log(getAdultUser(data));
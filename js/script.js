//Отримати масив імен всіх користувачів (поле name)

const ex = [
    { name: "Oleg", age: 54 },
    { name: "Max", age: 21 },
    { name: "Denis", age: 35 },
    { name: "Artur", age: 12 },
];

const arr = ex.map(i => i.name);
console.log(arr);

// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends).

const users = [
    { name: "Max", friends: 4 },
    { name: "Andriy", friends: 6 },
    { name: "Mykola", friends: 2 },
];
const ans = users.sort((first, second) => first.friends - second.friends).reduce((acc, {name}) => [...acc, name], []);
console.log(ans);
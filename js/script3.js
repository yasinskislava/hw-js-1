// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь
// і вони повинні бути відсортовані в алфавітному порядку.

const users = [
  { name: "Max", skills: ["programming", "creativity"] },
  { name: "Andriy", skills: ["leadership", "creativity"] },
  { name: "Mykola", skills: ["programming", "communication"] }
];
let previousElement = "";
const arr = users.reduce((acc, { skills }) => [...acc, ...skills], []).sort();
const ans = arr.filter((element, index) => arr.indexOf(element) === index);

console.log(ans);
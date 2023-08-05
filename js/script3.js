// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь
// і вони повинні бути відсортовані в алфавітному порядку.

const users = [
  { name: "Max", skills: ["programming", "creativity"] },
  { name: "Andriy", skills: ["leadership", "creativity"] },
  { name: "Mykola", skills: ["programming", "communication"] }
];

const arr = users.reduce((acc, { skills }) => [...acc, ...skills], []).sort();
const ans = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] !== arr[i + 1]) {
      ans.push(arr[i]);  
    }
}
console.log(ans);
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const friend = "Anton";

const users = [
  { name: "Max", friends: ["Oleg", "Denis"] },
  { name: "Andriy", friends: ["Anton", "Masha"] },
  { name: "Mykola", friends: ["Olena", "Anton"] }
];

const ans = users.reduce((arr, {name, friends}) => friends.includes(friend) ? [...arr, name] : [...arr] ,[]);
console.log(ans);


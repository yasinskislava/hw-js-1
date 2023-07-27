//Отримати масив імен користувачів за статтю (поле gender)

const ex = [
  { name: "Olena", age: 54, eyecolor: "blue", gender: "female" },
  { name: "Maria", age: 21, eyecolor: "green", gender: "female" },
  { name: "Denis", age: 35, eyecolor: "black", gender: "male" },
  { name: "Artur", age: 12, eyecolor: "blue", gender: "male" },
];

const arr = ex.filter(i => i.gender === "female");
console.log(arr);
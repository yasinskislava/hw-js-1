//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor)

const ex = [
  { name: "Oleg", age: 54, eyecolor: "blue" },
  { name: "Max", age: 21, eyecolor: "green" },
  { name: "Denis", age: 35, eyecolor: "black" },
  { name: "Artur", age: 12, eyecolor: "blue" },
];

const arr = ex.filter(i => i.eyecolor === "blue");
console.log(arr);
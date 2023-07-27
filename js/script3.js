// Отримати масив тільки неактивних користувачів (поле isActive)

const ex = [
  { name: "Olena", age: 54, eyecolor: "blue", gender: "female", isActive: true },
  { name: "Maria", age: 21, eyecolor: "green", gender: "female", isActive: false},
  { name: "Denis", age: 35, eyecolor: "black", gender: "male", isActive: true},
  { name: "Artur", age: 12, eyecolor: "blue", gender: "male", isActive: true},
];

const arr = ex.filter(i => i.isActive);
console.log(arr);
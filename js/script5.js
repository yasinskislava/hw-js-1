// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age)

const ex = [
  { name: "Olena", age: 54, eyecolor: "blue", gender: "female", isActive: true, email: "Olena@example.com"},
  { name: "Maria", age: 21, eyecolor: "green", gender: "female", isActive: false, email: "Maria@example.com"},
  { name: "Denis", age: 35, eyecolor: "black", gender: "male", isActive: true, email: "Denis@example.com"},
  { name: "Artur", age: 12, eyecolor: "blue", gender: "male", isActive: true, email: "Artur@example.com"},
];

const min = 18;
const max = 40;

const arr = ex.filter(i => i.age >= min && i.age <= max);
console.log(arr);
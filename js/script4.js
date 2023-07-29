// Отримати користувача (не масив) по email (поле email, він унікальний)

const ex = [
  { name: "Olena", age: 54, eyecolor: "blue", gender: "female", isActive: true, email: "Olena@example.com"},
  { name: "Maria", age: 21, eyecolor: "green", gender: "female", isActive: false, email: "Maria@example.com"},
  { name: "Denis", age: 35, eyecolor: "black", gender: "male", isActive: true, email: "Denis@example.com"},
  { name: "Artur", age: 12, eyecolor: "blue", gender: "male", isActive: true, email: "Artur@example.com"},
];

const email = "Denis@example.com";

const user = ex.find(i => i.email === email);
console.log(user);
//Тут немає функцій, я залишив це завдання щоб заповнити пробіл


let input = "";
const numbers = [];
while (input !== null) {
  input = prompt("Введіть число");
  let check = Number(input);
  if (input == check) {
    numbers.push(input);
  } else if (input !== null) {
    alert("Було введено не число, попробуйте ще раз");
  }
}
let total = 0;
for (let i of numbers) {
  total += Number(i);
}
console.log(`Загальна сума чисел дорівнює ${total}`);

//ДОМАШКА

//1. Изучить теорию
//2. Решить задачи:

// Задача №1
// Кто попадет в консоль первым Вася или Коля?---------Коля
function showName() {
  console.log("Вася!");
}
setTimeout(showName, 0);
console.log("Коля!");

// Задача №2
// Верно ли вызвана функция-------Так
showMessage();
function showMessage() {
  console.log("Сообщение");
}
// Задача №3
// Верно ли вызвана функция---------Ні


// showMessage();
// let showMessage = function () {
//   console.log("Сообщение");
// };


// Задача №4
// Как решить проблему?----------Слід оголосити функцію за допомогу function expression
if (2 > 1) {
  function showMessage() {
    console.log("Сообщение");
  }
}
showMessage(); // Error (showMessage is not defined)

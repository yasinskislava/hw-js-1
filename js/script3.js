const SAVED_PASSWORD = "abc";
const password = prompt("Введіть пароль");
const isMatch = SAVED_PASSWORD === password;
console.log(isMatch);
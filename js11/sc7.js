const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = (login) => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = (allLogins, login) => allLogins.includes(login);


const addLogin = (allLogins, login) => {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === false) {
      logins.push(login);
      return "Логін успішно доданий!";
    } else {
      return "Такий логін вже використовується!";
    }
  } else {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(logins);

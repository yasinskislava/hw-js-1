let num = prompt("Який номер поточного місяця?"); 
num = Number(num);
let ans;
let part;
let month;
switch (num) {
    case 12: ans = "Грудень"; part = "Зима"; break;
    case 1: ans = "Січень"; part = "Зима"; break;
    case 2: ans = "Лютий"; part = "Весна"; break;
    case 3: ans = "Березень"; part = "Весна"; break;
    case 4: ans = "Квітень"; part = "Весна"; break;
    case 5: ans = "Травень"; part = "Літо"; break;
    case 6: ans = "Червень"; part = "Літо"; break;
    case 7: ans = "Липень"; part = "Літо"; break;
    case 8: ans = "Серпень"; part = "Осінь"; break;
    case 9: ans = "Вересень"; part = "Осінь"; break;
    case 10: ans = "Жовтень"; part = "Осінь"; break;
    case 11: ans = "Листопад"; part = "Зима"; break;
    default: ans = "Номер місяця введено некоректно";
}
console.log(`Поточний місяць - ${ans}`);
console.log(`Поточна пора року - ${part}`);

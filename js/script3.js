let day = prompt("Який день тижня сьогодні?");
if (day !== null) {
    day = day.toLocaleLowerCase();
} 
let ans;
switch (day) {
    case "понеділок": 
    case "вівторок": 
    case "середа": 
    case "четверг": 
    case "п'ятниця": ans = "Робочий"; break;
    case "субота": 
    case "неділя": ans = "Вихідний"; break;
    default: ans = "Назва дня введеня некоректно";
}
console.log(ans);
let a = prompt("Якій напій ви бажаєте придбати?");
if(a !== null)a = a.toLocaleLowerCase();
let answer;
switch (a) {
    case "чай": answer = "Ціна напою - 20 гривень"; break;
    case "кава": answer = "Ціна напою - 25 гривень"; break;
    case "сік": answer = "Ціна напою - 15 гривень"; break;
    default: answer = "Обраного напій відсутній у списку";
}
console.log(answer);
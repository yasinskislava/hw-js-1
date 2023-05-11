const country = (prompt("Введіть вашу країну")).toLocaleLowerCase();
let ans;
let cost;
let c = 0;

switch (country) {
    case "китай": ans = "Китай"; cost = 100; break; 
    case "чилі": ans = "Чилі"; cost = 250; break; 
    case "австралія": ans = "Австралія"; cost = 70; break; 
    case "індія": ans = "Індія"; cost = 80; break; 
    case "ямайка": ans = "Ямайка"; cost = 120; break; 
    default: ans = "У вашій країні доставка недоступна"; c = 1;
}
if (c === 0) {
    console.log(`Доставка в ${ans} буде коштувати ${cost} кредитів`);
}
else console.log(ans);


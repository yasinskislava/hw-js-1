let question = prompt('Яка "офіційна" назва JavaScript?');
if (typeof question === String) {
    question = question.toLocaleLowerCase();
} 
if (question === "ecmascript") {
    alert("Правильно!");
}
else {
    alert("Ви не знаєте?ECMAScript!");
}
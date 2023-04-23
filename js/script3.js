const x1 = 10;
const x2 = 30;
const number = 45;
if (number < x1) {
    console.log("Це число знаходиться до x1");
}
if (number > x1) {
    console.log("Це число знаходиться після x1");
}
if (number >= x1 && number <= x2) {
    console.log("Це число входить у відрізок між x1 та x2");
}
if (number < x1 || number > x2) {
    console.log("Це число не входить у відрізок між x1 та x2");
}
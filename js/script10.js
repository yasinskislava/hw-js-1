const goods = 5;
let totalPrice = 0;
const min = 500;
const max = 5000;
for (let i = 1; i <= 5; i++){
    const rand = parseInt(Math.random() * (max - min) + min);
    totalPrice += rand;
}
console.log(totalPrice);
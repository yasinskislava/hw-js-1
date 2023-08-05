// Отримати загальну суму балансу (поле balance) всіх користувачів.

const users = [
    { userId: 1, balance: 200 },
    { userId: 2, balance: 120 },
    { userId: 3, balance: 240 },
    { userId: 4, balance: 360 }
];

const ans = users.reduce((totalBalance, { balance }) => totalBalance + balance, 0);
console.log(ans);

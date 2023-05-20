let fruits = ["apple", "lemon", "banana", "pineapple", "mango", "passion fruit"];
fruits.shift();
fruits.pop();
fruits.unshift("pear");
fruits.push("melon");

fruits.splice(2, 1, "kiwi", "peach");

const str = fruits.join(" ");
console.log(str);
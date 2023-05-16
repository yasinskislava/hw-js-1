let fruits = ["apple", "lemon", "banana", "pineapple", "mango", "passion fruit"];
fruits.shift();
fruits.pop();
fruits.unshift("pear");
fruits.push("melon");

fruits.splice(2, 1, "kiwi", "peach");

let str = "";
for (let i = 0; i < fruits.length; i++){
    str += fruits[i] + " ";
}
console.log(str);
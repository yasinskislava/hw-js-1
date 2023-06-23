const deliverPizza = (pizzaName) => {
  return `Delivering ${pizzaName} pizza.`;
}

const makePizza = (pizzaName) => {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line

const makeMessage = (pizzaName, callback) => {
  return callback(pizzaName);
}

console.log(makeMessage("Royal Grand", makePizza));

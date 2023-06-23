const calculateDiscountedPrice = (price, discount, callback) => {
  const sum = callback(price, discount);
  console.log(sum);
};

const showDiscountedPrice = (price, discount) => (price / 100) * (100 - discount);


calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
calculateDiscountedPrice(157, 10, showDiscountedPrice);

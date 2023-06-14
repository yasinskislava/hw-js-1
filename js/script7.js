const calculateDiscountedPrice = function (price, discount, callback) {
    const sum = callback(price, discount);
    console.log(sum);
}

 

const showDiscountedPrice = function (price, discount) {
    return price / 100 * (100 - discount);
}

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
calculateDiscountedPrice(157, 10, showDiscountedPrice);
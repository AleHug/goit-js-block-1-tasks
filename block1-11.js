function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = pricePerItem * orderedQuantity;

  // Change code above this line
  return totalPrice;
};

const result = calculateTotalPrice("2", "5");

console.log(result);

// ЗАДАЧА: МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ 2.0
// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов calculateTotalPrice(1, 3500) возвращает 3500
// Вызов calculateTotalPrice(12, 70) возвращает 840
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
let productName = "Droid";
let pricePerItem = 2000;

// Change code below this line

productName = "Repair droid";
pricePerItem += 1500;





// ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
// Для того, чтобы объявить переменную, которой в будущем можно будет присвоить новое значение, используется ключевое слово let. Создание переменной без ключевого слова let или const приведёт к ошибке.

// let age = 5;
// age = 10;

// let username = "Mango";
// username = "Poly";
// Попытка обратиться к переменной по имени до её объявления вызовет ошибку.

// Например, нельзя пытаться прочитать или изменить значение переменой до ее объявления:

// // ❌ Неправильно, будет ошибка
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// // Объявление переменной age
// let age = 20;

// // ✅ Правильно, обращаемся после объявления
// age = 25;
// console.log(age); // 25
// Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов. Переопредели значения переменных pricePerItem и productName после их объявления.

// Переменная pricePerItem объявлена с помощью let
// При объявлении переменной pricePerItem присвоено значение - число 2000
// Переменной pricePerItem присвоено новое значение, больше чем предыдущее на 1500
// Переменная productName объявлена с помощью let
// При объявлении переменной productName присвоено значение - строка "Droid"
// Переменной productName присвоено новое значение - строка "Repair droid"
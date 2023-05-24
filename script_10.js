//Задача 1 - верна ли запись? В первом варианте ошибка в скобках, исп. ''.
let fls = 'фрилансер'
let text = `Привет! Я ${fls}`
console.log(text)

//Задача 2 - получить символ "н" строки:
let txt = 'фрилансер'
console.log(txt [5])

//Задача 3 - верно? ответ 123456
let sms = 123 + '456'
console.log(sms);

//Задача 4 - получить строку в верхнем регистре:
let message = "фрилансер";
console.log(message.toUpperCase());

//Задача 5 - получить подстроку лан из:
let word = "фрилансер";
console.log(word.slice(3,6));

//Задача 6 - true или false? - false, на 3.
let wording = "фрилансер";
console.log(wording.includes("лан", 4));

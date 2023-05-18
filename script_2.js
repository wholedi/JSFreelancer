//вариант 1 - не верно, нужны обратные кавычки.
let userAge = 36;
let userInfo = "Фрилансер ${userAge}";

//Вариант 2  - невернный, вернется Infinity.
let userHeight = 145/0;
console.log(userHeight);

//Вариант 3 - невернный, вернется undefined.
let userName;
console.log(typeof userName);

//Вариант 4 - Верно.
let userSize = "45" / "8";
console.log(typeof userSize);


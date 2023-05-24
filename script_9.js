//Задача 1 - получить верное значение округления:
let numOne = 1.005 + Number.EPSILON
let numTwo = Math.round(numOne * 100 )/ 100;
console.log(numTwo) //Выведет 1 что не верно, при данной записи выведет 1.01

//Задача 2 - получить число 135.56 из строки с parseFloat:
let value = parseFloat('135.56px');
console.log(value);


//Задача 3 - построить верное условное ветвление:
let sense = 58 + 'Фрилансер';
if (!isNaN(sense)) {
} else {
    console.log('Результат выражения Nan.')
}

const num = 600.12
console.log(num.toLocaleString(('en-US', { maximumFractionDigits: 4 })))
console.log(num.toFixed(4))

//Задача 4 - найти максимальные числа из 10, 58, 39, -150, 0:
console.log(Math.max(10, 58, 39, -150, 0));

//Задача 5 -  округлить чсло 58.858 до числа 58:
let numThree = Math.floor(58.858);
console.log(numThree);

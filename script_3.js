//Вариант 1 - не верно, вернет 35-22.
console.log('35' + - "22");

//Вариант 2 - верно, вернет 770.
console.log('35' * "22");

//Вариант 3 - верно, вернет true.
let i = 22;
console.log('558' > i++);

//Вариант 4 - не верно, вернет 0.
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers)

//Вариант 5 - не верно, вернет 11.
console.log(!false && 11 || 18 && !'');

//Вариант 6 - вернет 0.
let name = 0;
console.log(name ?? "Без имени");



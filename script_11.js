// Задача 1 - какую длинну мы получим? - 4.

let arr = ['Ваня', 'Коля', 'Оля',]
arr.push('Петя')
console.log(arr.length)

//Задача 2 - создать users c элементами "Ваня" и "Иштан".
let users = ['Ваня', 'Иштан']
console.log(users)
// добавить в конец "Оля".
users.push('Оля')
console.log(users)
//заменить значение 'Иштан' на 'Петя'.
users.splice(1, 1, 'Петя')
console.log(users)
// удалить первый элемент массива и показать его.
let newUsers = users.splice(0, 1,)
console.log(newUsers)
//вставить "Маша" и "Паша" в начало массива.
users.unshift('Маша', 'Паша');
console.log(users);

//Задача 3 - удалите элемент Иштван и возвратите его в переменную.
let arrOne = ['Ваня', 'Иштан', 'Оля',];
let arrTwo = arrOne.splice(1,1);
console.log(arrTwo);

//Задача 4 сделать из строки массив.
let str = 'Ваня, Иштан,Оля';
let arrThree = str.split(",");
console.log(arrThree);




//Вариант 1 - выведет ложь.
if (1 === '1') {
console.log('Истина!');
} else {
    console.log('Ложь!');
}

//Вариант 2 - выведет ложь.
if (1 === '5') {
    console.log('Истина!');
} else {
    console.log('Ложь!');
}

//Вариант 3 - выведет истина.
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//Вариант 4 - введет истина.
if (0) {
    console.log('Ложь!');
} else {
    console.log('Истина!');
}

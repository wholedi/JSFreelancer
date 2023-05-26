//Задача 1
let elementDataSayHi = document.querySelector('[data-say-hi]')
let sayHiValue = elementDataSayHi.dataset.sayHi

//Задача 2
let elementLi = document.querySelectorAll('li')
const text = elementLi[1].innerText

//Задача 3
let elementLike = document.querySelectorAll('.like')

//Задача 4
const list = document.querySelector('ul');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>',
);
console.log(list)




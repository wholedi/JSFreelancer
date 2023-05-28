//Задача 1 - узнать ширину прокрутки:

const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;


//Задача 2 - прокрутить стр браузера на 100px спустя секунду после открытия страницы

window.addEventListener('load', function() {
    // Ждем 1 секунду с помощью setTimeout
    setTimeout(function() {
        // Используем метод scrollBy для прокрутки страницы на 100 пикселей вниз
        window.scrollBy(0, 100);
    }, 1000); // 1000 миллисекунд = 1 секунда
});


//Задача 3 -получить координаты элементов на странице

const ul =  document.querySelector('ul')
const getUlCoords = ul.getBoundingClientRect() // относительно окна браузера

//------------------------------------------------------------------------------
//относительно документа:
const element = document.querySelector('li')

// Получаем прямоугольник, описывающий позицию и размеры элемента
const rect = element.getBoundingClientRect();

// Получаем значения прокрутки страницы по горизонтали и вертикали
const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

// Координаты элемента относительно документа
const x = rect.left + scrollLeft;
const y = rect.top + scrollTop;

console.log('Координаты элемента относительно документа:', x, y);

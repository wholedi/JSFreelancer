//Задача 1 - узнать ширину прокрутки:

const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
console.log('Ширина полосы прокрутки:', scrollBarWidth, 'пикселей');

//Задача 2 - прокрутить стр браузера на 100px спустя секунду после открытия страницы

window.addEventListener('load', function() {
    // Ждем 1 секунду с помощью setTimeout
    setTimeout(function() {
        // Используем метод scrollBy для прокрутки страницы на 100 пикселей вниз
        window.scrollBy(0, 100);
    }, 1000); // 1000 миллисекунд = 1 секунда
});
console.log(addEventListener)

//Размер окна браузера - доступная высота и ширина clientWidth & clientHeight исп. чаще всего:
const mainElement = document.documentElement
const mainElementWidth = mainElement.clientWidth
const mainElementHeight = mainElement.clientHeight

//Ширина и высота браузера вместе с полосами прокрутки innerWidth & innerHeight:
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

//Получить количество прокрученых пикселей ( только для чтения):
//const windowScrollTop = window.pageYOffset;
//const windowScrollLeft = window.pageXOffset;

//Метод scrollBy(x,y) прокручивает страницу относительно ее текущего положения
function setScrollBy() {
    window.scrollBy(0, 50) // 0 по горизонт. 50 по вертикал.
    //const windowScrollTop = window.pageYOffset
}

//Метод scrollTo(pageX, pageY) прокручивает на абсолютные координаты, дальше не прокручивает:
function setScrollTo() {
    window.scrollTo(0, 50)
    const windowScrollTop = window.pageYOffset
}


//Управление прокруткой страницы
/* Вызов elem.scrollIntoView(top) прокручивает страницу чтобы элемент оказался вверху или внизу.
У него есть один аргумент:

 - если top = true(по умолчанию), то стр будет прокручена чтобы элемент появился в верхней части (верхний край
 элемента совмещен с верхей частью окна.

 - если top = false, то стр будет прокручена чтобы элемент появился внизу (нижний край
 элемента совмещен с нижним краем окна
 */
function setScrollIntoView(top){
    const lessonSelected = document.querySelector('.lesson__selected')
    lessonSelected.scrollIntoView(top)
}

//Запретить прокрутку
function setEnableDisableScroll() {
    //document.body.style.overflow = "hidden" или
    document.body.classList.toggle('scroll-lock')
}

//-----------------------------------Метрики элементов на странице-------------------------------------------------
// получаем объект
const block = document.querySelector('.lesson__block')
//получаем родительский элемент относительно которого позиционирован
const elementOffsetParent = block.offsetParent

/* Это ближайший предок, который удовлетворяет следующим условиям:

1. является css-позиционированным (position равно absolute, relative, fixed, sticky)
2. или теги <td> <th> <table>
3. или <body>
 */

/*Ситуации в которых offsetParent равно null:
1. Для скрытых элеметов (display: none или когда его нет в документе)
2. Для элементов <body> <html>
3. Для элементов с position: fixed.*/

//--------------------------------------------------События-------------------------------------------------------------
/*Отлавливать возникновение события с помощью специальных обработчиков.
Любому событию можно назначить обработчик(функцию) которая сработает, как только произойдет событие.
 */

//1 способ использывание атрибута HTML как пример onclick: <button onclick = "console.log('Клик!')</button>
                               //onclick - обработчик события
//2 способ использывание DOM-объекта:
//const button = document.querySelector('.button');
button.onclick = function (){
    console.log('Клик!')
}
//недостаток способа - невозможно повесить несколько обработчиков на одно событие, каждое новое - перезапишет предыдущее

//проблему можно решить с помощью addEventListener/removeEventListener
const button = document.querySelector('.button');
button.addEventListener("click", function (e) {
    console.log("Клик!");
});
button.addEventListener("click", function (e) {
    console.log("Клак!");
    button.removeEventListener("click")// останавливает наш клик и мы можем кликнуть 1 раз
});

//Опции
const options = {
    "capture": false, //фаза на которой должен сработать обработчик
    "once": true, //если true - будет автоматически удален послсе выполнения по типу removeEventListener
    "passive": false // если true - никогда не  вызовет preventDefault()
}
const buttonOne = document.querySelector('.button');
function showConsole(){
    console.log('Клик!')
}
buttonOne.addEventListener("click", showConsole, options );

//объект события
/* Для лучшей обработки события, могут понадобиться детали того, что произошло, пример координаты указателя мыши или
нажатие клавиши. Когда происходит событие, браузер создает объект события, записывает детали, и передает в качестве
аргумента функции.
 */

const buttonTwo = document.querySelector('.button')
function showConsoleOne(event) {
    //тип события
    console.log(event.type);
    //объект на котором сработал обработчик
    console.log(event.target);
    //объект к которому назначен обработчик
    console.log(event.currentTarget);
    //положение курсора по оси X
    console.log(event.clientX);
    //положение курсора по оси Y
    console.log(event.clientY);

    //Все детаои события
    console.log(event);
}

//Делегирование событий - пример, если у нас есть множество кнопок, которые в консоль выводят одно и тоже значение, то
//вместо вешать обработчика на все кнопки по очереди, мы вешаем на родителя, в котором они находятся
const lesson = document.querySelector(".lesson") // наши кнопки находяться в <div class = "lesson">
function showConsoleTwo(){
    console.log("Ура!");
}
lesson.addEventListener("click", function (event){
    if (event.target.closest(".button")){ //указали, чтоб обработчик срабатывал при условии что мы нажимаем именно на
        showConsoleTwo()                  //кнопку, а не на другой элемент.
    }
});

//ПРИМЕР у нас есть кнопка меню, которая при нажатии открывает меню состощее с пунктов, а закрыть его мы можем через
// нажать повторно на кнопку или на любое место на странице
const menuBody = document.querySelector(".menu")
document.addEventListener("click", menu)
function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('.active')
    }
    if (!event.target.closest('.menu__button')) {
        menuBody.classList.remove('.active')
    }
}

//-----------------------------------------Действия браузера по умолчанию-----------------------------------------------
//пример: клик по ссылке - переход на новый url/ нажатие на кнопку отправить в форме/ зажатие кнопки мыши
//если мы обрабатываем события в js, зачастую действие браузера нам не нужно, его можно отменить.
const link = document.querySelector('.link');
link.addEventListener('click', function (event){
    //отменить действие браузера (переход по ссылке)
    event.preventDefault();

});
//или если было через onclick
link.onclick = function (){
    return false;
};
//-----------------------------------------Основы событий мыши----------------------------------------------------------
/* можем разделить события на 2 категории: "простые" и "комплексные".
ПРОСТЫЕ самые часто используемые:
mousedown/mouseup - кнопка нажата - отпущена над эл.
mouseover/mouseout - курсор появяется над эл и уходит с него.
mousemove - каждое движение мыши над эл генерирует это событие.
contextmenu - вызывается при попытке открытия контекстного меню, как правило, нажатием правой кнопки мыши.
 */
/* КОМПЛЕКСНЫЕ
click/dblclick - комплексные события состоят с простых.
 */
//Координаты: clientX/Y, pageX/Y
const blockForMouse = document.querySelector('.block-for-mouse');
blockForMouse.addEventListener('mousemove', function (event){
    blockForMouse.innerHTML =
    'clientX - '
})

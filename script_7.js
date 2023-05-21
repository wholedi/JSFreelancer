//Задача 1 - первым выпало имя Коля и потом за ним Вася.
function showName(){
    console.log("Вася!");
}
setTimeout(showName, 0);
console.log("Коля!")

//Задача 2 - правильно.
showMessage()
function showMessage(){
    console.log("Сообщение");
}

//Задача 3 - не верно.
// showM()
let showM = function (){
    console.log("Сообщение");
}

//Задача 4
'use strict'
if (2 > 1) {
    function showMess() {
        console.log('Сообщение');
    }
}
showMess();

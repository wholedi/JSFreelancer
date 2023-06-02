//------------------------------------------Свойства и методы форм------------------------------------------------------

//Коллекция всех форм на странице document.forms - получить коллекцию всех форм на странице console.log(document.forms)

//получить конкретную форму на странице:
const mainForm = document.forms[0]

//либо через атрибут name
const mainFormOne = document.forms.main

//добавление новой формы
document.body.insertAdjacentHTML(
    'beforeend',
    ' <form name = "some" class = "some-form" action ="#"></form>'
)

//как получить элементы с формы
const mainFormTwo = document.forms.main
console.log(mainFormTwo.elements)

//получить элемент с именем nameInput через атрибут name:
const mainFormInput = mainFormTwo.elements.nameInput
//или mainFormTwo.nameInput
console.log(mainFormInput)

//работа с input, textarea
/*Значения можно получить через свойство input.value(строка) или input.checked(булевое значение) для чекбоксов
и радиокнопок.
 */

const mainFormThree = document.forms.main
const mainFormInputTwo = mainForm.nameInput
const mainFormTextarea = mainForm.nameTextarea

//получаем значение (содержимое) поля
console.log(mainFormInputTwo.value)
//получить значение (содержимое) текстового поля
console.log(mainFormTextarea.value)

//Присвоить значение (содержимое) поля
mainFormInputTwo.value = 'Пока!'
// значение (содержимое) текстового поля
mainFormTextarea.value = 'До встречи!'

const mainFormRadioButtons = mainForm.nameRadio
const mainFormCheckBox = mainForm.nameCheck
const mainFormFile = mainForm.nameFile

//получить значение поля type radio
console.log(mainFormRadioButtons[0].value)
console.log(mainFormRadioButtons[1].value)
console.log(mainFormRadioButtons[0].checked)
console.log(mainFormRadioButtons[1].checked)

//получить значение поля type checkbox
console.log(mainFormCheckBox.value)
console.log(mainFormCheckBox.checked)

//получить значение поля type file
console.log(mainFormFile.value)

//присвоить новое значение можно также как и к значению содержимого текстового поля

//Работа с select и option

/* Элемент <select> имеет 3 важных свойства:
select.options - коллекция из подэлементов <option>
select.value - значение выбраного в данный момент <option>
select.selectedIndex - номер выбраного <option>

 Они дают три разных способа установить значение в <select>
 найти соответсвующий элемент <option> и установить его
 в option.selected значение true
 установить в select.value значение нужного <option>
 в select.selectedIndex номер нужного <option>
 */

const mainFormFour = document.forms.main
const mainFormSelect = mainFormFour.nameSelect

//получить все options
console.log(mainFormSelect.options)

//получить индекс выбраного option
const mainFormSelectIndex = mainFormSelect.selectedIndex
//получить значение выбраного option
const mainFormSelectValue = mainFormSelect.value
//получить текст выбраного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text

//элементы <option> имеют свойства:
//Выбрана ли опция option.selected
//Номер опции среди других в списке <select> - option.index
//Содержимое опции(то, что видит посетитель) - option.text

//Выбрать некий option
//const mainFormSelect.options[1].selected = true;
//mainFormSelect.selectedIndex = 1;
//mainFormSelect.value = 2;

//добавить новую опцию option = newOption(text, value, defaultSelected, selected)
//defaultSelected - задает атрибут, его можно получить как option.getAttribute("selected")
//selected - выбрано значение или нет. именно его важно поставить правильно

let newOption = new Option('100', '4', true, true)

//мультивыбор - получаем все выбраные значения из select с multiple
let selectedOptions = Array.from(mainFormSelect.options)
    .filter(option => option.selected)
    .map(option => option.value)

/*Когда элемент находится в фокусе, он может принимать пользовательский ввод, например, текстовое поле может получать
введенный текст или кнопка может быть активирована при нажатии клавиши Enter.
Для установки фокуса на элементе в JavaScript можно использовать метод focus(). когда кликает на эл или нажимает Tab
Противоположностью фокусировки является размытие (blur).
Когда элемент теряет фокус, он переходит в неактивное состояние и перестает принимать пользовательский ввод.
Метод blur() в JavaScript используется для снятия фокуса с элемента. когда кликает куда то еще или нажимает Tab
 */

// Получаем ссылку на элементы страницы
const inputElement = document.getElementById('myInput')
const buttonElement = document.getElementById('myButton')

// Установка фокуса на текстовом поле при загрузке страницы
window.onload = function () {
    inputElement.focus()
}

// Функция, которая вызывается при нажатии кнопки
function handleButtonClick() {
    // Снимаем фокус с текстового поля и устанавливаем на кнопку
    inputElement.blur()
    buttonElement.focus()
}

// Привязываем обработчик события клика к кнопке
buttonElement.addEventListener('click', handleButtonClick)

/*tabindex - это атрибут HTML-элемента,
    который определяет порядок фокусировки элементов при использовании клавиши "Tab" на веб-странице.
    Он позволяет контролировать, какие элементы могут быть фокусируемыми и в каком порядке они будут получать фокус.*/

// Получаем ссылку на элементы страницы
const inputElementOne = document.getElementById('myInput')
const buttonElementOne = document.getElementById('myButton')

// Устанавливаем tabindex для управления порядком фокусировки
inputElement.tabIndex = 1
buttonElement.tabIndex = 2

// Установка фокуса на текстовом поле при загрузке страницы
window.onload = function () {
    inputElement.focus()
}

/*Событие change в JavaScript возникает, когда элемент формы изменяется или теряет фокус после изменения.
Оно обычно применяется к элементам ввода, таким как текстовые поля, флажки (checkbox), переключатели (radio) и
выпадающие списки (select).
 */

const inputElementTwo = document.getElementById('myInput')
const selectElement = document.getElementById('mySelect')

// Обработчик события change для текстового поля
inputElementTwo.addEventListener('change', function (event) {
    console.log('Текстовое поле было изменено:', event.target.value)
})

// Обработчик события change для выпадающего списка
selectElement.addEventListener('change', function (event) {
    console.log('Выбрана опция:', event.target.value)
})

/*Событие input возникает при каждом изменении значения элемента ввода в реальном времени.
Оно применяется к элементам, таким как текстовые поля (input type="text"), текстовые области (textarea),
а также к элементам с возможностью редактирования содержимого,
 например, элементам с атрибутом contentEditable.
 */

const inputElementThree = document.getElementById('myInput')

// Обработчик события input для текстового поля
inputElementThree.addEventListener('input', function (event) {
    console.log('Значение текстового поля изменилось:', event.target.value)
})

/*Событие submit возникает, когда пользователь отправляет форму, нажимая на кнопку "Submit" или нажимая клавишу
"Enter" внутри элемента формы. Вы можете использовать обработчик события submit,
чтобы выполнить дополнительные действия перед отправкой формы или предотвратить ее отправку.
 */

const formElementOne = document.getElementById('myForm')

// Обработчик события submit для формы
formElementOne.addEventListener('submit', function (event) {
    event.preventDefault() // Предотвращаем отправку формы по умолчанию

    // Выполняем дополнительные действия перед отправкой формы
    console.log('Форма будет отправлена')
})

//проверяем ввод email выводим ошибку
const emailInput = document.getElementById('emailInput');
const formElement = document.getElementById('myForm');

// Обработчик события input для поля email
emailInput.addEventListener('input', function(event) {
    // Сбрасываем ошибку при каждом вводе
    emailInput.setCustomValidity('');
});

// Обработчик события invalid для поля email
emailInput.addEventListener('invalid', function(event) {
    event.preventDefault();
    // Устанавливаем сообщение об ошибке
    emailInput.setCustomValidity('Введите корректный адрес электронной почты');
    // Выводим сообщение об ошибке
    emailInput.reportValidity();
});

// Обработчик события submit для формы
formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // Выполняем дополнительные действия перед отправкой формы
    console.log('Форма будет отправлена');
});

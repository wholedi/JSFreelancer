//------------------------------------------Свойства и методы форм------------------------------------------------------

//Коллекция всех форм на странице document.forms - получить коллекцию всех форм на странице console.log(document.forms)

//получить конкретную форму на странице:
const mainForm = document.forms[0];

//либо через атрибут name
const mainFormOne = document.forms.main;

//добавление новой формы
document.body.insertAdjacentHTML(
    "beforeend",
   ' <form name = "some" class = "some-form" action ="#"></form>'
);

//как получить элементы с формы
const mainFormTwo = document.forms.main;
console.log(mainFormTwo.elements)

//получить элемент с именем nameInput через атрибут name:
const mainFormInput = mainFormTwo.elements.nameInput
//или mainFormTwo.nameInput
console.log(mainFormInput)

//работа с input, textarea
/*Значения можно получить через свойство input.value(строка) или input.checked(булевое значение) для чекбоксов
и радиокнопок.
 */

const mainFormThree = document.forms.main;
const mainFormInputTwo = mainForm.nameInput;
const mainFormTextarea = mainForm.nameTextarea;

//получаем значение (содержимое) поля
console.log(mainFormInputTwo.value)
//получить значение (содержимое) текстового поля
console.log(mainFormTextarea.value);

//Присвоить значение (содержимое) поля
mainFormInputTwo.value = "Пока!";
// значение (содержимое) текстового поля
mainFormTextarea.value = "До встречи!";

const mainFormRadioButtons = mainForm.nameRadio;
const mainFormCheckBox = mainForm.nameCheck;
const mainFormFile = mainForm.nameFile;

//получить значение поля type radio
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);

//получить значение поля type checkbox
console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);

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

const mainFormFour = document.forms.main;
const mainFormSelect = mainFormFour.nameSelect;

//получить все options
console.log(mainFormSelect.options)

//получить индекс выбраного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
//получить значение выбраного option
const mainFormSelectValue = mainFormSelect.value;
//получить текст выбраного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;

//элементы <option> имеют свойства:
//Выбрана ли опция option.selected
//Номер опции среди других в списке <select> - option.index
//Содержимое опции(то, что видит посетитель) - option.text

//Выбрать некий option
//const mainFormSelect.options[1].selected = true;
//mainFormSelect.selectedIndex = 1;
//mainFormSelect.value = 2;

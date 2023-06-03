//Задача 1 - выводим картинку после выбора

const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener('change', function (e){
    let selectedFile = mainFormFile.files[0];

    //получаем URL изображения
    let fileUrl = URL.createObjectURL(selectedFile);

    mainFormFile.parentElement.insertAdjacentHTML(
        'beforeend',
        '<div class="main-form__image"> <img alt="" title = "${selectedFile.name}">'
        </div>'
    );
});
//Задача 1.2

// Получаем ссылки на элементы
const imageSelect = document.getElementById('image-select');
const selectedImage = document.getElementById('selected-image');

// Добавляем обработчик события "change" к элементу select
imageSelect.addEventListener('change', function() {
    const {value: imagePath} = imageSelect.options[imageSelect.selectedIndex];

    selectedImage.src = imagePath;
});

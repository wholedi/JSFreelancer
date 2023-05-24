//Задача 1 - правильная запись.

const userInfo = {
    name: "Вася",
    age: 30,
}
console.log(userInfo);

//Задача 2 - в консоли будет "Значение свойства из-за записи в [].

let userInf = {
    name: "Вася",
    age: 30,
    "58": 'Значение свойства',
}
console.log(userInf[58]);

//Задача 3 в консоли будет нвовое значение 45.

let userIn = {
    name: "Вася",
    age: 30,
}
let user = userInfo;
user.age = 45;
console.log(user.age)

function withThis(name) {
    this.name = name
    this.age = 30
}
function withoutThis(name) {
    return {
        name: name,
        age: 30
    }
}
console.log(new withThis("Taras"))
console.log(withoutThis("Taras"))

// Задача №1
//Вариант 1:
let num = 1;


console.log(`
Task 1
Variant 1
`)

while (num < 6){
    console.log(num);
    num++;
}

console.log(`
Variant 2
`)

//Вариант 2:
for (let num = 1; num < 6; num++){
    console.log(num);
}

console.log(`
Task 2
`)

//Задача №2 - последний результат 1, так как 0 - false.
let number = 8;
while (number) {
    console.log(number);
    number--;
}

console.log(`
Task 3
`)

//Задача №3 - переписать на while:
for (let task = 0; task < 3; task++){
    console.log(`Число: ${task}`);
}

let task = 0;
while (task < 3){
    console.log(`Число: ${task}`);
    task++;
}

console.log(`
Task 4
`)

//Задача №4 - прекратить работу цикла 1, когда size равна 1.
for (let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++){
        console.log(size);
    }
}
console.log(`
Task 4.1
`)
//Прекратить работу цикла 1, когда size равна 1. Добавила к первому циклу метку, через которую прекратила работу первого цикла.
firstFor: for (let num = 0; num < 2; num++){
    for (let size = 0; size < 3; size++){
        if (size === 1) {
            break firstFor;
        }
        console.log(size);
    }
}




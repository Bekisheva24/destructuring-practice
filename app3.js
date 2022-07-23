// Пропуск значений

let arr = ["Иван", "Иванов", "отдел разработки", "программист", 2000];

// let name = arr[0];
// let position = arr[3];

// console.log(name);
// console.log(position);

// USE DESTRUCTURING

let [name, , , position, ,] = arr;

console.log(name);
console.log(position);
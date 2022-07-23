//  DEFAULT values

let arr = ["Иван", "Иванов", "отдел разработки", "программист"];

// let name = arr[0];
// let surname = arr[1];
// let department = arr[2];

// let position;

// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = "junior";
// }

// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);




// USE DESTRUCTURING

let [name, surname, department, position = "junior"] = arr;

console.log(name);
console.log(surname);
console.log(department);
console.log(position);
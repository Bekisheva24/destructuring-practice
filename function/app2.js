func(["Иван", "Иванов", "отдел разработки", "программист", 2000]);

// function func(employee) {
// 	let name = employee[0];
// 	let surname = employee[1];
// 	let info = employee;

// 	console.log(name);
// 	console.log(surname);
// 	console.log(info);
// }


// USE DESTRUCTURING

function func([name, surname, ...info]) {
	console.log(name);
	console.log(surname);
	console.log(info);
}
func({ color: 'red', width: 400, height: 500 })

// function func(options) {
// 	let color = options.color;
// 	let width = options.width;
// 	let height = options.height;

// 	console.log(color);
// 	console.log(width);
// 	console.log(height);
// }


// USE DESTRUCTURING 
function func({ color, width, height }) {
	console.log(color);
	console.log(width);
	console.log(height);
}

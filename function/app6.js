func({ width: 400, height: 500 });

// function func(options) {
// 	let width = options.width;
// 	let height = options.height;

// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}

// 	console.log(width);
// 	console.log(height);
// 	console.log(color);
// }


// USE DESTRUCTURING 
function func({ color = 'black', width, height }) {
	console.log(width);
	console.log(height);
	console.log(color);
}
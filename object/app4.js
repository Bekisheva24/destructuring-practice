let options = {
	width: 400,
	height: 500,
};

// let c;
// if (options.c !== undefined) {
// 	c = options.color;
// } else {
// 	c = "black";
// }

// let w = options.width;
// let h = options.height;


// USE DESTRUCTURING

let { width: w, height: h, color: c = "black" } = options;

console.log(w);
console.log(h);
console.log(c);
let options = {
	color: "red",
	width: 400,
	height: 500,
};

// let c = options.color;
// let w = options.width;
// let h = options.height;


// Use Destructuring

let { color: c, width: w, height: h } = options;

console.log(c);
console.log(w);
console.log(h);
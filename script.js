
// Stores your currently available operations inside of an object
let operations = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"/": (a, b) => a / b,
	"*": (a, b) => a * b,
	"**": (a, b) => a ** b,
	"%": (a, b) => a % b,
	"invalid": (a, b) => 'Division by 0 is undefined'
};

// Create the behavior behind the calculator
function calculate() {
	// stores the first number entered's value in our JavaScript
	// while converting it to a decimal using parseFloat()
	let num1 = parseFloat(document.getElementById("num1").value);
	// stores the second number entered's value in our JavaScript
	// while converting it to a decimal using parseFloat()
	let num2 = parseFloat(document.getElementById("num2").value);
	// stores the mathematical operator we've selected from the dropdown menu
	let operator = document.getElementById("operator").value;

	// variable that will represent the result after it's been calculated
	let result;

	// checks if either num1 or num2 is anything other than a numerical value
	if (isNaN(num1) || isNaN(num2)) {
		// if either ARE anything other than acceptable numerical values
		// result will be the following string
		result = "Enter a valid number";
	} else {
		// otherwise, result assign itself to be whatever the two nums evaluate to with the selected operator

		if ((operator == "/" || operator == "%") && num2 == 0) {
			console.log('here')
			operator = 'invalid';
		}

		result = operations[operator](num1, num2);
	}


	// we then change that within our HTML using innerText
	document.getElementById("result").innerText = "Result: " + result;
}
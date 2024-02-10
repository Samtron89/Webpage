// Output function

function myFunction() {
	// math function generate numbers

	function generateRandomNumber() {
		return Math.floor(Math.random() * 12 + 1);
	}

	// variables

	let die1 = generateRandomNumber();
	let die2 = generateRandomNumber();
	let result;

	// If statements

	if (die1 === 7 || die1 === 11) {
		result = "You Lose!";
	} else if (die1 === die2 && die1 % 2 === 0) {
		result = "Winner Winner get your chicken dinner!";
	} else {
		result = "Roll again!";
	}

	// Output by innerHTML

	document.getElementById("result").innerHTML = result;
}

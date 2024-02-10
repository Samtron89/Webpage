// Palindrome function using a string//
function palindrome(str) {
	const reversestring = str.split("").reverse().join("");
	return reversestring === str;
}
// Main function for user input
function palindromeWord() {
	while (true) {
		let user = prompt("Please enter in your word:");
		if (user === null || user === "") {
			alert("Thank you! Come back anytime!");
			break; // Exits the Loop//
		}

		// To make sure string is a panlindrome//
		let Pal = palindrome(user);

		// Displays result to user//

		let msg = Pal ? "Surpise! Palindrome!" : "Sorry it's not a Palindrome.";
		alert(msg);

		// Continue input or exit//

		const result = confirm(" Do you wish to enter another word?");
		if (!result) {
			alert("Thank you for visiting my website!");
			break;
		}
	}
}

// Call function back with button//

document.getElementById("button").addEventListener("click", palindromeWord);

// Set Volume //
let audio = document.getElementById("myAudio");
audio.volume = 0.4;

// Audio Function//
function playAudio(){
	audio.play();
}
function pauseAudio(){
	audio.pause();
}
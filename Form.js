// Variables for form//
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const zipCode = document.getElementById('zipCode');
// Calls the form//
form.addEventListener('submit', e => {
	e.preventDefault();

	validateInputs();
});

const validateInputs = () => {
	const firstNameValue = firstName.value.trim();
	const lastNameValue = lastName.value.trim();
	const zipCodeValue = zipCode.value.trim();
	
	// Reuires User to input info//
	if ( firstNameValue === ''){
		SetError(firstName,'First name is required');
	} else {
		setSuccess(firstName);
	}
	if ( lastNameValue === '') {
		SetError(lastName,'Last name is required');
	} 
		else if ((firstNameValue + ' ' + lastNameValue).length> 20){
			SetError(lastName,'Name must be at least 20 characters.')
		}
	else {
		setSuccess(lastName);
	}
	if (zipCodeValue === ''){
		SetError(zipCode,'Zip code is required');
	} 
		else if ( zipCodeValue.length < 5){
			SetError (zipCode,"Invalid zip code");
		}
	else {
		setSuccess(zipCode);
	}
}
// Variables to display message//
const SetError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

const setSuccess = element => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');

	}




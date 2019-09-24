'use strict';

import validation from './validation';

function checkInputValue(input, label) {
	setErrorMessage(input, '');
	let {value} = input,
		valid = validation(label, value);
	
	if( !!valid ) {
		setErrorMessage(input, valid);
		return false;
	}
	return value;
}
function setErrorMessage(input, message) {
	input.error = message;
}

export default checkInputValue
'use strict';

/*** exports [begin] ***/

async function checkInputValueBySchema(input, schema) {
	await setErrorMessage(input, '');
	let {value} = input, valid = await schema(value);
	
	if( !!valid ) {
		await setErrorMessage(input, valid);
		return false;
	}
	return value;
}

/*** exports [end] ***/
/*** src [begin] ***/

async function setErrorMessage(input, message) {
	input.error = message;
}

/*** src [end] ***/

export default checkInputValueBySchema
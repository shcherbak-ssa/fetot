'use strict';

/*** imports [begin] ***/

import confirmEmailStore from '../store/confirm-email-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker({inputs, outputMessage}) {
	let input = inputs['confirm-email'];
	console.log('confirm-email', input);
	if( input.value.length < 6 ) return false;
	
	console.log('confirm-email value 1', input.value);
	if( /[^\d]+/i.test(input.value) ) {
		input.error = 'Invalid confirmation code';
		return false;
	}
	
	console.log('confirm-email value 2', input.value);
	let response = await outputMessage.set('code', input.value).send();
	return await parseServerResponse(input, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(input, {type, message}) {
	switch( type ) {
		case 'error':
			input.error = message.error;
			return false;
		case 'success':
			console.log('success', message);
			return true;
	}
}

/*** src [end] ***/

export default {
	store: confirmEmailStore,
	worker: confirmEmailModuleWorker
};
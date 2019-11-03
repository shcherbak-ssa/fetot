'use strict';

/*** imports [begin] ***/

import confirmEmailStore from '../store/confirm-email-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker({inputs, outputMessage}) {
	let input = inputs['confirm-email'];
	if( input.value.length < 6 ) return false;
	
	if( /[^\w]/i.test(value) ) {
		input.error = 'Invalid confirmation code';
		return false;
	}
	
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
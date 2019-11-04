'use strict';

/*** imports [begin] ***/

import confirmEmailStore from '../store/confirm-email-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker({inputs: {code}, outputMessage}) {
	if( code.value.length < 6 ) return false;
	
	if( !/\d{1,6}/.test(code.value) ) {
		code.error = 'Invalid confirmation code';
		return false;
	}
	
	let response = await outputMessage.set('code', code.value).send();
	return await parseServerResponse(code, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(input, {type, message}) {
	switch( type ) {
		case 'error':
			console.log(message);
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
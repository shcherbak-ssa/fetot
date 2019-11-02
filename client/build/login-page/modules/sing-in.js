'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services/store';
import OutputMessage from 'fetot-workers/output-message';

/*** imports [end] ***/
/*** exports [begin] ***/

async function singInModuleWorker() {
	let input = Store.inputs.email;
	
	if( input.value === '' ) return input.error = 'Current field cannot be empty';
	
	let outputMessage = new OutputMessage({type: 'worker'});
	outputMessage.set('email', input.value);
	
	let response = await outputMessage.send();
	await parseServerResponse(input, response);
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
			
	}
}

/*** src [end] ***/

export default {
	run: singInModuleWorker
};
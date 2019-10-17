'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** init [begin] ***/

const outputMessage = {
	content: {
		type: 'check-email',
		data: {}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function singInModuleWorker() {
	let inputs = storeWorker.getGlobalStore('inputs'),
		outputData = new Map();
	
	let email = inputs.get('email').value;
	outputData.set('email', email);
	
	outputMessage.content.data = Object.fromEntries(outputData.entries());
	let response = await fetchRequest.post({
		message: outputMessage
	});
	
	await parseServerResponse(inputs, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(inputs, {type, message}) {
	switch( type ) {
		case 'error':
			console.log('error', message);
			let email = inputs.get('email');
			
			email.error = '';
			email.error = message.error;
			break;
		case 'success':
			console.log('success', message);
	}
}

/*** src [end] ***/

export default singInModuleWorker;

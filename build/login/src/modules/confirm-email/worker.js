'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** init [begin] ***/

const outputMessage = {
	content: {
		type: 'check-code',
		data: {}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function confirmEmailModuleWorker() {
	let input = storeWorker.getGlobalStore('inputs').get('confirm-email'),
		{value} = input;
	
	if( value.length < 6 ) return;
	
	if( /[^\d]/.test(value) ) {
		input.error = 'Confirmation code can contain only the numbers';
		return;
	}
	
	outputMessage.content.data = {'confirm-code': value};
	let response = await fetchRequest.post({
		message: outputMessage
	});
	
	await parseServerResponse(response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse({type, message}) {
	switch( type ) {
		case 'error':
			console.log(message);
			break;
		case 'success':
			alert('Login success')
	}
}

/*** src [end] ***/

export default confirmEmailModuleWorker;
'use strict';

/*** imports [begin] ***/

import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/

const outputMessage = {
	content: {
		type: 'check-exist',
		data: {}
	}
};

/*** exports [begin] ***/

async function singInModuleWorker() {
	let inputs = storeWorker.getGlobalStore('inputs'),
		formData = new FormData();
	
	let email = inputs.get('email').value;
	formData.set('email', email);
	
	outputMessage.content.data = formData;
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

export default singInModuleWorker;

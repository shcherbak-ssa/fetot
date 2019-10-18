'use strict';

/*** imports [begin] ***/

import OutputDataWorker from 'fetot-worker-modules/output-data-worker';
import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** exports [begin] ***/

async function loginModuleWorker() {
	const inputs = storeWorker.getGlobalStore('inputs'),
		outputDataWorker = new OutputDataWorker('check-client');
	
	let email = inputs.get('email').value;
	outputDataWorker.set('email', email);
	
	let password = inputs.get('password').value;
	outputDataWorker.set('password', password);
	
	let response = await fetchRequest.post({
		message: outputDataWorker.getData()
	});
	
	await parseServerResponse(inputs, response);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(inputs, {type, message}) {
	switch( type ) {
		case 'error':
			console.log(message);
			inputs.get(message.input).error = message.error;
			break;
		case 'success':
			alert('Login success')
	}
}

/*** src [end] ***/

export default loginModuleWorker;
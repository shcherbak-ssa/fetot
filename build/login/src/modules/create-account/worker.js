'use strict';

/*** imports [begin] ***/

import OutputDataWorker from 'fetot-worker-modules/output-data-worker';
import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** exports [begin] ***/

async function createAccountModuleWorker() {
	const inputs = storeWorker.getGlobalStore('inputs'),
		outputDataWorker = new OutputDataWorker('create-account');
	
	let fullname = inputs.get('fullname').value;
	outputDataWorker.set('fullname', fullname);
	
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
			alert('Created success')
	}
}

/*** src [end] ***/

export default createAccountModuleWorker;
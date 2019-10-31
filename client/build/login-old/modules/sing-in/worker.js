'use strict';

/*** imports [begin] ***/

import EventsEmitter from 'fetot-js-modules/events-emitter';
import OutputDataWorker from 'fetot-worker-modules/output-data-worker';
import storeWorker from 'fetot-worker-modules/store-worker';
import fetchRequest from 'fetot-network-modules/fetch-request';

/*** imports [end] ***/
/*** exports [begin] ***/

async function singInModuleWorker() {
	let loginModeEventsEmitter = EventsEmitter.getEmitter('login-mode'),
		inputs = storeWorker.getGlobalStore('inputs'),
		outputDataWorker = new OutputDataWorker('check-email');
	
	let email = inputs.get('email').value;
	outputDataWorker.set('email', email);
	
	let response = await fetchRequest.post({
		message: outputDataWorker.getData()
	});
	
	await parseServerResponse(inputs, response, loginModeEventsEmitter);
}

/*** exports [end] ***/
/*** src [begin] ***/

async function parseServerResponse(inputs, {type, message}, loginModeEventsEmitter) {
	switch( type ) {
		case 'error':
			console.log('error', message);
			inputs.get('email').error = message.error;
			break;
		case 'success':
			console.log('success', message);
			loginModeEventsEmitter.emit('change-module');
	}
}

/*** src [end] ***/

export default singInModuleWorker;

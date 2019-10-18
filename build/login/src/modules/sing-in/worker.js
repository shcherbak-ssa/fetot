'use strict';

/*** imports [begin] ***/

import EventsEmitter from 'fetot-js-modules/events-emitter';
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
	let loginModeEventsEmitter = EventsEmitter.getEmitter('login-mode'),
		inputs = storeWorker.getGlobalStore('inputs'),
		outputData = new Map();
	
	let email = inputs.get('email').value;
	outputData.set('email', email);
	
	outputMessage.content.data = Object.fromEntries(outputData.entries());
	let response = await fetchRequest.post({
		message: outputMessage
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

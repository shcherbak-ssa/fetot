'use strict';

/*** imports [begin] ***/

const {responseEventEmitter} = require('../server-events-emitters');

/*** imports [end] ***/
/*** exports [begin] ***/

async function clientChangeModuleHandler(options) {
	let currentModule = options.message.type;
	await options.clientWorker.changeCurrentModule(currentModule);
	
	switch( options.responseModule ) {
		case 'http': return responseEventEmitter.emit('response-post-request', {
				label: 'success',
				response: options.response,
				message: { type: 'success' }
			});
		case 'ws': return responseEventEmitter.emit('response-web-socket', {
			socket: options.socket,
			message: { type: 'success' }
		});
	}
}

/*** exports [end] ***/

module.exports = clientChangeModuleHandler;
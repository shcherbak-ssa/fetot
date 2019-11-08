'use strict';

/*** imports [begin] ***/

import $localStorage from '../services/local-storage';
import OutputMessage from '../services/output-message';
import eventsEmitterWorker from '../events-emitter';

/*** imports [end] ***/
/*** exports [begin] ***/

function connectionRequest(responseHandler) {
	let client = $localStorage.item.has('client') ? $localStorage.item('client') : false;
	let {type, connection} = currentPageOptions;
	
	let outputMessage = new OutputMessage({messageType: 'connection', type});
	outputMessage.set('client', client).set('connection', connection);
	
	eventsEmitterWorker.getEmitter('fetot').emit('send-output-message', {
		outputMessage,
		handler: responseHandler
	})
}

/*** exports [end] ***/

export default connectionRequest;
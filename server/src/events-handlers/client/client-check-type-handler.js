'use strict';

/*** imports [begin] ***/

const {clientEventEmitter} = require('../../server-events-emitters'),
	ClientWorker = require('../../workers/client-worker');

/*** imports [end] ***/
/*** init [begin] ***/

const validMessageType = ['connection', 'message', 'change-mode', 'change-module'];

/*** init [end] ***/
/*** exports [begin] ***/

async function clientCheckTypeHandler(options) {
	if( !validMessageType.includes(options.message.type) )
		return Promise.reject(new Error('invalid message type'));
	
	let {message: {type, client, content}, clientIP} = options,
		clientWorker = await ClientWorker.controlClient(client, clientIP);
	
	if( !clientWorker ) return Promise.reject(new Error('invalid client id'));
	
	options.clientWorker = clientWorker;
	options.message = content;
	delete options.clientIP;
	
	clientEventEmitter.emit(`client-${type}`, options)
}

/*** exports [end] ***/

module.exports = clientCheckTypeHandler;
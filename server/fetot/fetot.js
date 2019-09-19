'use strict';

const FetotClient = require('./fetot-client'),
	FetotEventEmitter = require('./fetot-event-emitter'),
	
	fetotModes = require('./modes'),
	fetotModules = require('./modules'),
	
	checkInputMessage = require('./src/check-input-message'),
	checkClientID = require('./src/check-client-id');

async function runFetotApplication(WebSocketWorker, mongoWorker) {
	let fetotEventEmitter = new FetotEventEmitter();
	
	await WebSocketWorker.start(fetotEventEmitter);
	await FetotClient.init(mongoWorker, fetotModes, fetotModules);
	
	fetotEventEmitter.on('connection', async (webSocketWorker) => {
		await webSocketWorker.start(fetotEventEmitter)
	});
	fetotEventEmitter.on('message', async (message, socketWorker) => {
		await parseInputMessage({message, socketWorker});
	});
}
async function parseInputMessage(options) {
	try {
		options.message = await checkInputMessage(options);
		
		if( options.message.type === 'connection' )
			await connectClient(options);
		else
			await parseClientType(options)
		
	} catch( err ) {
		console.log(err);
		await options.socketWorker.close('Invalid message');
	}
}
async function connectClient(options) {
	let response = await FetotClient.connect(options);
	await options.socketWorker.sendMessage(response);
}
async function parseClientType({message: {clientID, type, message}, socketWorker}) {
	let isValidClientID = checkClientID(clientID, socketWorker);
	if( !isValidClientID ) throw new Error('Invalid client id');
	
	let currentClient = FetotClient.clients.get(clientID);
	
	switch( type ) {
		case 'message':
			currentClient.parseMessage(message);
			break;
		case 'change-mode':
			currentClient.changeMode(message);
			break;
		case 'change-module':
			currentClient.changeModule(message);
			break;
	}
}

module.exports = runFetotApplication;
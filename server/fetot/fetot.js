'use strict';

const FetotClient = require('./src/fetot-client'),
	FetotEventEmitter = require('./src/event-emitter'),
	
	fetotModes = require('./modes'),
	
	checkInputMessage = require('./src/check-input-message');

async function runFetotApplication(WebSocketWorker, mongoWorker) {
	let fetotEventEmitter = new FetotEventEmitter();
	
	/* need to remove [BEGIN]*/
	// let db = await mongoWorker.createDB('clients');
	// let isDrop = await db.collection('clients').drop();
	// console.log(isDrop);
	/* need to remove [END] */
	
	await WebSocketWorker.start(fetotEventEmitter);
	await FetotClient.init(mongoWorker, fetotModes);
	
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
			await parseMessageType(options)
		
	} catch( err ) {
		console.log(err);
		await options.socketWorker.close('Invalid message');
	}
}
async function connectClient(options) {
	let response = await FetotClient.connect(options);
	await options.socketWorker.sendMessage(response);
}
async function parseMessageType({message: {clientID, type, message}, socketWorker}) {
	let isValidClientID = await FetotClient.checkID(clientID, socketWorker);
	if( !isValidClientID ) throw new Error('Invalid client id');
	
	let currentClient = FetotClient.clients.get(clientID);
	
	switch( type ) {
		case 'message':
			await currentClient.run(message);
			break;
		case 'change-mode':
			await currentClient.setCurrentMode(message);
			break;
	}
}

module.exports = runFetotApplication;
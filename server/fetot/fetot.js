'use strict';

const FetotClient = require('./fetot-client'),
	FetotEventEmitter = require('./fetot-event-emitter'),
	
	fetotModes = require('./modes'),
	fetotModules = require('./modules'),
	
	checkInputMessage = require('./src/check-input-message');

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
		let message = await checkInputMessage(options.message);
		
		if( message.type === 'connection' )
			await connectClient(options);
		else
			await checkClientType(options.message)
		
	} catch( err ) {
		console.log(err);
		await options.socketWorker.close('Invalid message');
	}
}
async function connectClient({message, socketWorker}) {
	let answer = await FetotClient.connect({message, socketWorker});
	await socketWorker.sendMessage(answer);
}
async function checkClientType({clientID, type, message}) {
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
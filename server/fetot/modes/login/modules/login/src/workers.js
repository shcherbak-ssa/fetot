'use strict';

async function loginWorker({email, password}, currentModule) {
	try {
		let currentClient = currentModule.mongoCollection.findDocument({email});
		if( !currentClient ) return currentModule.sendMessage('error');
		
		let messageLabel = password === currentClient.password ? 'success' : 'error';
		currentModule.sendMessage(messageLabel);
	} catch( err ) {
		throw err;
	}
}

module.exports = {
	'login': loginWorker
};
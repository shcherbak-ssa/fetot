'use strict';

async function loginWorker({email, password}, currentModule) {
	try {
		let currentClient = await currentModule.mongoCollection.findDocument({email});
		if( !currentClient ) return await currentModule.sendMessage('error');
		
		let messageLabel = password === currentClient.password ? 'success' : 'error';
		await currentModule.sendMessage(messageLabel);
	} catch( err ) {
		throw err;
	}
}

module.exports = {
	'login': loginWorker
};
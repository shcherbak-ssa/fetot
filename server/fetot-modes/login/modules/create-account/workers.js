'use strict';

/*** exports [begin] ***/

async function createAccountWorker({message, mongodb, events, config, store, response}) {
	let email = store.get('current-client-email'),
		{fullname, password} = message;
	
	let info = await mongodb.insertDocument({email, password, fullname});
	events.emit('response-post-request', config.response.success(response));
	
	console.log('new client:\n', info);
}

/*** exports [end] ***/

module.exports = {
	'create-account': createAccountWorker
};
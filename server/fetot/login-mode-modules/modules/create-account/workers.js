'use strict';

/*** exports [begin] ***/

async function createAccountWorker({message, mongodb, events, config, store, response}) {
	/* DRAFT [begin] */
	
	
	
	/* DRAFT [end] */
	
	let email = store.get('current-client-email'), {fullname, password} = message,
		document = await mongodb.insertDocument({email, password, config: {fullname}});
	
	console.log('new client', document);
	events.emit('response-post-request', config.response.success(response));
}

/*** exports [end] ***/

module.exports = {
	'create-account': createAccountWorker
};
'use strict';

/*** imports [begin] ***/

const config = require('./config');

/*** imports [end] ***/
/*** exports [begin] ***/

async function loginModuleWorker({store, mongodb, message, response}) {
	let enterCount = store.get('enter-count');
	if( enterCount === undefined ) enterCount = 0;
	
	if( enterCount === 7 ) return await response(config.responseOptions['many-enter-count']);
	store.set('enter-count', enterCount + 1);
	
	let document = await mongodb.findDocument(message);
	if( !document ) return events.emit('response-post-request', config.response['not-exist'](response));
	
	events.emit('response-post-request', config.response.success(response));
}

/*** exports [end] ***/

module.exports = {
	'check-client': checkClientWorker
};
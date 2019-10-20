'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** exports [begin] ***/

async function checkClientWorker({message, mongodb, events, config, store, response}) {
	let enterCount = store.get('enter-count');
	if( enterCount === undefined ) enterCount = 0;
	
	if( enterCount === 7 ) return events.emit('response-post-request', config.response['many-enter-count'](response));
	store.set('enter-count', enterCount + 1);
	
	let document = await mongodb.findDocument(message);
	if( !document ) return events.emit('response-post-request', config.response['not-exist'](response));
	
	events.emit('response-post-request', config.response.success(response, {id: document._id}));
}

/*** exports [end] ***/

module.exports = {
	'check-client': checkClientWorker
};
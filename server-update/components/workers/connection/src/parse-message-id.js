'use strict';

/*** exports [begin] ***/

async function parseMessageID(id) {
	id = id.split('');
	
	let page = id.pop() === 'l' ? 'login' : 'app',
		position = page === 'app' ? id.pop() : undefined;
	
	return { page, position, id: id.join('') }
}

/*** exports [end] ***/

module.exports = parseMessageID;
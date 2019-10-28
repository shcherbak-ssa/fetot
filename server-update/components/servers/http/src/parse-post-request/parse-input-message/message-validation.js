'use strict';

/*** exports [begin] ***/

async function messageValidation(message, headers) {
	switch( headers['content-type'] ) {
		case 'application/json':
			return JSON.parse(message);
		default:
			return Promise.reject('unknown message type');
	}
}

/*** exports [end] ***/

module.exports = messageValidation;
'use strict';

const validInputMessage = {
	keys: {
		clientID: 'number',
		type: 'string',
		message: 'object'
	},
	type: [ 'connection', 'message' ],
	message: [ 'type' ]
};

module.exports = new Map(Object.entries(validInputMessage));
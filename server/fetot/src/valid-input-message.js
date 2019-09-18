'use strict';

const validInputMessage = {
	keys: [ 'clientID', 'type', 'message' ],
	type: [ 'connection', 'message' ],
	message: [ 'event' ]
};

module.exports = new Map(Object.entries(validInputMessage));
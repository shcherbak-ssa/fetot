'use strict';

/*** this is version for testing server ***/
function createClientID() {
	let clientID = new Date();
	clientID = clientID.getMilliseconds();
	
	return clientID;
}

module.exports = createClientID;
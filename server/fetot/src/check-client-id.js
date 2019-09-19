'use strict';

async function checkClientID(clientID, {socketClientID}) {
	return clientID === socketClientID;
}

module.exports = checkClientID;
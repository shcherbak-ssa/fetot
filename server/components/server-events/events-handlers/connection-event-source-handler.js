'use strict';

/*** exports [begin] ***/

async function connectionEventSourceHandler(url, response) {
	let [, clientID] = url.split('.');
	console.log(clientID);
}

/*** exports [end] ***/

module.exports = connectionEventSourceHandler;
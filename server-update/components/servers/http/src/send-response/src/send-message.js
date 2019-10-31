'use strict';

/*** init [begin] ***/

const responseHeaders = {
	'Content-Type': 'application/json'
};

/*** init [end] ***/
/*** exports [begin] ***/

async function sendMessage(message, response) {
	response.writeHead(200, responseHeaders);
	response.write(JSON.stringify(message));
	response.end()
}

/*** exports [end] ***/

module.exports = sendMessage;
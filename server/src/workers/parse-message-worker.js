'use strict';

/*** export [begin] ***/

async function parseMessageWorker(options) {
	switch( options.type ) {
		case 'post-message':
			return await parsePostMessage(options);
		case 'ws-message':
			return await parseWebSocketMessage(options);
	}
}

/*** export [end] ***/

async function parsePostMessage({request}) {
	return new Promise((success, error) => {
		let message = '';
		request
			.on('data', (data) => {
				message += data.toString();
			})
			.on('end', () => {
				success( JSON.parse(message) );
			})
	})
}
async function parseWebSocketMessage({message}) {
	return JSON.parse(message);
}

module.exports = parseMessageWorker;
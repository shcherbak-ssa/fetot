'use strict';

/*** exports [begin] ***/

async function sendOutputMessageEventHandler({outputMessage, handler}) {
	let response = await outputMessage.send();
	await handler(response);
}

/*** exports [end] ***/

export default sendOutputMessageEventHandler;
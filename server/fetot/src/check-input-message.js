'use strict';

const validInputMassage = require('./valid-input-message');

async function checkInputMessage(message) {
	if( /[\0]/.test(message) ) throw new Error('Invalid symbol \'\\0\'');
	
	message = await JSON.parse(message);
	let messageMap = new Map(Object.entries(message));
	
	if( messageMap.size !== 3 ) throw new Error('Invalid count of message keys');
	
	await checkMessageKeys(messageMap.keys());
	await checkMessageType(messageMap.get('type'));
	
	return await Object.fromEntries(messageMap.entries());
}
function checkMessageKeys(keys) {
	let validKeys = validInputMassage.get('keys'),
		keysCount = 0;
	
	for( let key of keys ) if( validKeys.includes(key) ) keysCount += 1;
	
	if( keysCount !== 3 ) throw new Error('Invalid key');
}
function checkMessageType(messageType) {
	let validTypes = validInputMassage.get('type');
	if( !validTypes.includes(messageType) ) throw new Error('Invalid message type')
}

module.exports = checkInputMessage;
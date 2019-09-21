'use strict';

const validInputMassage = require('./valid-input-message');

async function checkInputMessage({message}) {
	if( /[\0]/.test(message) ) throw new Error('Invalid symbol \'\\0\'');
	
	message = await JSON.parse(message);
	let messageMap = new Map(Object.entries(message));
	
	if( messageMap.size !== 3 ) throw new Error('Invalid count of message keys');
	
	await checkKeys(messageMap.entries());
	await checkType(messageMap.get('type'));
	
	return await Object.fromEntries(messageMap.entries());
}
function checkKeys(keys) {
	let validKeys = validInputMassage.get('keys');
	
	for( let [key, value] of keys ) {
		if( key in validKeys && typeof value === validKeys[key]) continue;
		else throw new Error('Invalid key');
	}
}
function checkType(messageType) {
	let validTypes = validInputMassage.get('type');
	if( !validTypes.includes(messageType) ) throw new Error('Invalid message type')
}

module.exports = checkInputMessage;
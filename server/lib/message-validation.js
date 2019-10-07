'use strict';

const validMessageType = ['message', 'change-mode', 'change-module'],
	validMessage = {
		type: String,
		client: Number, // need to think
		message: Object
	},
	validMessageObject = {
		type: String,
		data: Object
	};

/*** exports [begin] ***/

async function messageValidation(message) {
	message = new Map(Object.entries(message));
	
	let valid = await validation(generatorMessageValidation(message));
	return valid ? Object.fromEntries(message) : false;
}

/*** exports [end] ***/

async function validation(generator) {
	let {value, done} = generator.next();
	
	if( done ) return true;
	return value ? validation(generator) : false;
}
async function* generatorMessageValidation(message) {
	if( message.size !== 3 ) yield false;
	
	yield await checkObject(message, validMessage);
	
	let messageObject = new Map(Object.entries(message.get('message')));
	yield await checkObject(messageObject, validMessageObject);
	
	yield await checkValidTypeValue(message.get('type'));
}
async function checkObject(messageObject, validObject) {
	for( let [key, value] of messageObject.entries() ) {
		if( validObject.has(key) ) {
			let valid = await checkValueType(value, validObject.get(key));
			if( !valid ) return false;
		} else return false;
	}
	return true;
}
async function checkValueType(messageValue, validValue) {
	return typeof messageValue === typeof validValue()
}
async function checkValidTypeValue(messageType) {
	return validMessageType.includes(messageType)
}

module.exports = messageValidation;
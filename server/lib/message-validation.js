'use strict';

const validMessageType = ['connection', 'message', 'change-mode', 'change-module'],
	validMessage = {
		type: String,
		client: Number, // need to think
		content: Object
	},
	validMessageContent = {
		type: String,
		data: Object
	};

/*** exports [begin] ***/

async function messageValidation(message) {
	let messageMap = new Map(Object.entries(message)),
		valid = await validation(generatorMessageValidation(messageMap));
	
	return valid ? message : false;
}

/*** exports [end] ***/

async function validation(generator) {
	let {value, done} = generator.next();
	
	if( done ) return value;
	return value ? validation(generator) : false;
}
async function* generatorMessageValidation(message) {
	if( message.size !== 3 ) yield false;
	
	yield await checkObject(message, validMessage);
	
	let messageContent = new Map(Object.entries(message.get('content')));
	yield await checkObject(messageContent, validMessageContent);
	
	return await checkValidTypeValue(message.get('type'));
}
async function checkObject(messageObject, validObject) {
	try {
		messageObject.entries().map(async ([key, value]) => {
			if( !validObject.has(key) ) throw 0;
			
			let valid = await checkValueType(value, validObject.get(key));
			if( !valid ) throw 0;
		});
		return true;
	} catch( e ) {
		console.log(e);
		return false;
	}
}
async function checkValueType(messageValue, validValue) {
	return typeof messageValue === typeof validValue()
}
async function checkValidTypeValue(messageType) {
	return validMessageType.includes(messageType)
}

module.exports = messageValidation;
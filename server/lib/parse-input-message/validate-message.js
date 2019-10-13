'use strict';

/*** init [begin] ***/

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

/*** init [end] ***/
/*** exports [begin] ***/

async function validateMessage(message) {
	let messageMap = Object.entries(message),
		valid = await validation(generatorMessageValidation(messageMap));
	
	return valid ? message : false;
}

/*** exports [end] ***/
/*** src [begin] ***/

async function validation(generator) {
	try {
		let {value, done} = await generator.next();
		
		if( done ) return value;
		return value ? validation(generator) : false;
	} catch( err ) {
		console.log(err);
		return false;
	}
}
async function* generatorMessageValidation(message) {
	if( message.length !== 3 ) return Promise.reject();
	
	yield await checkObject(message, validMessage);
	
	let messageContent = Object.entries(message[2][1]);
	yield await checkObject(messageContent, validMessageContent);
	
	return checkValidTypeValue(message[0][1]);
}
async function checkObject(message, validMessage) {
	return Promise.all(message.map(([key, value]) => {
		if( key in validMessage ) {
			let valid = checkValueType(value, validMessage[key]);
			if( !valid ) return Promise.reject(new Error('invalid value type'));
		} else return Promise.reject(new Error('invalid key'));
	}))
}

function checkValueType(messageValue, validValue) {
	return typeof messageValue === typeof validValue()
}
function checkValidTypeValue(messageType) {
	return validMessageType.includes(messageType)
}

/*** src [end] ***/

module.exports = validateMessage;
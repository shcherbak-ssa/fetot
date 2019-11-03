'use strict';

/*** init [begin] ***/

const config = {
	response: {
		'invalid-code': {
			type: 'error',
			message: {
				error: 'Invalid confirmation code'
			}
		},
		'success': {
			type: 'success',
			message: {}
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const schema = {
	code: {
		type: String,
		required: true,
		validate(value) {
			return value.length === 6 && /\d{1,6}/.test(value)
		},
		error: {
			input: 'confirm-email',
			error: 'Invalid confirmation code'
		}
	}
};

async function confirmEmailWorker({message, store, response}) {
	let confirmEmailCode = store.get('confirm-email-code');
	let responseLabel = message.code === confirmEmailCode ? 'success' : 'invalid-code';
	
	await response(config.response[responseLabel]);
}

/*** exports [end] ***/

module.exports = { schema, worker: confirmEmailWorker };
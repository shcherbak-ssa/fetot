'use strict';

/*** imports [begin] ***/

const validation = require('../../../services/validation');

/*** imports [end] ***/
/*** init [begin] ***/

const inputMessageSchema = {
	id: {
		type: String
	},
	type: {
		type: String,
		required: true,
		enum: ['connection', 'close', 'client', 'mode', 'module']
	},
	content: {
		properties: {
			type: {
				type: String,
			},
			data: {}
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function messageValidation(message) {
	let errors = await validation(inputMessageSchema, message);
	return errors[0] ? errors : false;
}

/*** exports [end] ***/
/*** src [begin] ***/
/*** src [end] ***/

module.exports = messageValidation;
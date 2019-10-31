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
		enum: ['connection', 'close', 'message']
	},
	content: {}
};
const inputMessageContentSchema = {
	type: {
		type: String,
	},
	data: {
		properties: {
		
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

async function messageValidation(message) {
	inputMessageSchema.content = await validation.createSchema(inputMessageContentSchema);

	let schema = await validation.createSchema(inputMessageSchema);
	let errors = await validation.validate(schema, message);
	
	return errors[0] ? errors : false;
}

/*** exports [end] ***/

module.exports = messageValidation;
'use strict';

/*** imports [begin] ***/

const validationService = require('../../../services/validation');

/*** imports [end] ***/
/*** init [begin] ***/

const inputMessageSchema = {
	id: {
		type: String
	},
	type: {
		type: String,
		required: true,
		valid: ['connection', 'close', 'message']
	},
	content: {
		__props: {
			type: {
				type: String,
			},
			data: {
				type: Object
			}
		}
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

function messageValidation() {
	return validationService(inputMessageSchema);
}

/*** exports [end] ***/

module.exports = messageValidation();
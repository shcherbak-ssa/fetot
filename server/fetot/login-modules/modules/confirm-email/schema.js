'use strict';

/*** exports [begin] ***/

const schema = {
	code: {
		checkEmpty: true,
		type: String,
		validate(value) {
			return value.length === 6 && /\d{1,6}/.test(value)
		},
		error: {
			input: 'confirm-email',
			error: 'Invalid confirmation code'
		}
	},
	__length: 1
};

/*** exports [end] ***/

module.exports = schema;
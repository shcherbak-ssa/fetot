'use strict';

/*** exports [begin] ***/

const commonSchemas = {
	email: {
		type: String,
		required: true,
		validate(value) {
			return /^[^@\s]+@(gmail|mail)\.(com|ru)$/i.test(value)
		},
		error: {
			input: 'email',
			error: 'Invalid email'
		}
	},
	password: {
		type: String,
		required: true,
		validate(value) {
			return value.length >= 8
		},
		error: {
			input: 'password',
			error: 'Password cannot be under 8 symbols'
		}
	}
};

/*** exports [end] ***/

module.exports = commonSchemas;
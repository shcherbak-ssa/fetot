'use strict';

/*** exports [begin] ***/

const validationSchema = {
	email: {
		checkEmpty: true,
		type: String,
		validate(value) {
			return /^[^@\s]+@(gmail|mail)\.(com|ru)$/i.test(value)
		},
		error: {
			input: 'email',
			error: 'Invalid email'
		}
	},
	password: {
		checkEmpty: true,
		type: String,
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

module.exports = validationSchema;
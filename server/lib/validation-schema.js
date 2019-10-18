'use strict';

/*** exports [begin] ***/

const validationSchema = {
	email: {
		type: String,
		validate(value) {
			return /^[^@\s]+@(gmail|mail)\.(com|ru)/i.test(value)
		},
		error: {
			type: 'error',
			message: {
				input: 'email',
				error: 'Invalid email'
			}
		}
	},
	password: {
		type: String,
		validate(value) {
			return value.length >= 8
		},
		error: {
			type: 'error',
			message: {
				input: 'password',
				error: 'Password cannot be under 8 symbols'
			}
		}
	}
};

/*** exports [end] ***/

module.exports = validationSchema;
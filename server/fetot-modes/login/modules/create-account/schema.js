'use strict';

/*** imports [begin] ***/

const validationSchema = require('../../../../lib/validation-schema');

/*** imports [end] ***/
/*** exports [begin] ***/

const schema = {
	email: validationSchema.email,
	password: validationSchema.password,
	fullname: {
		type: String,
		validate(value) {
			return /[\da-z ]/i.test(value)
		},
		error: {
			type: 'error',
			message: {
				input: 'fullname',
				error: 'Invalid full name'
			}
		}
	},
	__length: 3
};

/*** exports [end] ***/

module.exports = schema;
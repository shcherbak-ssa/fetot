'use strict';

/*** imports [begin] ***/

const validationSchema = require('../../../../lib/validation-schema');

/*** imports [end] ***/
/*** exports [begin] ***/

const schema = {
	password: validationSchema.password,
	fullname: {
		checkEmpty: true,
		type: String,
		validate(value) {
			return /[\da-z ]/i.test(value)
		},
		error: {
			input: 'fullname',
			error: 'Invalid full name'
		}
	},
	__length: 2
};

/*** exports [end] ***/

module.exports = schema;
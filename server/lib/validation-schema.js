'use strict';

/*** exports [begin] ***/

const validationSchema = {
	email: {
		type: String,
		validate(value) {
			return /[^\s@]+@(gmail|mail)\.(com|ru)]/.test(value)
		}
	},
	password: {
		type: String,
		validate(value) {
			return value.length >= 8
		}
	}
};

/*** exports [end] ***/

module.exports = validationSchema;
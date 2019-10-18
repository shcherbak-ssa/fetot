'use strict';

/*** exports [begin] ***/

const schema = {
	code: {
		type: String,
		validate(value) {
			return value.length === 6 && /\d{1,6}/.test(value)
		},
		error: {
			type: 'error',
			message: {
				error: 'Invalid confirmation code'
			}
		}
	},
	__length: 1
};

/*** exports [end] ***/

module.exports = schema;
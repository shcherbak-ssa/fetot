'use strict';

const schema = {
	email: {
		type: String,
		validation(value) {
			return /[^\s@]+@(gmail)\.(com)/.test(value) || 'invalid-email'
		}
	},
	password: {
		type: String,
		validation(value) {
			return value.length > 8 || 'invalid-email'
		}
	}
};

module.exports = schema;
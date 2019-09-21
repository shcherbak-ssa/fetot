'use strict';

const schema = {
	email: {
		type: String,
		validation(value) {
			return /[^\s@]+@(gmail)\.(com)/.test(value) || 'invalid-email'
		}
	}
};

module.exports = schema;
'use strict';

const schema = {
	email: {
		type: String,
		validation(value) {
			return /[^\s@]+@(gmail)\.(com)/.test(value) || 'invalid-email'
		}
	},
	fullname: {
		type: String,
		validation(value) {
			return /[^a-z ]/i.test(value) || 'invalid-fullname'
		}
	},
	password: {
		type: String,
		validation(value) {
			return value.length >= 8 || 'invalid-password'
		}
	}
};

module.exports = schema;
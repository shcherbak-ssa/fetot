'use strict';

/*** imports [begin] ***/

const getTrueValueTypeof = require('../src/get-true-value-typeof');

/*** imports [end] ***/
/*** exports [begin] ***/

class Schema {
	constructor(schema) {
		this.schema = schema;
	}
	
	/* public */
	[Symbol.toStringTag] = 'Schema';
	
	async validate(object) {
		return await this._parse(object)
	}
	
	/* privet */
	async _parse(object) {
		return Promise.all(Object.entries(object).map(this._parseItem.bind(this)));
	}
	async _parseItem([key, value]) {
		if( !(key in this.schema) ) return Promise.reject(`unknown key: ${key}`);
		
		let s = this.schema[key]; // current schema item
		if( getTrueValueTypeof(s) === 'Schema' && getTrueValueTypeof(value) === 'Object' ) // control nesting
			return s.validate(value);
		
		if( s.required && (value === null || value === '') )
			return Promise.reject(rejectMessage({key: key, error: 'cannot be empty'}));
		
		if( (getTrueValueTypeof(value) !== getTrueValueTypeof(s.type()))
				|| (s.valid && !s.valid.includes(value))
				|| (s.validate && !s.validate(value))
		) {
			return Promise.reject(s.error ? rejectMessage(s.error) : null);
		}
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

function rejectMessage(error) {
	return {
		message: {
			type: 'error',
			message: error
		}
	}
}

/*** src [end] ***/

module.exports = Schema;
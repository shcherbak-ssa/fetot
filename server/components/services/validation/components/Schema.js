'use strict';

/*** imports [begin] ***/

const getTrueValueTypeof = require('../src/get-true-value-typeof');

/*** imports [end] ***/
/*** exports [begin] ***/

class Schema {
	constructor(schema) {
		this.schema = schema;
	}
	
	[Symbol.toStringTag] = 'Schema';
	
	async validate(object) {
		return await this._parse(object)
	}
	
	async _parse(object) {
		return Promise.all(Object.entries(object).map(this._parseItem.bind(this)));
	}
	async _parseItem([key, value]) {
		if( !(key in this.schema) ) return Promise.reject('unknown key');
		
		let s = this.schema[key]; // current schema item
		if( getTrueValueTypeof(s) === 'Schema' && getTrueValueTypeof(value) === 'Object' ) // control nesting
			return s.validate(value);
		
		if( s.required && (value === null || value === '') )
			return Promise.reject({message: {key: key, message: 'cannot be empty'}});
		
		if( (getTrueValueTypeof(value) !== s.type)
				|| (s.valid && !s.valid.includes(value))
				|| (s.validate && !s.validate(value))
		) {
			return Promise.reject(s.error ? {message: s.error} : null);
		}
	}
}

/*** exports [end] ***/

module.exports = Schema;
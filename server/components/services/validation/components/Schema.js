'use strict';

/*** imports [begin] ***/

const transformInputObject = require('./transform-input-object');

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class Schema {
	constructor(schema) {
		this.schema = schema;
	}
	
	async validate(object) {
		object = await transformInputObject(object);
		return await this._parse(object)
	}
	async _parse(object) {
		return Promise.all(object.map(this._parseItem));
	}
	async _parseItem([key, value]) {
		if( !(key in this.schema) ) return reject('unknown key');
		
		if( value instanceof Array ) return await this._parse(value);
		
		let s = this.schema[key]; // current schema
		switch( true ) {
			case s.required !== value.required:
				return reject({key: key, error: 'cannot be empty'});
				
			case value.type !== s.type:
			case s.valid && !s.valid.include(value.value):
			case s.validate && !s.validate(value.value):
				return reject(s.error);
		}
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

function reject(err) {
	return Promise.reject(err);
}

/*** src [end] ***/

module.exports = Schema;
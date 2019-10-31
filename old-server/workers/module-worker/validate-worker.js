'use strict';

/*** exports [begin] ***/

async function validateWorker(validSchema, message) {
	let messageMap = Object.entries(message);
	if( messageMap.length !== validSchema.__length ) return Promise.reject({});
	
	return Promise.all(messageMap.map(([key, value]) => {
		if( key in validSchema ) {
			let schema = validSchema[key];
			
			if( schema.checkEmpty && !value )
				return Promise.reject({input: key, error: 'Current field cannot be empty'});
			
			if( typeof value !== typeof schema.type() || !schema.validate(value) )
				return Promise.reject(schema.error);
			
		} else {
			console.log(new Error('invalid key'));
			return Promise.reject({});
		}
	}))
}

/*** exports [end] ***/

module.exports = validateWorker;
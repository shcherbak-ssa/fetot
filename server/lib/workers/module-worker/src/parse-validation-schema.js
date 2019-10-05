'use strict';

function parseValidationSchema(schema) {
	let size = getSchemaSize(schema);
	
	return new Proxy(schema, {
		get(target, property) {
			if( property === 'size' ) return size;
			
			if( !(property in target) ) return () => 'Invalid message key';
			
			return (value) => {
				let {type, validation} = target[property];
				return (typeof value !== typeof type) ? false : validation(value);
			}
		}
	})
}
function getSchemaSize(schema) {
	let size = 0;
	for( let key of Object.keys(schema) ) size += 1;
	
	return size;
}

module.exports = parseValidationSchema;
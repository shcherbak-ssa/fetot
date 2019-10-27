'use strict';

/*** exports [begin] ***/

function createObject(object, name) {
	if( !this.map.has(name) )
		this.map.set(name, object);
	
	return this.map.get(name)
}
function deleteObject(name) {
	if( this.map.has(name) ) this.map.delete(name)
}

/*** exports [end] ***/

export default {
	create: createObject,
	delete: deleteObject
};
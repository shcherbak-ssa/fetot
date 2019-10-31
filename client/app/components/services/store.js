'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

const storeCollections = new Map();

function collection(name) {
	return storeCollections.get(name);
}

collection.create = createCollection;
collection.remove = removeCollection;
collection.exist = existCollection;

/*** init [end] ***/
/*** exports [begin] ***/

const Store = new Proxy({collection}, {
	get(target, prop) {
		if( prop === 'collection' ) return target.collection;
		return storeCollections.get(prop);
	}
});

/*** exports [end] ***/
/*** src [begin] ***/

function createCollection(name, object = {}) {
	object = extendObject(object);
	storeCollections.set(name, object);
	
	return object;
}
function removeCollection(name) {
	storeCollections.delete(name)
}
function existCollection(name) {
	return storeCollections.has(name);
}

// extend function
function extendObject(object) {
	return Object.assign(object, {
		get(key) {
			return this[key]
		},
		set(key, value) {
			this[key] = value;
		}
	})
}

/*** src [end] ***/

export default Store;
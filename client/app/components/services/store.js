'use strict';

/*** init [begin] ***/

const storeCollections = new Map();

function collection(name) {
	return storeCollections.get(name);
}

collection.create = createCollection;
collection.update = updateCollection;
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

// collection functions
function createCollection(name) {
	let object = extendObject();
	storeCollections.set(name, object);
	
	return object;
}
function updateCollection(name, object) {
	storeCollections.delete(name);
	
	object = Object.assign(extendObject(), object);
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
function extendObject() {
	return Object.assign({}, {
		get(key) {
			return this[key]
		},
		set(key, value) {
			if( typeof key === 'object' ) {
				let self = this;
				Object.entries(key).forEach((item) => {
					self.set(...item)
				});
			} else this[key] = value;
			
			return this;
		},
		delete(key) {
			if( key in this ) delete this[key];
		},
		has(key) {
			return key in this;
		}
	})
}

/*** src [end] ***/

export default Store;
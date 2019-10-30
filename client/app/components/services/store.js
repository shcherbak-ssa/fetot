'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

const storeCollections = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

function collection(name) {
	return storeCollections.get(name);
}

collection.create = '';
collection.remove = '';
collection.exist = '';

/*** exports [end] ***/
/*** src [begin] ***/

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

export default { collection };
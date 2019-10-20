'use strict';

/*** init [begin] ***/

const globalStore = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

function appendGlobalStore(name, store) {
	globalStore.set(name, createLocalStore(store));
}
function getGlobalStore(name) {
	return globalStore.get(name);
}

function createLocalStore(store) {
	return Object.assign(store, {
		get(key) {
			return this[key]
		},
		set(key, value) {
			this[key] = value
		}
	})
}

/*** exports [begin] ***/

export default {
	appendGlobalStore,
	getGlobalStore,
	createLocalStore
}
'use strict';

const globalStore = new Map();

/*** exports [begin] ***/

function appendGlobalStore(name, store) {
	globalStore.set(name, createLocalStore(store));
}
function getGlobalStore(name) {
	return globalStore.get(name);
}

function createLocalStore(store) {
	return new Proxy(store, {
		get(target, prop, receiver) {
			switch( prop ) {
				case 'get': return (key) => {
					return Reflect.get(target, key, receiver)
				};
				case 'set': return (key, value) => {
					return Reflect.set(target, key, value, receiver)
				};
			}
		}
	})
}

/*** exports [begin] ***/

export default { appendGlobalStore, getGlobalStore, createLocalStore };
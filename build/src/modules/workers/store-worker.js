'use strict';

/*** exports [begin] ***/

const globalStore = new Map();

async function appendGlobalStore(name, store) {
	globalStore.set(name, new Map( Object.entries(store) ));
}
async function getGlobalStore(name) {
	return globalStore.get(name);
}

async function createLocalStore(store) {
	const retStore = new Map();
	
	Object.entries(store).map(([key, value]) => {
		if( typeof value === 'object' )
			value = new Map( Object.entries(value) );
		
		retStore.set(key, value)
	});
	
	return retStore;
}

/*** exports [begin] ***/

export default {
	appendGlobalStore,
	getGlobalStore,
	createLocalStore
};
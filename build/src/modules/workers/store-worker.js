'use strict';

/*** exports [begin] ***/

const globalStore = new Map();

async function initStore(store) {
	Object.entries(store).map(([key, value]) => {
		if( typeof value === 'object' )
			value = new Map( Object.entries(value) );
		
		globalStore.set(key, value)
	});
	
	return globalStore;
}

/*** exports [begin] ***/

export default {
	init: initStore
};
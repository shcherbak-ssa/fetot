'use strict';

/*** exports [begin] ***/

async function initStore(store) {
	store = Object.entries(store).map(([key, value]) => {
		if( typeof value === 'object' ) {
			value = Object.entries(value);
			return [key, new Map(value)]
		}
	});
	
	console.log('init store');
	return new Map(store);
}

/*** exports [begin] ***/

export default {
	init: initStore
};
'use strict';

/*** init [begin] ***/

const appLinksIDCollection = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

const appLinkIdWorker = {
	get({email, password}) {
		return appLinksIDCollection.get(email + password);
	},
	set({email, password}, id) {
		appLinksIDCollection.set(email + password, id);
	},
	remove(id) {
		for( let [key, val] of appLinksIDCollection.entries() )
			if( val === id ) return appLinksIDCollection.delete(key);
	},
	// for testing
	showCollection() {
		console.log('app link id collection', appLinksIDCollection.entries());
	}
};

/*** exports [end] ***/

module.exports = appLinkIdWorker;
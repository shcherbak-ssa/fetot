'use strict';

/*** init [begin] ***/

const appLinksIDCollection = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

const appLinkIdWorker = {
	get(client) {
		return appLinksIDCollection.get(client);
	},
	set(client, id) {
		appLinksIDCollection.set(client, id);
	},
	remove(id) {
		for( let [key, val] of appLinksIDCollection.entries() ) {
			if( val === id ) return appLinksIDCollection.delete(key);
		}
	},
	// for testing
	showCollection() {
		console.log('app link id collection', appLinksIDCollection.entries());
	}
};

/*** exports [end] ***/

module.exports = appLinkIdWorker;
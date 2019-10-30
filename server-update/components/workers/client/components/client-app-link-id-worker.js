'use strict';

/*** init [begin] ***/

const appLinksIDCollection = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

const clientAppLinkIDWorker = {
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
	}
};

/*** exports [end] ***/

module.exports = clientAppLinkIDWorker;
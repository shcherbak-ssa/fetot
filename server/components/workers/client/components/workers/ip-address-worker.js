'use strict';

/*** exports [begin] ***/

const ipAddressWorker = {
	collection: new Map(),
	set(id, ip) {
		this.collection.set(id, ip);
	},
	isCorrect(id, ip) {
		return this.collection.get(id) === ip;
	},
	remove(id) {
		this.collection.delete(id);
	},
	// for testing
	showCollection() {
		console.log('ip address collection', this.collection.entries());
	}
};

/*** exports [end] ***/

module.exports = ipAddressWorker;
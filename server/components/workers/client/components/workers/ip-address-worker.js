'use strict';

/*** exports [begin] ***/

const ipAddressWorker = {
	get() {
		return {
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
				console.log('ip address APP collection', this.collection.entries());
			}
		}
	}
};

/*** exports [end] ***/

module.exports = ipAddressWorker;
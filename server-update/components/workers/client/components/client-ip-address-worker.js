'use strict';

/*** init [begin] ***/

const ipAddressCollection = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

const clientIPAddressWorker = {
	set(id, ip) {
		ipAddressCollection.set(id, ip);
	},
	isCorrect(id, ip) {
		return ipAddressCollection.get(id) === ip;
	},
	remove(id) {
		ipAddressCollection.delete(id);
	}
};

/*** exports [end] ***/

module.exports = clientIPAddressWorker;
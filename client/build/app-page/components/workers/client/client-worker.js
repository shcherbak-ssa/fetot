'use strict';

/*** imports [begin] ***/

import createClientStore from './client-store';

/*** imports [end] ***/
/*** init [begin] ***/
/*** init [end] ***/
/*** exports [begin] ***/

let clientStore = {};

const clientWorker = {
	createClientStore() {
		clientStore = createClientStore();
		return clientStore;
	}
};

/*** exports [end] ***/
/*** src [begin] ***/
/*** src [end] ***/

export { clientStore, clientWorker };
'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const clientStore = StoreWorker.getStore('client');
const currentModuleStore = StoreWorker.getStore('current-module');

/*** init [end] ***/
/*** exports [begin] ***/

function updateModuleDataService(key) {
	return (store) => {
		clientStore.actions.updateModuleKey({
			name: currentModuleStore.state.name, key, value: store.state[key]
		})
	}
}

/*** exports [end] ***/

export default updateModuleDataService;
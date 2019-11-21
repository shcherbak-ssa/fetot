'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** exports [begin] ***/

function updateModuleDataService(key) {
	return (store) => {
		const clientStore = StoreWorker.getStore('client');
		const currentModuleStore = StoreWorker.getStore('current-module');
		
		clientStore.actions.updateModuleKey({
			name: currentModuleStore.getters.name(), key, value: store.state[key]
		})
	}
}

/*** exports [end] ***/

export default updateModuleDataService;
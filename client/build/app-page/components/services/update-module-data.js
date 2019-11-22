'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** exports [begin] ***/

async function updateModuleDataService() {
	const clientStore = StoreWorker.getStore('client');
	const currentModuleStore = StoreWorker.getStore('current-module');
	const currentBlocksStore = StoreWorker.getStore('current-blocks');
	// const currentCategoriesStore = StoreWorker.getStore('current-categories');
	
	const {name, ...$module} = currentModuleStore.state.module;
	await clientStore.actions.updateModule({
		name,
		$module: {
			...$module,
			blocks: currentBlocksStore.getters.getLikeArray(),
		}
	})
}

/*** exports [end] ***/

export default updateModuleDataService;
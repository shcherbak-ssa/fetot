'use strict';

/*** imports [begin] ***/

import {clientStore} from '../workers/client';
import {currentModuleStore} from '../workers/current-module';

/*** imports [end] ***/
/*** exports [begin] ***/

function updateModuleDataService(key, store) {
	return () => {
		clientStore.actions.updateModuleKey({
			name: currentModuleStore.state.name, key, value: store.state[key]
		})
	}
}

/*** exports [end] ***/

export default updateModuleDataService;
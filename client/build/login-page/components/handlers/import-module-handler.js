'use strict';

/*** imports [begin] ***/

import {loginPageStore} from '../store/login-page-store';

/*** imports [end] ***/
/*** exports [begin] ***/

async function importModuleHandler($module) {
	let {store: {config, inputs, data}, worker} = $module;
	await loginPageStore.actions.addInputs(inputs);
	
	return await loginPageStore.actions.addModule({
		[data.name]: { config, data, worker }
	});
}

/*** exports [end] ***/

export default importModuleHandler;
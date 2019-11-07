'use strict';

/*** imports [begin] ***/

import {loginPageStore} from '../store/login-page-store';
import inputWorker from '../workers/input';

/*** imports [end] ***/
/*** exports [begin] ***/

async function importModuleHandler($module) {
	let {store: {config, inputs, data}, worker} = $module;
	await inputWorker.createInputs(inputs);
	
	return await loginPageStore.actions.addModule({
		[data.name]: { config, data, worker }
	});
}

/*** exports [end] ***/

export default importModuleHandler;
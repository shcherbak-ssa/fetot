'use strict';

/*** imports [begin] ***/

import OutputMessage from '$fetot-services/output-message';
import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** src [begin] ***/

const clientStore = StoreWorker.getStore('client');
const currentModuleStore = StoreWorker.getStore('current-module');
const currentCategoriesStore = StoreWorker.getStore('current-categories');
const currentBlocksStore = StoreWorker.getStore('current-blocks');

/*** src [end] ***/
/*** exports [begin] ***/

const currentModuleWorker = {
	async updateCurrentModule(name) {
		if( currentModuleStore.getters.name() === name ) return ;
		
		const {categories, settings, config, blocks} = await this.changeModule(name);
		
		currentModuleStore.actions.update({name, config, settings});
		currentCategoriesStore.actions.update(categories);
		currentBlocksStore.actions.update(blocks);
		
		config.init();
	},
	
	async changeModule(name) {
		const moduleInit = await clientStore.actions.hasModule(name);
		const outputMessage = new OutputMessage({type: 'change-module'});
		
		outputMessage.set('$module', name);
		
		if( !moduleInit ) {
			outputMessage.send();
			return clientStore.state.modules[name];
		}
		
		outputMessage.set('blocks', true);
		
		const config = await importModule(name);
		const {blocks} = await outputMessage.send();
		
		let $module = clientStore.state.modules[name];
		$module = {...$module, config, blocks};
		
		await clientStore.actions.updateModule({name, $module});
		
		return $module;
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

async function importModule(name) {
	const $import = await import(`../../modules/${name}.js`);
	return $import.default;
}

/*** src [end] ***/

export default currentModuleWorker;
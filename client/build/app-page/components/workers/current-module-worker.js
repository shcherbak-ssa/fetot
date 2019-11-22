'use strict';

/*** imports [begin] ***/

import OutputMessage from '$fetot-services/output-message';
import StoreWorker from '$fetot-store-worker';

import updateModuleData from '../services/update-module-data';

/*** imports [end] ***/
/*** src [begin] ***/

const clientStore = StoreWorker.getStore('client');
const currentModuleStore = StoreWorker.getStore('current-module');
// const currentCategoriesStore = StoreWorker.getStore('current-categories');
const currentBlocksStore = StoreWorker.getStore('current-blocks');

/*** src [end] ***/
/*** exports [begin] ***/

const currentModuleWorker = {
	async updateCurrentModule(name) {
		if( currentModuleStore.getters.name() === name ) return ;
		
		if( currentModuleStore.state.isFirst ) await currentModuleStore.actions.updateIsFirst();
		else await updateModuleData();
		
		const [$module, blocks] = await this.changeModule(name);
		
		currentBlocksStore.actions.update(blocks);
		currentModuleStore.actions.update({name, ...$module});
		
		$module.config.init();
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
		
		const $module = {...clientStore.state.modules[name], config};
		await clientStore.actions.updateModule({name, $module: {...$module, blocks}});
		
		return [$module, blocks];
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
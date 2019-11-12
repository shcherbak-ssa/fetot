'use strict';

/*** imports [begin] ***/

import OutputMessage from '$fetot-services/output-message';

import {clientStore} from '../client';
import {currentCategoriesStore} from '../current-categories';
import importModuleService from '../../services/import-module-service';

import initCurrentModuleStore from './current-module-store';

/*** imports [end] ***/
/*** init [begin] ***/

const currentModuleStore = initCurrentModuleStore();

/*** init [end] ***/
/*** exports [begin] ***/

const currentModuleWorker = {
	async updateCurrentModule(name) {
		if( currentModuleStore.state.name === name ) return ;
		
		const {categories, workers, blocks} = await this.changeModule(name);
		currentModuleStore.actions.update({name, blocks, workers});
		currentCategoriesStore.actions.update(categories);
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
		
		const {categories} = clientStore.state.modules[name];
		const workers = await importModuleService(name);
		const {blocks} = await outputMessage.send();
		const $module = {categories, workers, blocks};
		
		await clientStore.actions.updateModule({name, $module});
		return $module;
	}
};

/*** exports [end] ***/

export { currentModuleStore, currentModuleWorker };
'use strict';

/*** imports [begin] ***/

import OutputMessage from '$fetot-services/output-message';

import {clientStore} from '../client';
import {currentModuleStore} from '../current-module';
import createCurrentCategoriesStore from './current-categories-store';

/*** imports [end] ***/
/*** init [begin] ***/

const currentCategoriesStore = createCurrentCategoriesStore();

/*** init [end] ***/
/*** exports [begin] ***/

const currentCategoriesWorker = {
	async create(name) {
		await currentCategoriesStore.actions.createCategory(name);
		await sendOutputMessage('create', {name});
	},
	async delete(name) {
		await currentCategoriesStore.actions.deleteCategory(name);
		await sendOutputMessage('delete', {name});
	},
	async rename(options) {
		await currentCategoriesStore.actions.renameCategory(options);
		await sendOutputMessage('rename', options);
	},
	async move(options) {
		await currentCategoriesStore.actions.moveCategory(options);
		await sendOutputMessage('move', options);
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

async function sendOutputMessage(type, options) {
	const outputMessage = new OutputMessage({type: `category/${type}`});
	Object.entries(options).forEach((item) => outputMessage.set(...item));
	
	outputMessage.send();
	
	await clientStore.actions.updateModuleKey({
		name: currentModuleStore.state.name,
		key: 'categories',
		value: currentCategoriesStore.state.categories
	})
}

/*** src [end] ***/

export { currentCategoriesStore, currentCategoriesWorker };
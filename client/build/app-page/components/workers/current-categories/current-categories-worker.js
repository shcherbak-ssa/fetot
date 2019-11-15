'use strict';

/*** imports [begin] ***/

import createCurrentCategoriesStore from './current-categories-store';

import sendOutputMessageService from '../../services/send-output-message';
import updateModuleDataService from '../../services/update-module-data';

/*** imports [end] ***/
/*** init [begin] ***/

const currentCategoriesStore = createCurrentCategoriesStore();

const sendOutputMessage = sendOutputMessageService('category');
const updateModuleData = updateModuleDataService('categories', currentCategoriesStore);

/*** init [end] ***/
/*** exports [begin] ***/

const currentCategoriesWorker = {
	async create(name) {
		await currentCategoriesStore.actions.createCategory(name);
		await sendOutputMessageAndUpdateModuleData('create', {name});
	},
	async delete(name) {
		await currentCategoriesStore.actions.deleteCategory(name);
		await sendOutputMessageAndUpdateModuleData('delete', {name});
	},
	async rename(options) {
		await currentCategoriesStore.actions.renameCategory(options);
		await sendOutputMessageAndUpdateModuleData('rename', options);
	},
	async move(options) {
		await currentCategoriesStore.actions.moveCategory(options);
		await sendOutputMessageAndUpdateModuleData('move', options);
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

async function sendOutputMessageAndUpdateModuleData(type, message) {
	updateModuleData();
	sendOutputMessage(type, message);
}

/*** src [end] ***/

export { currentCategoriesStore, currentCategoriesWorker };
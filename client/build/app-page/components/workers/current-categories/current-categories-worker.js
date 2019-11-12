'use strict';

/*** imports [begin] ***/

import OutputMessage from '$fetot-services/output-message';

import createCurrentCategoriesStore from './current-categories-store';

/*** imports [end] ***/
/*** init [begin] ***/

const currentCategoriesStore = createCurrentCategoriesStore();

/*** init [end] ***/
/*** exports [begin] ***/

const currentCategoriesWorker = {
	async create(name) {
		await currentCategoriesStore.actions.createCategory(name);
		
		const outputMessage = new OutputMessage({type: 'category/create'});
		outputMessage.set('name', name);
		
		outputMessage.send();
	},
	async delete(name) {
		await currentCategoriesStore.actions.deleteCategory(name);
		
		const outputMessage = new OutputMessage({type: 'category/delete'});
		outputMessage.set('name', name);
		
		outputMessage.send();
	},
	async rename({index, name}) {
		await currentCategoriesStore.actions.renameCategory({index, name});
		
		const outputMessage = new OutputMessage({type: 'category/rename'});
		outputMessage.set('index', index).set('name', name);
		
		outputMessage.send();
	},
	async move({currentIndex, newIndex}) {
		await currentCategoriesStore.actions.moveCategory({currentIndex, newIndex});
		
		const outputMessage = new OutputMessage({type: 'category/move'});
		outputMessage.set('currentIndex', currentIndex).set('newIndex', newIndex);
		
		outputMessage.send();
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export { currentCategoriesStore, currentCategoriesWorker };
'use strict';

/*** exports [begin] ***/

const categoriesWorker = {
	/* public */
	async categories(type, message) {
		switch( type ) {
			case 'create': return await this._createCategory(message);
			case 'delete': return await this._deleteCategory(message);
			case 'rename': return await this._renameCategory(message);
			case 'move': return await this._moveCategory(message);
		}
	},
	
	/* private */
	async _createCategory({name}) {
		await this.updateModulesCollection({
			$push: { categories: name }
		});
	},
	async _deleteCategory({name}) {
		const categories = this._getCategories();
		await this.updateModulesCollection({
			$set: { categories: categories.filter((item) => item !== name) }
		});
	},
	async _renameCategory({index, name}) {
		const categories = this._getCategories();
		await this.updateModulesCollection({
			$set: { categories: categories.map((item, i) => i === index ? name : item) }
		});
		console.log('rename category success: ', index, name);
	},
	async _moveCategory(options) {}, // @todo
	
	/* src */
	_getCategories() {
		return this.moduleConfig.categories;
	}
};

/*** exports [end] ***/

module.exports = categoriesWorker;
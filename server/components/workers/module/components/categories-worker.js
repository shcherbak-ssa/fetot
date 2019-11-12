'use strict';

/*** exports [begin] ***/

const categoriesWorker = {
	/* public */
	async categories(type, options) {
		switch( type ) {
			case 'create': return await this._createCategory(options);
			case 'delete': return await this._deleteCategory(options);
			case 'rename': return await this._renameCategory(options);
			case 'move': return await this._moveCategory(options);
		}
	},
	
	/* private */
	async _createCategory(options) {
		console.log('create category', options);
		console.log('module-config', this.moduleConfig)
	},
	async _deleteCategory(options) {
		console.log('delete category', options)
	},
	async _renameCategory(options) {
		console.log('rename category', options)
	},
	async _moveCategory(options) {
		console.log('move category', options)
	}
};

/*** exports [end] ***/

module.exports = categoriesWorker;
'use strict';

/*** imports [begin] ***/

const categoriesWorker = require('./components/categories-worker');
const blocksWorker = require('./components/blocks-worker');

/*** imports [end] ***/
/*** exports [begin] ***/

const moduleWorker = {
	...categoriesWorker,
	...blocksWorker,
	
	/* public */
	async $module(type, message) {
		switch( type ) {
			case 'update-positions':
				return await this._updatePositions(message);
			case 'update-settings':
				return await this._updateSettings(message);
		}
	},
	
	/* private */
	async _updatePositions({positions}) {
		await this.updateModulesCollection({
			$set: { positions: positions }
		});
	},
	async _updateSettings({key, value}) {
		await this.updateModulesCollection({
			$set: { [`settings.${key}`]: value }
		});
	},
	
	/* common */
	async updateModulesCollection(updateObject) {
		return await this.clientModulesCollection.updateOneDocument(
			{name: this.moduleName},
			updateObject
		);
	},
};

/*** exports [end] ***/

module.exports = moduleWorker;
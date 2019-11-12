'use strict';

/*** imports [begin] ***/

const moduleWorker = require('../../module');
const MongodbService = require('../../../services/mongodb');

/*** imports [end] ***/
/*** init [begin] ***/
/*** init [end] ***/
/*** exports [begin] ***/

class Connection {
	constructor(client_id) {
		this.moduleConfig = {};
		this.blocksCollection = {};
		this.clientDatabase = MongodbService.createDatabase(client_id);
		this.clientModulesCollection = this.clientDatabase.collection('modules');
	}
	
	async parseMessage({type, data: message}) {
		if( type === 'change-module' ) return await this._changeModule(message);
		const [workerType, worker] = type.split('/');
		
		switch( workerType ) {
			case 'category':
				await this.categories(worker, message);
				break;
			case 'block':
				await this.blocks(worker, message);
				break;
		}
		
		return null
	}
	
	/* private */
	async _changeModule({$module, blocks}) {
		await this._updateModuleData($module);
		if( !blocks ) return null;
		
		blocks = await this.getAllBlocks();
		return { message: {blocks} }
	}
	async _updateModuleData(name) {
		this.moduleConfig = await this.clientModulesCollection.findOneDocument({name});
		this.blocksCollection = this.clientDatabase.collection(name);
	}
}

Object.assign( Connection.prototype, moduleWorker );

/*** exports [end] ***/
/*** src [begin] ***/
/*** src [end] ***/

module.exports = Connection;
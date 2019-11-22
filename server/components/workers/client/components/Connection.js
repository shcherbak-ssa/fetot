'use strict';

/*** imports [begin] ***/

const appModules = require('../../../../fetot/app-modules');
const moduleWorker = require('../../module');

const MongodbService = require('../../../services/mongodb');
const validationService = require('../../../services/validation');

/*** imports [end] ***/
/*** init [begin] ***/
/*** init [end] ***/
/*** exports [begin] ***/

class Connection {
	constructor(client_id) {
		this.moduleWorkers = {};
		this.moduleMessageValidation = {};
		
		this.moduleName = '';
		this.blocksCollection = {};
		this.clientDatabase = MongodbService.createDatabase(client_id);
		this.clientModulesCollection = this.clientDatabase.collection('modules');
	}
	
	async parseMessage({type, data: message}) {
		if( type === 'change-module' ) return await this._changeModule(message);
		const [workerType, worker] = type.split('/');
		
		switch( workerType ) {
			case 'module':
				await this.$module(worker, message);
				break;
			case 'category':
				await this.categories(worker, message);
				break;
			case 'block':
				if( worker === 'delete' ) {
					if( !message.id || typeof message.id !== 'string' ) return null
				} else {
					const result = await this.moduleMessageValidation(message);
					if( typeof result === 'object' ) return result;
				}
				
				// if( worker in this.moduleWorkers )
				// 	message =
				
				return await this.blocks(worker, message);
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
		const {schema, workers} = appModules[name];
		
		this.moduleWorkers = workers;
		this.moduleMessageValidation = validationService(schema);
		
		this.moduleName = name;
		this.blocksCollection = this.clientDatabase.collection(name);
	}
}

Object.assign( Connection.prototype, moduleWorker );

/*** exports [end] ***/
/*** src [begin] ***/
/*** src [end] ***/

module.exports = Connection;
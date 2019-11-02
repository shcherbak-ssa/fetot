'use strict';

/*** imports [begin] ***/

import Store from 'fetot-services/store';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class ModuleWorker {
	constructor($module) {
		this.currentModule = $module;
	}
	
	static modules = new Map();
	static init() {
	
	}
	
	async changeModule($module) {
		if( ModuleWorker.modules.has($module) ) await this._initNewModule($module);
		
	}
	async _initNewModule($module) {
	
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default {};
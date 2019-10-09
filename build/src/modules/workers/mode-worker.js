'use strict';

class ModeWorker {
	constructor({modules}) {
		this.modules = modules;
		this.currentModule = {};
	}
	
	init() {
	
	}
	changeModule(newModule) {
		this.currentModule.remove();
		this.currentModule = this.modules.get(newModule);
		this.currentModule.init();
	}
}

export default ModeWorker;
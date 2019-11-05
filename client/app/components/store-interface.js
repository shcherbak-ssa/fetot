'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

class StoreInterface {
	constructor(path) {
		this.path = path;
		
		let SIStore = StoreInterface.store;
		
		this.state = SIStore.state[this.path];
		this.getters = SIStore.getters[this.path];
		
		this.actions = new Proxy({}, {
			get(target, prop) {
				return (options) => {
					return SIStore.actions[path].dispatch(prop, options);
				}
			}
		});
	}
	
	/* static */
	static store = {};
	static createStore(path, data) {
		StoreInterface.store.registerModule(path, data);
		return new StoreInterface(path);
	}
}

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default StoreInterface;
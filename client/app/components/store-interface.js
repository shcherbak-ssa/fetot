'use strict';

/*** exports [begin] ***/

class StoreInterface {
	constructor(path) {
		this.path = path;
		
		let SIStore = StoreInterface.Store;
		this.state = SIStore.state[this.path];
		
		this.getters = new Proxy({}, {
			get(target, prop) {
				return (options) => {
					let getter = [path, prop].join('/');
					return SIStore.getters[getter](options);
				}
			}
		});
		
		this.actions = new Proxy({}, {
			get(target, prop) {
				return async (options) => {
					let dispatch = [path, prop].join('/');
					return await SIStore.dispatch(dispatch, options);
				}
			}
		});
	}
	
	/* static */
	static Store = {};
	static createStore(path, data) {
		StoreInterface.Store.registerModule(path, data);
		return new StoreInterface(path);
	}
}

/*** exports [end] ***/

export default StoreInterface;
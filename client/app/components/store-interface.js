'use strict';

/*** exports [begin] ***/

class StoreInterface {
	constructor(path) {
		this.state = StoreInterface.Store.state[path];
		
		this.getters = new Proxy({path}, {
			get(target, prop) {
				return (options) => {
					let getter = [target.path, prop].join('/');
					return StoreInterface.Store.getters[getter](options);
				}
			}
		});
		
		this.actions = new Proxy({path}, {
			get(target, prop) {
				return async (options) => {
					let dispatch = [target.path, prop].join('/');
					return await StoreInterface.Store.dispatch(dispatch, options);
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
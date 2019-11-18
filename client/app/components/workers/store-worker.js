'use strict';

/*** exports [begin] ***/

const StoreWorker = {
	store: {},
	storeCollection: new Map(),
	
	getStore(path) {
		return this.storeCollection.get(path);
	},
	createStore(path, store) {
		this.store.registerModule(path, { namespaced: true, ...store });
		this.storeCollection.set(path, createInterfaceByProxy(path));
	},
	removeStore(path) {
		this.store.unregisterModule(path);
		this.storeCollection.delete(path);
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

function createInterfaceByProxy(path) {
	return {
		state: StoreWorker.store.state[path],
		getters: new Proxy({}, {
			get(t, prop) {
				return (options) => {
					const getter = [path, prop].join('/');
					return StoreWorker.store.getters[getter](options)
				}
			}
		}),
		actions: new Proxy({}, {
			get(t, prop) {
				return async (options) => {
					const dispatch = [path, prop].join('/');
					return await StoreWorker.store.dispatch(dispatch, options);
				}
			}
		})
	}
}

/*** src [end] ***/

export default StoreWorker;
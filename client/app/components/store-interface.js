'use strict';

/*** exports [begin] ***/

const StoreInterface = {
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
	return new Proxy({}, {
		get(target, prop) {
			switch( true ) {
				case prop.startsWith('$'):
					return async (options) => {
						const dispatch = [path, prop].join('/');
						return await StoreInterface.store.dispatch(dispatch, options);
					};
				case prop.startsWith('get'):
					return (options) => {
						const getter = [path, prop].join('/');
						return StoreInterface.store.getters[getter](options)
					};
				default:
					return StoreInterface.store.state[path];
			}
		}
	})
}

/*** src [end] ***/

export default StoreInterface;
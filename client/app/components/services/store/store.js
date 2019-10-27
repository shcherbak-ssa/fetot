'use strict';

/*** imports [begin] ***/

import src from './src';
import initSection from './section';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

function initStore() {
	function store(name) {
		return this.map.get(name);
	}
	
	store.map = new Map();
	store.create = src.create.bind(store, initSection());
	store.delete = src.delete.bind(store);
	
	return store
}

/*** exports [end] ***/

export default initStore();
'use strict';

/*** imports [begin] ***/

import inputStore from './input-store';

/*** imports [end] ***/
/*** init [begin] ***/

const inputCollection = new Map();

/*** init [end] ***/
/*** exports [begin] ***/

const inputWorker = {
	getInput(name) {
		return inputCollection.get(name)
	},
	getInputsForWorker(inputs) {
		inputs = inputs.map((name) => [name, inputCollection.get(name)]);
		return Object.fromEntries(inputs);
	},
	async createInputs(inputs) {
		return Promise.all(Object.entries(inputs).map(async ([name, data]) => {
			if( inputCollection.has(name) ) return ;
			
			let store = await inputStore.create(name, data);
			inputCollection.set(name, store);
		}))
	}
};

/*** exports [end] ***/

export default inputWorker;
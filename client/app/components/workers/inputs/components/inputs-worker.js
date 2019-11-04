'use strict';

/*** imports [begin] ***/

import currentInputWorker from './current-input-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const APPEND_INPUT_TO_COLLECTION = 'append_input_to_collection';
const INCREMENT_INPUTS_COUNT = 'increment_inputs_count';

/*** init [end] ***/
/*** exports [begin] ***/

const inputsWorker = {
	namespaced: true,
	state: {
		currentInputWorker,
		inputsCollection: {},
		inputsCount: 0
	},
	getters: {
		getInput(state) {
			return (input) => state.inputsCollection[input];
		},
		getInputsForModuleWorker(state) {
			return (inputs) => {
				let retInputs = {};
				
				inputs.forEach((name) => {
					retInputs[name] = {...state.inputsCollection[name], isEmpty}
				});
				
				return retInputs;
			}
		}
	},
	mutations: {
		[APPEND_INPUT_TO_COLLECTION]: (state, newInputs) => {
			state.inputsCollection = { ...state.inputsCollection, ...newInputs }
		},
		[INCREMENT_INPUTS_COUNT]: (state) => {
			state.inputsCount += 1
		}
	},
	actions: {
		async appendInputToCollection(context, newInputs) {
			context.commit(APPEND_INPUT_TO_COLLECTION, newInputs)
		},
		async createCurrentInputWorker({state, commit}, {input, store}) {
			let id = `inputs-worker/input-${input}-${state.inputsCount}`;
			commit(INCREMENT_INPUTS_COUNT);
			
			input = state.inputsCollection[input];
			
			store.registerModule(id, state.currentInputWorker);
			store.dispatch(`${id}/updateInputState`, {...input});
			
			return {
				id, states: ['type', 'value', 'placeholder', 'icon', 'error', 'event'],
				dispatch: store[id].dispatch
			}
		},
		async removeCurrentInputWorker(context, {store, id}) {
			store.unregisterModule(id);
		}
	},
	modules: {}
};

/*** exports [end] ***/
/*** src [begin] ***/

function isEmpty() {
	return this.value === '' ? 'Current field cannot be empty' : false
}

/*** src [end] ***/

export default inputsWorker;
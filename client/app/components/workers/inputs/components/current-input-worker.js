'use strict';

/*** init [begin] ***/

const UPDATE_INPUT_STATE = 'uis';
const UPDATE_INPUT_VALUE = 'uiv';
const SET_INPUT_ERROR = 'sie';

/*** init [end] ***/
/*** exports [begin] ***/

const currentInputWorker = {
	state() {
		return {
			type: 'text',
			value: '',
			placeholder: '',
			icon: '',
			error: '',
			event: false
		}
	},
	mutations: {
		[UPDATE_INPUT_STATE]: (state, options) => {
			Object.assign(state, options);
		},
		[UPDATE_INPUT_VALUE]: (state, value) => {
			state.value = value;
		},
		[SET_INPUT_ERROR]: (state, error) => {
			state.error = error;
		}
	},
	actions: {
		updateInputState(context, options) {
			context.commit(UPDATE_INPUT_STATE, options)
		},
		updateInputValue(context, value) {
			context.commit(UPDATE_INPUT_VALUE, value)
		},
		setInputError(context, error = '') {
			context.commit(SET_INPUT_ERROR, error)
		}
	}
};

/*** exports [end] ***/

export default currentInputWorker;
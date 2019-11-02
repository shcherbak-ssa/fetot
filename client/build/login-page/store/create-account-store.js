'use strict';

/*** exports [begin] ***/

const createAccountStore = {
	module: {
		name: 'create-account',
		title: 'New account',
		link: 'Back to start',
		content: {
			inputs: [ 'fullname', 'password' ],
			button: [ 'Create' ]
		}
	},
	inputs: {
		fullname: {
			type: 'text',
			value: '',
			placeholder: 'Full name',
			icon: '&#xe800;',
			error: ''
		}
	}
};

/*** exports [end] ***/

export default createAccountStore;
'use strict';

/*** exports [begin] ***/

const createAccountStore = {
	config: {
		name: 'create-account',
		next: {
			byLink: 'sing-in',
			byButton: false
		}
	},
	data: {
		title: 'New account',
		link: 'Back to start',
		content: {
			text: '',
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
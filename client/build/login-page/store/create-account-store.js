'use strict';

/*** exports [begin] ***/

const createAccountStore = {
	config: {
		next: {
			byLink: 'sing-in',
			byButton: false
		}
	},
	data: {
		name: 'create-account',
		title: 'New account',
		link: 'Back to start',
		content: {
			text: '',
			inputs: [ 'fullname', 'password' ],
			button: 'Create'
		}
	},
	inputs: {
		fullname: {
			name: 'fullname',
			placeholder: 'Full name',
			icon: '&#xe800;'
		}
	}
};

/*** exports [end] ***/

export default createAccountStore;
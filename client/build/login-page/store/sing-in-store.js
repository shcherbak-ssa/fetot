'use strict';

/*** exports [begin] ***/

const singInStore = {
	config: {
		next: {
			byLink: 'login',
			byButton: 'confirm-email'
		}
	},
	data: {
		name: 'sing-in',
		title: 'Sing in',
		link: 'Already have an account',
		content: {
			text: '',
			inputs: [ 'email' ],
			button: 'Continue'
		}
	},
	inputs: {
		email: {
			type: 'text',
			value: '',
			placeholder: 'E-mail',
			icon: '&#xf0e0;',
			error: ''
		}
	}
};

/*** exports [end] ***/

export default singInStore;
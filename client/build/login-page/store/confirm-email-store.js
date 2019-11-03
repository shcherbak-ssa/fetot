'use strict';

/*** exports [begin] ***/

const confirmEmailStore = {
	config: {
		name: 'confirm-email',
		next: {
			byLink: 'sing-in',
			byButton: 'create-account'
		}
	},
	data: {
		title: 'Confirm email',
		link: 'Change email',
		content: {
			text: 'Please, check your email and enter the received code',
			inputs: [ 'confirm-email' ]
		}
	},
	inputs: {
		'confirm-email': {
			type: 'text',
			value: '',
			placeholder: 'Confirmation code',
			icon: '&#xe802;',
			error: '',
			event: true
		}
	}
};

/*** exports [end] ***/

export default confirmEmailStore;
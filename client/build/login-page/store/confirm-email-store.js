'use strict';

/*** exports [begin] ***/

const confirmEmailStore = {
	config: {
		next: {
			byLink: 'sing-in',
			byButton: 'create-account'
		}
	},
	data: {
		name: 'confirm-email',
		title: 'Confirm email',
		link: 'Change email',
		content: {
			text: 'Please, check your email and enter the received code',
			inputs: [ 'code' ]
		}
	},
	inputs: {
		code: {
			name: 'code',
			placeholder: 'Confirmation code',
			icon: '&#xE81F;',
			event: true
		}
	}
};

/*** exports [end] ***/

export default confirmEmailStore;
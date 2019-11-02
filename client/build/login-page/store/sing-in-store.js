'use strict';

/*** exports [begin] ***/

const singInStore = {
	module: {
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
		},
		password: {
			type: 'password',
			value: '',
			placeholder: 'Password',
			icon: '&#xe801;',
			error: ''
		}
	}
};

/*** exports [end] ***/

export default singInStore;
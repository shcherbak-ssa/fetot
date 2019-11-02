'use strict';

/*** exports [begin] ***/

const loginStore = {
	module: {
		name: 'login',
		title: 'Login',
		link: 'Do not have an account',
		content: {
			text: '',
			inputs: [ 'email', 'password' ],
			button: 'Enter'
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

export default loginStore;
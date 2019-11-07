'use strict';

/*** exports [begin] ***/

const loginStore = {
	config: {
		next: {
			byLink: 'sing-in',
			byButton: false
		}
	},
	data: {
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
			name: 'email',
			placeholder: 'E-mail',
			icon: '&#xf0e0;'
		},
		password: {
			name: 'password',
			type: 'password',
			placeholder: 'Password',
			icon: '&#xe801;'
		}
	}
};

/*** exports [end] ***/

export default loginStore;
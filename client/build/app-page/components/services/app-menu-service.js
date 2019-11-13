'use strict';

/*** imports [begin] ***/

import $localStorage from '$fetot-services/local-storage';
import $cookie from '$fetot-services/cookie';

/*** imports [end] ***/
/*** init [begin] ***/

const list = [
	{
		icon: '&#xE812;',
		title: 'Settings',
		label: 'settings'
	},
	{
		icon: '&#xE820;',
		title: 'Log out',
		label: 'logout'
	}
];
const submenu = {
	type: 'confirm',
	icon: '&#xE820;',
	text: 'You are want to log out.<br>Are you sure?'
};

/*** init [end] ***/
/*** exports [begin] ***/

const appMenuService = {
	list,
	async parseLabel(label) {
		switch( label ) {
			case 'settings':
				return await this.settings();
			case 'logout':
				const self = this;
				return { submenu, handler: self.logout }
		}
	},
	async logout(label) {
		if( !label ) return ;
		
		$localStorage.item.remove('client');
		$cookie.remove('$fetot', { path: '/' });
		
		location.reload();
	},
	async settings() {
		alert('client settings')
	}
};

/*** exports [end] ***/

export default appMenuService;
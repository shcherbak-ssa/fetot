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

/*** init [end] ***/
/*** exports [begin] ***/

const appMenuService = {
	list,
	logout() {
		$localStorage.item.remove('client');
		$cookie.remove('$fetot', { path: '/' });
		
		location.reload();
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default appMenuService;
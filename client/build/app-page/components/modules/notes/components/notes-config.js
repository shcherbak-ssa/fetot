'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

const createBlockModalOptions = {
	header: {
		title: 'New note',
		icon: '&#xE80C;'
	},
	modalType: 'is-small',
	confirmHandler: '',
	data: {
		title: ''
	}
};

/*** init [end] ***/
/*** exports [begin] ***/

const notesConfig = {
	blockContent: {},
	createBlockModalOptions
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default notesConfig
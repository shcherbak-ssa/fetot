'use strict';

/*** imports [begin] ***/

/*** imports [end] ***/
/*** init [begin] ***/

const notesMenuBlock = {
	title: '',
	items: [
		{
			name: 'Edit note',
			icon: '&#xE811;',
			label: 'edit'
		},
		{
			name: 'Move to category',
			icon: '&#xF292;',
			label: 'move-to-category'
		},
		{
			name: 'Move to folder',
			icon: '&#xE813;',
			label: 'move-to-folder'
		},
		{
			name: 'Delete',
			icon: '&#xF1F8;',
			label: 'delete'
		}
	]
};

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
	blockMenu: notesMenuBlock
};

/*** exports [end] ***/
/*** src [begin] ***/

/*** src [end] ***/

export default notesConfig
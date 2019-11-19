'use strict';

/*** imports [begin] ***/

import {createCurrentNoteStore} from './components/current-note-store';

import notesModuleView from './view/notes-module.vue';

import noteModalContentComponent from './view/note-modal-content-component.vue';
import noteModalFooterComponent from './view/note-modal-footer-component.vue';

/*** imports [end] ***/
/*** exports [begin] ***/

const notesModule = {
	view: notesModuleView,
	
	modalCreateBlockConfig: {
		options: {
			modalType: 'is-small',
			header: { title: 'New note', icon: '&#xE80C;' }
		},
		contentComponent: noteModalContentComponent,
		footerComponent: noteModalFooterComponent
	},
	
	init() {
		createCurrentNoteStore();
	}
};

/*** exports [end] ***/

export default notesModule
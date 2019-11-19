'use strict';

/*** imports [begin] ***/

import {createCurrentNoteStore} from './components/current-note-store';

import notesModule from './view/notes-module/notes-module.vue';

import noteModalContentComponent from './view/note-modal-content-component.vue';
import noteModalFooterComponent from './view/note-modal-footer-component.vue';

/*** imports [end] ***/
/*** init [begin] ***/

const createNoteModalConfig = {
	options: {
		modalType: 'is-small',
		header: { title: 'New note', icon: '&#xE80C;' }
	},
	contentComponent: noteModalContentComponent,
	footerComponent: noteModalFooterComponent
};

/*** init [end] ***/
/*** exports [begin] ***/

const notesModuleConfig = {
	view: notesModule,
	createNoteModalConfig,
	
	init() {
		createCurrentNoteStore();
	}
};

/*** exports [end] ***/

export default notesModuleConfig
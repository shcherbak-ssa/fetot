'use strict';

/*** imports [begin] ***/

import {createCurrentNoteStore} from './components/current-note-store';

import notesModuleView from './view/notes-module.vue';
import createNoteModalConfig from './components/create-note-modal-config';

/*** imports [end] ***/
/*** exports [begin] ***/

const notesModule = {
	view: notesModuleView,
	createNoteModalConfig,
	
	init() {
		createCurrentNoteStore();
	}
};

/*** exports [end] ***/

export default notesModule
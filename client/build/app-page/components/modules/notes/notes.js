'use strict';

/*** imports [begin] ***/

import createNoteModalConfig from './components/create-note-modal-config';
import {createCurrentNoteStore} from './components/current-note-store';

import notesModule from './view/notes-module/notes-module.vue';

/*** imports [end] ***/
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
'use strict';

/*** imports [begin] ***/

import noteModalContentComponent from '../view/note-modal-content-component.vue';
import noteModalFooterComponent from '../view/note-modal-footer-component.vue';

/*** imports [end] ***/
/*** exports [begin] ***/

const createNoteModalConfig = {
	options: {
		modalType: 'is-small',
		header: { title: 'New note', icon: '&#xE80C;' }
	},
	contentComponent: noteModalContentComponent,
	footerComponent: noteModalFooterComponent
};

/*** exports [end] ***/

export default createNoteModalConfig;
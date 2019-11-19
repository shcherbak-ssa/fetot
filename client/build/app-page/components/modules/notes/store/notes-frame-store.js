'use strict';

/*** imports [begin] ***/

import StoreWorker from '$fetot-store-worker';

/*** imports [end] ***/
/*** init [begin] ***/

const currentNoteStore = StoreWorker.getStore('current-note');

/*** init [end] ***/
/*** exports [begin] ***/

const notesFrameStore = {
	frameOptions: {
		header: {
			title: currentNoteStore.getters.title,
			icon: '&#xE80C;'
		}
	}
};

/*** exports [end] ***/

export default notesFrameStore;
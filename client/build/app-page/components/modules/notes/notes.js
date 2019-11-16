'use strict';

/*** imports [begin] ***/

import notesConfig from './components/notes-config';

import drawBlockContentService from '../components/services/draw-block-content-service';

/*** imports [end] ***/
/*** init [begin] ***/

/*** init [end] ***/
/*** exports [begin] ***/

const notesModule = {
	config: notesConfig,
	workers: {
		drawBlockContent(content) {
			content = content.map(parseContentItem);
			return content.join('');
		}
	}
};

/*** exports [end] ***/
/*** src [begin] ***/

function parseContentItem(contentItem) {
	switch( drawBlockContentService.getContentItemType(contentItem) ) {
		case 'String':
			return drawBlockContentService.getParagraph(contentItem);
		case 'Array':
			return drawBlockContentService.getList(contentItem)
	}
}

/*** src [end] ***/

export default notesModule
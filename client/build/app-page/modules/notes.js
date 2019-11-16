'use strict';

/*** imports [begin] ***/

import drawBlockContentService from '../components/services/draw-block-content-service';

/*** imports [end] ***/
/*** init [begin] ***/

const notesConfig = {
	blockType: 'common',
	blockContent: {},
	createBlockModalOptions: {
		header: {
			title: 'New note',
			icon: '&#xE80C;'
		},
		modalType: 'is-small',
		confirmHandler: '',
		data: {
			title: ''
		}
	}
};

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
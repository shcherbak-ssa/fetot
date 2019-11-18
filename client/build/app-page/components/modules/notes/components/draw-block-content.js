'use strict';

/*** imports [begin] ***/

import trueType from '$fetot-services/true-type';
import drawBlockService from '$fetot-services/draw-block';

/*** imports [end] ***/
/*** exports [begin] ***/

function drawBlockContent(content) {
	return content.map(parseContentItem).join('');
}

/*** exports [end] ***/
/*** src [begin] ***/

function parseContentItem(contentItem) {
	switch( trueType.get(contentItem) ) {
		case 'String':
			return drawBlockService.content.getParagraph(contentItem);
		case 'Array':
			return drawBlockService.content.getList(contentItem)
	}
}

/*** src [end] ***/

export default drawBlockContent
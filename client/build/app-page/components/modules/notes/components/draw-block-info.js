'use strict';

/*** imports [begin] ***/

import drawBlockService from '$fetot-services/draw-block';

/*** imports [end] ***/
/*** exports [begin] ***/

const drawBlockInfo = {
	date: drawBlockService.info.getDate
};

/*** exports [end] ***/

export default drawBlockInfo